import { Component, DestroyRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthActions } from '../../management/actions/auth.action';
import { selectUser } from '../../management/selectors/auth.selector';
import { User } from '../../features/todo/model/user.model';

@Component({
  selector: 'todo-profile',
  standalone: true,
  imports: [CommonModule, NzDescriptionsModule, NzButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  private store = inject(Store);
  private authService = inject(AuthService);
  user$ = this.store.select(selectUser);
  user: User | null = null;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(user => {
      this.user = user;
    });
  }

  logout() {

  }
}
