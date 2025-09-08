import { inject } from '@angular/core/primitives/di';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_KEY = "https://8041f853-f90f-4166-8c2b-c52a7ddadb29.mock.pstmn.io";
  private isBrowser: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  login(email: string, password: string): Observable<void> {
    console.log('AuthService login called with', { email, password });
    return this.http.post<any>(`${this.API_KEY}/auth/login`, { email, password });
  }

  logout(): void {
    if (!this.isBrowser) return;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser) return false;
    return !!localStorage.getItem('currentUser');
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
