import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  errorMessage = '';

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  login() {
    const user = this.userService.getUsers().find(
      u => u.email === this.email && u.password === this.password
    );
    if (user) {
      this.errorMessage = '';
      this.router.navigate(['/todos']);
    } else {
      this.errorMessage = 'Email veya şifre hatalı';
    }
  }
}
