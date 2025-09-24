import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { filter, switchMap, take, tap } from 'rxjs';
import { TaskActions } from '../management/actions/task.action';
import { selectUser } from '../management/selectors/auth.selector';
import { selectAllTasks } from '../management/selectors/task.selector';

@Injectable({ providedIn: 'root' })
export class TodosResolver implements Resolve<any> {
  private store = inject(Store);
  private actions$ = inject(Actions);

  resolve() {
    return this.store.select(selectUser).pipe(
      // 1) null kullanıcıları atla, kimlikli kullanıcıyı bekle
      filter((u) => !!u && !!u.id),
      take(1),
      // 2) Görevleri yükle
      tap(user => this.store.dispatch(TaskActions.loadTasks({ userId: Number(user?.id) }))),
      // 3) Başarı veya hata aksiyonunu bekle
      switchMap(() =>
        this.actions$.pipe(
          ofType(TaskActions.loadTasksSuccess, TaskActions.loadTasksFailure),
          take(1),
          // 4) Son haldeki görevleri al ve resolve et
          switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
        )
      )
    );
  }
}