import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoUpdate } from '../models/todo.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggingService } from './logging.service';
import { environment } from '../environment/environment';


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

  private readonly API_URL = environment.apiUrl;
  private userid = JSON.parse(localStorage.getItem('currentUser') || '{}').id || '';

  constructor(private http: HttpClient) {
    this.logger.info('TodoService başlatıldı. Sunucudan todos çekiliyor.');
    this.http.get<Todo[]>(`${this.API_URL}/todo/${this.userid}`).subscribe({
      next: (todos) => {
        this.logger.info('Todos başarıyla yüklendi.', todos);
        this.todos = todos;
        this.todosSubject.next(this.todos);
      },
      error: (err) => {
        this.logger.error('Todos yüklenirken hata oluştu.', err);
      }
    });
  }

  // Tüm todoları döndür
  getTodos(): Observable<Todo[]> {
    this.logger.info('Tüm todolar isteniyor.');
    return this.todos$;
  }

  getTodoById(id: string): Observable<Todo> {
    this.logger.info('Belirli bir todo isteniyor.', { id });
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      this.logger.warn('İstenen todo bulunamadı.', { id });
    }
    return of(todo!);
  }

  // Todo ekle
  addTodo(todo: Todo): Observable<Todo> {
    this.logger.info('Yeni todo ekleniyor.', todo);
    return this.http.post<Todo>(`${this.API_URL}/todo/save`, todo).pipe(
      tap({
        next: (response) => {
          this.logger.info('Todo başarıyla eklendi.', response);
          this.todos.push(response);
          this.todosSubject.next(this.todos);
        },
        error: (err) => {
          this.logger.error('Todo eklenirken hata oluştu.', err);
        }
      })
    );
  }

  // Todo sil
  removeTodo(todoId: string, userId: string): Observable<void> {
    this.logger.warn('Todo siliniyor.', { todoId, userId });
    return this.http.delete<void>(`${this.API_URL}/todo/${userId}/delete/${todoId}`).pipe(
      tap({
        next: () => {
          this.logger.info('Todo başarıyla silindi.', { todoId });
          this.todos = this.todos.filter(todo => todo.id !== todoId);
          this.todosSubject.next(this.todos);
        },
        error: (err) => {
          this.logger.error('Todo silinirken hata oluştu.', err);
        }
      })
    );
  }

  // Todo güncelle
  updateTodo(todoId: string, update: TodoUpdate): Observable<Todo | undefined> {
    this.logger.info('Todo güncelleniyor.', { todoId, update });
    return this.http.put<Todo>(`${this.API_URL}/todo/update/${todoId}`, update).pipe(
      tap({
        next: (response) => {
          this.logger.info('Todo başarıyla güncellendi.', response);
          const idx = this.todos.findIndex(todo => todo.id === todoId);
          if (idx > -1) {
            this.todos[idx] = response;
            this.todosSubject.next(this.todos);
          }
        },
        error: (err) => {
          this.logger.error('Todo güncellenirken hata oluştu.', err);
        }
      })
    );
  }

  updateTodoStatus(todoId: string, completed: boolean): Observable<Todo> {
    this.logger.info('Todo durumu güncelleniyor.', { todoId, completed });
    return this.http.put<Todo>(`${this.API_URL}/todo/statusUpdate/${todoId}`, { completed }).pipe(
      tap({
        next: (response) => {
          const index = this.todos.findIndex(t => t.id === todoId);
          if (index !== -1) {
            this.todos[index] = response;
            this.todosSubject.next(this.todos);
            this.logger.info('Todo durumu başarıyla güncellendi.', response);
          }
        },
        error: (err) => {
          this.logger.error('Todo durumu güncellenirken hata oluştu.', err);
        }
      })
    );
  }

  getNextTodoId(): string {
    this.logger.info('Yeni todo ID üretiliyor.', { mevcut: this.nextTodoId });
    this.nextTodoId++;
    this.logger.info('Yeni todo ID üretildi.', { yeni: this.nextTodoId });
    return this.nextTodoId.toString();
  }

  addChildTodo(parentId: string, childTodo: Todo): void {
    this.logger.info('Alt todo ekleniyor.', { parentId, childTodo });
    const parent = this.todos.find(t => t.id === parentId);
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(childTodo);
      this.logger.info('Alt todo başarıyla eklendi.', { parentId, childTodo });
    } else {
      this.logger.warn('Alt todo eklenirken parent bulunamadı.', { parentId });
    }
  }
}
