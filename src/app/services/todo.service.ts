import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TODOS } from '../mocks/mock-todo';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = TODOS;
  private userService = inject(UserService);

  // Tüm todoları döndür
  getTodos(): Todo[] {
    return this.todos;
  }

  // ID ile todo bul
  getTodoById(id: string): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  // Parent todo'ya kullanıcı atama
  assignUserToParentTodo(todoId: string, userId: string): void {
    const todo = this.getTodoById(todoId);
    const user = this.userService.getUserById(userId);
    if (todo && user && !todo.parentId) {
      todo.assignedUserId = user.id;
    }
  }

  // Todo ekle
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  // Todo sil
  removeTodo(todoId: string): void {
    this.todos = this.todos.filter(t => t.id !== todoId);
  }

  // Todo güncelle
  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (index > -1) {
      this.todos[index] = updatedTodo;
    }
  }
}
