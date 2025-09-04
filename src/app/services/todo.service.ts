import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoUpdate } from '../models/todo.model';
import { TODOS } from '../mocks/mock-todo';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = TODOS;
  private userService = inject(UserService);
  private logger = inject(LoggingService);
  private nextTodoId = this.todos.length + 1;

  private readonly API_URL = 'https://8041f853-f90f-4166-8c2b-c52a7ddadb29.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  // Tüm todoları döndür
  getTodos(userId: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/todo/${userId}`);
  }

  // Todo ekle
  addTodo(todo: Todo): Observable<Todo> {
  this.logger.info('Yeni todo ekleniyor', todo);
  return this.http.post<Todo>(`${this.API_URL}/todo/save`, todo);
  }

  // Todo sil
  removeTodo(todoId: string, userId: string): Observable<void> {
  this.logger.warn('Todo siliniyor', { todoId, userId });
  return this.http.delete<void>(`${this.API_URL}/todo/${userId}/delete/${todoId}`);
  }

  // Todo güncelle
  updateTodo(todoId: string, update: TodoUpdate): Observable<Todo> {
  this.logger.info('Todo güncelleniyor', { todoId, update });
  return this.http.put<Todo>(`${this.API_URL}/todo/update/${todoId}`, update);
  }

  getNextTodoId(): string {
    this.nextTodoId++;
    return this.nextTodoId.toString();
  }
}
