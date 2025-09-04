import { inject } from '@angular/core/primitives/di';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userService = inject(UserService)
  private users = this.userService.getUsers();
  private currentUser: any = null;
  private token: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userJson = localStorage.getItem('currentUser');
      if (userJson && userJson !== 'undefined') {
        this.currentUser = JSON.parse(userJson);
      }
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      this.token = 'mock-jwt-token';
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    this.token = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getToken(): string | null {
    return this.token;
  }
}
