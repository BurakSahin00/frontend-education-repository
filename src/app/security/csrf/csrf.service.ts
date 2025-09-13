import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoggingService } from "../../services/logging.service";
import { Observable, tap, of, catchError, take, map } from "rxjs";
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { environment } from '../../environment/environment';

interface CsrfInitResponse {
  // Sunucu JSON body döndürüyorsa token burada gelir. Dönmüyorsa `undefined` olur.
  token?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CsrfService {
    constructor(@Inject(PLATFORM_ID) private pid: Object, private http: HttpClient, private logger: LoggingService) { }

    private memoryToken: string | null = null;

    getToken(): string | null {
        // Öncelik: Cookie (subdomain senaryosunda Domain=.example.com ise okunabilir)
        const fromCookie = this.readCookie(environment.csrf.cookieName);
        if (fromCookie) return fromCookie;

        // Cookie okunamıyorsa (farklı site) bellekteki token'ı kullan
        return this.memoryToken;
    }

  setMemoryToken(token: string | null) {
    this.memoryToken = token;
  }

  ensureToken$(): Observable<void> {
    // SSR'de çalıştırmamak için kontrol
    if (!isPlatformBrowser(this.pid)) return of(void 0);

    // Cookie ile zaten mevcutsa (same-origin/subdomain senaryosu) çağrı yapma
    if (this.readCookie(environment.csrf.cookieName)) return of(void 0);

    // Cookie okunamıyorsa (ör. farklı site), init endpoint'ine GET at.
    // Not: withCredentials şart; sunucu CORS'ta Allow-Credentials:true ve Allow-Origin: <ui-origin> döndürmelidir.
    // Cross-origin senaryosunda init çağrısını backend origin'ine yap
    let initUrl = environment.csrf.initEndpoint; // same-origin varsayılan
    try {
      const baseOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const apiOrigin = new URL(environment.apiUrl).origin;
      // API origin'i UI origin'inden farklıysa absolute init URL kullan
      if (apiOrigin && baseOrigin && apiOrigin !== baseOrigin) {
        initUrl = new URL(environment.csrf.initEndpoint, environment.apiUrl).toString();
      }
    } catch {
      // URL hatası olursa relative URL ile devam et
    }
    return this.http
      .get<CsrfInitResponse>(initUrl, { withCredentials: true })
      .pipe(
        tap((res) => {
          // Sunucu body'de token döndürürse belleğe yaz (synchronizer token pattern)
          if (res && typeof res === 'object' && 'token' in res) {
            const bodyToken = (res as CsrfInitResponse).token;
            if (bodyToken) this.setMemoryToken(bodyToken);
          }
        }),
        map(() => void 0)
      );
  }

    private readCookie(name: string): string | null {
        if (!isPlatformBrowser(this.pid)) return null;
        const escaped = name.replace(/[$()*+./?[\\\]^{|}-]/g, '\\$&');
        const match = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    }
}