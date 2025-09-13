import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoggingService } from '../../services/logging.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../../management/selectors/auth.selector';
import { AuthActions } from '../../management/actions/auth.action';

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

  private store = inject(Store);

  constructor() {}

  login() {
    this.store.dispatch(AuthActions.loginRequested({ email: this.email, password: this.password }));
  }
}
