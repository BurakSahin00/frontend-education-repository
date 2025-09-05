import { Component, inject, Input } from '@angular/core';
import { FormsModule, Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TodoService } from '../../services/todo.service';
import { TodoCard } from '../todo-card/todo-card';
import { CommonModule } from '@angular/common';
import { Todo, TodoPriority, TodoUpdate } from '../../models/todo.model';

import { NotificationService } from '../../services/notification.service';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [TodoCard, CommonModule, NzListModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  private authService = inject(AuthService);
  private todoService = inject(TodoService);
  private notificationService = inject(NotificationService);
  todos: Todo[] = [];
  isModalVisible = false;
  isEditModalVisible = false;
  todoForm: FormGroup;
  editTodoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.createTodoForm();
    this.editTodoForm = this.createTodoForm();
  }

  ngOnInit(): void {
    this.todoService.getTodos(this.authService.getCurrentUser()?.id || '').subscribe(todos => {
      this.todos = todos;
    });
  }

  createTodoForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]]
    });
  }

  @Input() newTodo: Todo = {
    id: this.todoService.getNextTodoId(),
    title: '',
    description: '',
    completed: false,
    priority: TodoPriority.Low,
    parentId: null,
    dueDate: null,
    createdAt: new Date(),
    assignedUserId: this.authService.getCurrentUser()?.id || ''
  };

  editingTodoId: string = "N";
  openEditTodoModal(todoId: string): void {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      console.log('Editing Todo:', todo);
      this.editTodoForm.patchValue(todo);
      this.editingTodoId = todoId;
      console.log('Editing Todo ID:', this.editingTodoId);
      this.isEditModalVisible = true;
    }
  }

  handleEditCancel(): void {
    this.isEditModalVisible = false;
    this.editTodoForm.reset();
  }

  openAddTodoModal(): void {
    this.isModalVisible = true;
  }

  handleCancel(): void {
    this.isModalVisible = false;
    this.todoForm.reset();
  }

  addTodo(): void {
    if (this.todoForm.valid) {
      const newTodo: Todo = {
        id: this.todoService.getNextTodoId(),
        title: this.todoForm.value.title,
        description: this.todoForm.value.description,
        completed: false,
        priority: TodoPriority.Low,
        parentId: null,
        dueDate: null,
        createdAt: new Date(),
        assignedUserId: this.authService.getCurrentUser()?.id || ''
      };
      this.todoService.addTodo(newTodo).subscribe({
        next: (newTodo) => {
          this.todos.push(newTodo);
          this.notificationService.showSuccess('Todo Eklendi', newTodo.title);
        },
        error: (err) => {
          this.notificationService.showError('Todo Eklenemedi', err?.message || 'Bir hata oluştu');
        }
      });
      this.isModalVisible = false;
      this.todoForm.reset();
    }
  }

  removeTodo(todoId: string): void {
    this.todoService.removeTodo(todoId, this.authService.getCurrentUser()?.id || '').subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        this.notificationService.showSuccess('Todo Silindi', `ID: ${todoId}`);
      },
      error: (err) => {
        this.notificationService.showError('Todo Silinemedi', err?.message || 'Bir hata oluştu');
      }
    });
  }

  updateTodo(): void {
    if (this.editTodoForm.valid && this.editingTodoId) {
      const update: TodoUpdate = this.editTodoForm.value;
      this.todoService.updateTodo(this.editingTodoId, update).subscribe({
        next: (updatedTodo) => {
          const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
            this.notificationService.showSuccess('Todo Güncellendi', updatedTodo.title);
          }
        },
        error: (err) => {
          this.notificationService.showError('Todo Güncellenemedi', err?.message || 'Bir hata oluştu');
        }
      });
      this.isEditModalVisible = false;
      this.editTodoForm.reset();
      this.editingTodoId = "N";
    }
  }
}
