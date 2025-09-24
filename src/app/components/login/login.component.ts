import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
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
    this.store.dispatch(AuthActions.login({ request: { email: this.email, password: this.password } }));
  }
}
