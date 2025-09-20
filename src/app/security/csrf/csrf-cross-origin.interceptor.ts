import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environment/environment';
//import { CsrfService } from '../../security/csrf/csrf.service';

// Mutating metodlar
function isUnsafe(method: string) {
  return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase());
}

/*
// Bu interceptor, sadece absolute ve allowlist'te olan origin'lere giden mutating isteklerde çalışır.
// Amaç: Angular built-in XSRF interceptor'ının cross-origin'de eklemediği header'ı eklemek.
export const csrfCrossOriginInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  try {
    const baseOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const url = new URL(req.url, baseOrigin || 'http://localhost');
    const targetOrigin = url.origin;
    const isCrossOrigin = baseOrigin && targetOrigin && baseOrigin !== targetOrigin;
    const isAllowed = (environment.csrf.allowedOrigins ?? []).includes(targetOrigin);

    // Sadece cross-origin + allowlist + mutating isteklerde çalış
    if (isCrossOrigin && isAllowed && isUnsafe(req.method)) {
      const csrf = inject(CsrfService);
      const token = csrf.getToken();

      if (token) {
        req = req.clone({
          withCredentials: true,
          setHeaders: {
            [environment.csrf.headerName]: token,
            'X-Requested-With': 'XMLHttpRequest',
          },
        });
      } else {
        // Token yoksa; yine de credentials ile git ki server 403 dönebilsin (doğru davranış)
        req = req.clone({ withCredentials: true });
      }
    }
  } catch {
    // URL parse edilemezse dokunma
  }

  return next(req);
};
*/