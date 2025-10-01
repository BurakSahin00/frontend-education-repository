import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectToken } from '../management/selectors/auth.selector';


function addAuthHeader(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  // Not: withCredentials ayarına dokunmuyoruz. CSRF interceptor'ı veya explicit istek belirler.
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
      //,
      //'X-Requested-With': 'XMLHttpRequest',
    },
  });
}

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const store = inject(Store);
  const isExpired = (token: string): boolean => {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      const payload = JSON.parse(atob(parts[1]));
      if (!payload || typeof payload.exp !== 'number') return false; // if no exp, don't block
      const nowMs = Date.now();
      return nowMs >= payload.exp * 1000;
    } catch {
      return true;
    }
  };
  return store.select(selectToken).pipe(
    take(1),
    map((token) => (token && !isExpired(token)) ? token : null),
    switchMap((validToken) => next(validToken ? addAuthHeader(req, validToken) : req))
  );
};