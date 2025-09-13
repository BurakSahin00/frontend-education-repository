import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoggingService } from "../../services/logging.service";
import { Observable, tap, of, catchError, take, map } from "rxjs";
import { environment } from "../../environment/environment";
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CsrfService {
    constructor(@Inject(PLATFORM_ID) private pid: Object, private http: HttpClient, private logger: LoggingService) { }

    ensureToken$(): Observable<void> {

         if (!isPlatformBrowser(this.pid)) return of(void 0)

        const hasCookie =
            document.cookie.includes(`${environment.csrf.cookieName}=`);

        if (hasCookie) {
            this.logger.info('CSRF cookie already present.');
            return of(void 0);
        }

        return this.http.get(environment.csrf.initEndpoint, { withCredentials: true }).pipe(
            take(1),
            tap(() => this.logger.info('CSRF token fetched from server.')),
            map(() => void 0),
            catchError(err => {
                this.logger.error('Failed to fetch CSRF token:', err);
                return of(void 0);
            })
        );
    }
}