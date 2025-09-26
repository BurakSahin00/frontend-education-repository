import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
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

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    const categoryId = route.queryParamMap.get('categoryId');

    // Eğer categoryId varsa kategoriye göre filtreleyip onu resolve et
    if (categoryId) {
      this.store.dispatch(TaskActions.filterTasksByCategory({ request: { categoryId } }));
      return this.actions$.pipe(
        ofType(TaskActions.filterTasksByCategorySuccess, TaskActions.filterTasksByCategoryFailure),
        take(1),
        switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
      );
    }

    // Aksi halde kullanıcının tüm görevlerini yükle
    return this.store.select(selectUser).pipe(
      filter((u) => !!u && !!u.id),
      take(1),
      tap(user => this.store.dispatch(TaskActions.loadTasks({ userId: Number(user?.id) }))),
      switchMap(() =>
        this.actions$.pipe(
          ofType(TaskActions.loadTasksSuccess, TaskActions.loadTasksFailure),
          take(1),
          switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
        )
      )
    );
  }
}