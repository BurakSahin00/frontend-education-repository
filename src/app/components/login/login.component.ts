import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoggingService } from '../../services/logging.service';

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
  private readonly logger = inject(LoggingService);

  login() {
    console.log(this.userService.getUsers());
    this.logger.info('Login butonuna tıklandı', { email: this.email });
    if (this.authService.login(this.email, this.password)) {
      this.logger.info('Login başarılı', { email: this.email });
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.logger.warn('Login başarısız', { email: this.email });
      this.errorMessage = 'Email veya şifre hatalı';
    }
  }
}
