import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoDetailResolver implements Resolve<Todo> {
  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Todo> {
    const id = route.paramMap.get('id');
    return this.todoService.getTodoById(id!);
  }
}