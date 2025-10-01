import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Todo } from '../features/todo/model/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../management/selectors/task.selector';

@Injectable({ providedIn: 'root' })
export class TodoDetailResolver implements Resolve<Todo> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Todo> {
    const id = Number(route.paramMap.get('id'));
    return this.store.select(selectAllTasks).pipe(
      map(tasks => tasks.find(t => t.id === id) as Todo)
    );
  }
}