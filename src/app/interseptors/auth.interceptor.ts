import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { SecureTokenService } from '../services/secureToken.service';

// Single-flight refresh state
let isRefreshing = false;
const tokenRefreshed$ = new Subject<string | null>();

function addAuthHeader(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  // Not: withCredentials ayarına dokunmuyoruz. CSRF interceptor'ı veya explicit istek belirler.
  return req.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`
      //,
      //'X-Requested-With': 'XMLHttpRequest',
    },
  });
}

function isRefreshLike(url: string): boolean {
  // Path temelli basit kontrol; import path sorunlarını önlemek için environment kullanmıyoruz
  return /\/auth\/refresh\b/.test(url);
}

function isLoginLike(url: string): boolean {
  return /\/auth\/login\b/.test(url);
}

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const tokenStore = inject(SecureTokenService);
  const auth = inject(AuthService);

  const token = tokenStore.getToken();
  const withAuth = token ? addAuthHeader(req, token) : req;

  return next(withAuth).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // Login veya refresh çağrısı 401 ise -> oturum kurtarılamaz
      if (isLoginLike(req.url) || isRefreshLike(req.url)) {
        tokenStore.clear();
        return throwError(() => error);
      }

      if (!isRefreshing) {
        isRefreshing = true;
        return auth.refresh().pipe(
          switchMap((newToken) => {
            tokenRefreshed$.next(newToken.value);
            // Orijinal isteği yeni token ile tekrar gönder
            return next(addAuthHeader(req, newToken.value!));
          }),
          catchError((refreshErr) => {
            tokenRefreshed$.next(null);
            tokenStore.clear();
            return throwError(() => refreshErr);
          }),
          finalize(() => {
            isRefreshing = false;
          })
        );
      } else {
        // Başka bir refresh devam ediyorsa: yeni token yayınlanınca tekrar dene
        return tokenRefreshed$.pipe(
          filter((tkn): tkn is string => !!tkn),
          take(1),
          switchMap((newToken) => next(addAuthHeader(req, newToken)))
        );
      }
    })
  );
};