import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../mocks/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USERS;

  // Tüm kullanıcıları döndür
  getUsers(): User[] {
    return this.users;
  }

  // ID ile kullanıcı bul
  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Yeni kullanıcı ekle
  addUser(user: User): void {
    this.users.push(user);
  }
}
