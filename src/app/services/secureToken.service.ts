import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SecureTokenService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private accessToken: string | null = null;

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return this.accessToken;
  }

  setToken(token: string | null) {
    if (isPlatformBrowser(this.platformId)) {
      this.accessToken = token;
    }
  }

  clear() {
    if (isPlatformBrowser(this.platformId)) {
      this.setToken(null);
    }
  } 

  isAuthenticated(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return !!this.getToken();
  }
}