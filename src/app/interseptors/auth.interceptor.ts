import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
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
  return store.select(selectToken).pipe(
    take(1),
    switchMap((token) => next(token ? addAuthHeader(req, token) : req))
  );
};