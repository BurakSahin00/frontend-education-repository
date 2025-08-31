import { Component, inject, Input } from '@angular/core';
import { FormsModule, Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TodoService } from '../../services/todo.service';
import { TodoCard } from '../todo-card/todo-card';
import { CommonModule } from '@angular/common';
import { Todo, TodoPriority } from '../../models/todo.model';

@Component({
  selector: 'todo-main',
  standalone: true,
  imports: [TodoCard, CommonModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  private authService = inject(AuthService);
  private todoService = inject(TodoService);
  todos = this.todoService.getTodosByUser(this.authService.getCurrentUser()?.id || '');
  isModalVisible = false;
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
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
      this.todoService.addTodo(newTodo);
      this.todos = this.todoService.getTodosByUser(this.authService.getCurrentUser()?.id || '');
      this.isModalVisible = false;
    }
  }

}
