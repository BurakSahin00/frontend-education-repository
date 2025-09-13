import { HttpInterceptorFn, HttpHandlerFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    // Mutlak URL'leri (http:// veya https:// ile başlayan) değiştirmiyoruz
    const isAbsolute = /^https?:\/\//i.test(req.url);
    const targetUrl = isAbsolute ? req.url : `${req.url.startsWith('/') ? '' : '/'}${req.url}`;

    // Sadece aynı origin ise credentials ekleyin (SSR-safe)
    let shouldIncludeCreds = true;
    try {
        if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
            const reqOrigin = new URL(targetUrl, window.location.origin).origin;
            shouldIncludeCreds = reqOrigin === window.location.origin;
        }
    } catch {
        // URL parse veya SSR ortamında güvenli varsayım
        shouldIncludeCreds = false;
    }

    return next(req.clone({
        url: targetUrl,
        withCredentials: shouldIncludeCreds,
        setHeaders: { 'X-Requested-With': 'XMLHttpRequest' },
    }));
};