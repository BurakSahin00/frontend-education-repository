import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/todos']);
    } else {
      this.errorMessage = 'Email veya şifre hatalı';
    }
    if (this.authService.getCurrentUser()) {
      this.errorMessage = '';
      this.router.navigate(['/todos']);
    } else {
      this.errorMessage = 'Email veya şifre hatalı';
    }
  }
}
