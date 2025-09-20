import { inject } from '@angular/core/primitives/di';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environment/environment';
import { LoginRequest } from '../models/auth.model';
import { Response } from '../features/todo/model/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use relative API paths; same-origin via Angular dev proxy or reverse proxy
  private readonly API_KEY = environment.apiKey;
  private isBrowser: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  login(loginRequest: LoginRequest): Observable<any> {
    console.log('AuthService login called with', loginRequest);
    return this.http.post<any>(`/api/auth/login`, loginRequest, {
      withCredentials: true
    });
    //State yönetimi kısmında response verisinden accessToken'ı Store'a kaydet
    //ve her istek için header'a ekleyecek interceptor yazılacak.
  }

  logout(): Observable<any> {
    return this.http.post<any>(`/api/auth/logout`, {}, {
      withCredentials: true
    });
  }

  refresh(): Observable<any> {
    return this.http.post<any>(`/api/auth/refresh`, {}, {
      withCredentials: true
    });
  }

  register(data: {email: string, password: string, name: string, surname: string}): Observable<any> {
    return this.http.post<any>(`/api/auth/register`, data);
  }

  verifyEmail(verificationId: string, code: string): Observable<any> {
    return this.http.post<any>(`/api/auth/verify-email`, { verificationId, code });
  }

  getCurrentUser(): User {
    if (!this.isBrowser) return {} as User;
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  getToken(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem('authToken');
  }
}
