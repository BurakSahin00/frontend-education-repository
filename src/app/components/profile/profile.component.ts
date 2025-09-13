import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthActions } from '../../management/actions/auth.action';

@Component({
  selector: 'todo-profile',
  standalone: true,
  imports: [CommonModule, NzDescriptionsModule, NzButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private store = inject(Store);
  private authService = inject(AuthService);
  user = JSON.parse(localStorage.getItem('currentUser') || '{}');

  constructor() {
    console.log(this.user);
  }

  logout() {
    this.store.dispatch(AuthActions.logoutRequested());
  }
}
