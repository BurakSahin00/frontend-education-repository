import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SecureTokenService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Use httpOnly cookies for production
  setToken(token: string, expiresIn: number): void {
    if (isPlatformBrowser(this.platformId)) {
      // For development - encrypted localStorage
      //const encrypted = this.encryptToken(token);
      const expiry = Date.now() + (expiresIn * 1000);
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify({
        //token: encrypted,
        expiry
      }));
    }
  }
  
  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    const stored = localStorage.getItem(this.TOKEN_KEY);
    if (!stored) return null;
    
    const { token, expiry } = JSON.parse(stored);
    
    // Check expiry
    if (Date.now() > expiry) {
      this.clearToken();
      return null;
    }

    return null; //this.decryptToken(token);
  }
  
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() >= (payload.exp * 1000);
    } catch {
      return true;
    }
  }
  
  clearToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
}