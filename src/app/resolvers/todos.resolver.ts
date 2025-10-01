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
    const qp = route.queryParamMap;
    const categoryId = qp.get('categoryId');
    const isOverdue = qp.get('isOverdue') === 'true';
    const isUpcoming = qp.get('isUpcoming') === 'true';
    const days = qp.has('days') ? Number(qp.get('days')) : undefined;
  const priorityParam = qp.get('priority');
  const priority = priorityParam != null ? Number(priorityParam) : undefined;

    // 1) Overdue
    if (isOverdue) {
      return this.store.select(selectUser).pipe(
        filter((u) => !!u && !!u.id),
        take(1),
        tap(user => this.store.dispatch(TaskActions.loadOverdueTasks({ request: { userId: Number(user!.id) } }))),
        switchMap(() =>
          this.actions$.pipe(
            ofType(TaskActions.loadOverdueTasksSuccess, TaskActions.loadOverdueTasksFailure),
            take(1),
            switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
          )
        )
      );
    }

    // 2) Upcoming
    if (isUpcoming) {
      return this.store.select(selectUser).pipe(
        filter((u) => !!u && !!u.id),
        take(1),
        tap(user => this.store.dispatch(TaskActions.loadUpcomingTasks({ request: { userId: Number(user!.id), days } }))),
        switchMap(() =>
          this.actions$.pipe(
            ofType(TaskActions.loadUpcomingTasksSuccess, TaskActions.loadUpcomingTasksFailure),
            take(1),
            switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
          )
        )
      );
    }

    // 2.5) Priority
    if (priority === 0 || priority === 1 || priority === 2) {
      return this.store.select(selectUser).pipe(
        filter((u) => !!u && !!u.id),
        take(1),
        tap(user => this.store.dispatch(TaskActions.filterTasks({ params: { UserId: Number(user!.id), Priority: priority } }))),
        switchMap(() =>
          this.actions$.pipe(
            ofType(TaskActions.filterTasksSuccess, TaskActions.filterTasksFailure),
            take(1),
            switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
          )
        )
      );
    }

    // 3) Kategoriye göre
    if (categoryId) {
      this.store.dispatch(TaskActions.filterTasksByCategory({ request: { categoryId: Number(categoryId) } }));
      return this.actions$.pipe(
        ofType(TaskActions.filterTasksByCategorySuccess, TaskActions.filterTasksByCategoryFailure),
        take(1),
        switchMap(() => this.store.select(selectAllTasks).pipe(take(1)))
      );
    }

    // 4) Varsayılan: tüm görevler
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