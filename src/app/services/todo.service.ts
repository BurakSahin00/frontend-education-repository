import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoUpdate } from '../models/todo.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();
  private logger = inject(LoggingService);
  private nextTodoId = this.todos.length + 1;
  public static instanceCount = 0;

  private readonly API_URL = 'https://8041f853-f90f-4166-8c2b-c52a7ddadb29.mock.pstmn.io';

  constructor(private http: HttpClient) {
    // Uygulama başında mock API'den veriyi bir kez çek
    this.http.get<Todo[]>(`${this.API_URL}/todo/1`).subscribe(todos => {
      this.todos = todos;
      this.todosSubject.next(this.todos);
    });
  }

  // Tüm todoları döndür
  getTodos(): Observable<Todo[]> {
    // Sadece local array üzerinden veri döndürülür
    return this.todos$;
  }

  // Todo ekle
  addTodo(todo: Todo): Observable<Todo> {
    this.logger.info('Yeni todo ekleniyor', todo);
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
    return of(todo);
  }

  // Todo sil
  removeTodo(todoId: string, userId: string): Observable<void> {
    this.logger.warn('Todo siliniyor', { todoId, userId });
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    this.todosSubject.next(this.todos);
    return of(void 0);
  }

  // Todo güncelle
  updateTodo(todoId: string, update: TodoUpdate): Observable<Todo | undefined> {
    this.logger.info('Todo güncelleniyor', { todoId, update });
    const idx = this.todos.findIndex(todo => todo.id === todoId);
    if (idx > -1) {
      this.todos[idx] = { ...this.todos[idx], ...update };
      this.todosSubject.next(this.todos);
      return of(this.todos[idx]);
    }
    return of(undefined);
  }

  updateTodoStatus(todoId: string, completed: boolean): Observable<Todo | undefined> {
    this.logger.info('Todo durumu güncelleniyor', { todoId, completed });
    const idx = this.todos.findIndex(todo => todo.id === todoId);
    if (idx > -1) {
      this.todos[idx] = { ...this.todos[idx], completed };
      this.todosSubject.next(this.todos);
      return of(this.todos[idx]);
    }
    return of(undefined);
  }

  getNextTodoId(): string {
    this.nextTodoId++;
    return this.nextTodoId.toString();
  }

  addChildTodo(parentId: string, childTodo: Todo): void {
    const parent = this.todos.find(t => t.id === parentId);
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(childTodo);
    }
  }
}
