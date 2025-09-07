import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<any> {
  constructor(private todoService: TodoService) {}

  resolve(): Observable<any> {
    return this.todoService.getTodos();
  }
}