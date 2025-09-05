import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoUpdate } from '../models/todo.model';
import { TODOS } from '../mocks/mock-todo';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = TODOS;
  private userService = inject(UserService);
  private logger = inject(LoggingService);
  private nextTodoId = this.todos.length + 1;
  public static instanceCount = 0;

  private readonly API_URL = 'https://8041f853-f90f-4166-8c2b-c52a7ddadb29.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  // Tüm todoları döndür
  getTodos(userId: string): Todo[] {
    if (TodoService.instanceCount === 0) {
      this.http.get<Todo[]>(`${this.API_URL}/todo/${userId}`).subscribe({
        next: todos => {
          this.logger.info('Todolar alındı', todos);
          this.todos = todos;
          TodoService.instanceCount++;
        },
        error: error => {
          this.logger.error('Todolar alınırken hata oluştu', error);
        },
        complete: () => { 
          this.logger.info('getTodos işlemi tamamlandı'); 
        }
      });
      return this.todos.filter(todo => todo.assignedUserId === userId);
    } else {
      this.logger.warn('TodoService zaten oluşturulmuş, mevcut instance kullanılıyor.');
      return this.todos.filter(todo => todo.assignedUserId === userId);
    }
  }

  // Todo ekle
  addTodo(todo: Todo): void {
    this.logger.info('Yeni todo ekleniyor', todo);
    this.http.post<Todo>(`${this.API_URL}/todo/save`, todo).subscribe({
      next: response => {
        this.logger.info('Yeni todo eklendi', response);
        this.todos.push(response);
      },
      error: error => {
        this.logger.error('Yeni todo eklenirken hata oluştu', error);
      }
    });
  }

  // Todo sil
  removeTodo(todoId: string, userId: string): void {
    this.logger.warn('Todo siliniyor', { todoId, userId });
    this.http.delete<void>(`${this.API_URL}/todo/${userId}/delete/${todoId}`).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      },
      error: error => {
        this.logger.error('Todo silinirken hata oluştu', error);
      }
    });
  }

  // Todo güncelle
  updateTodo(todoId: string, update: TodoUpdate): Todo {
    this.logger.info('Todo güncelleniyor', { todoId, update });
    this.http.put<Todo>(`${this.API_URL}/todo/update/${todoId}`, update).subscribe({
      next: response => {
        this.logger.info('Todo güncellendi', response);
        this.todos = this.todos.map(todo => todo.id === todoId ? response : todo);
      },
      error: error => {
        this.logger.error('Todo güncellenirken hata oluştu', error);
      }
    });
    return this.todos.find(todo => todo.id === todoId)!;
  }

  updateTodoStatus(todoId: string, completed: boolean): void {
    this.logger.info('Todo durumu güncelleniyor', { todoId, completed });
    this.http.put<Todo>(`${this.API_URL}/todo/statusUpdate/${todoId}`, { completed }).subscribe({
      next: response => {
        this.logger.info('Todo durumu güncellendi', response);
        this.todos = this.todos.map(todo => todo.id === todoId ? response : todo);
      },
      error: error => {
        this.logger.error('Todo durumu güncellenirken hata oluştu', error);
      }
    });
  }

  getNextTodoId(): string {
    this.nextTodoId++;
    return this.nextTodoId.toString();
  }
}
