import { Component, inject, Input, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [TodoCard, CommonModule, NzListModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  private authService = inject(AuthService);
  private todoService = inject(TodoService);
  todos: Todo[] = [];
  isModalVisible = false;
  isEditModalVisible = false;
  todoForm: FormGroup;
  editTodoForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.todoForm = this.createTodoForm();
    this.editTodoForm = this.createTodoForm();
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.todos = data['todos'] || [];
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
    dueDate: new Date(),
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
        dueDate: new Date(),
        createdAt: new Date(),
        assignedUserId: this.authService.getCurrentUser()?.id || ''
      };
      this.todoService.addTodo(newTodo);
      this.isModalVisible = false;
      this.todoForm.reset();
    }
  }

  removeTodo(todoId: string): void {
    this.todoService.removeTodo(todoId, this.authService.getCurrentUser()?.id || '');
  }

  updateTodo(): void {
    if (this.editTodoForm.valid && this.editingTodoId) {
      const update: TodoUpdate = this.editTodoForm.value;
      this.todoService.updateTodo(this.editingTodoId, update);
      this.isEditModalVisible = false;
      this.editTodoForm.reset();
      this.editingTodoId = "N";
    }
  }

  toggleTodoCompletion(todoId: string): void {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      this.todoService.updateTodoStatus(todoId, !todo.completed);
    }
  }
}
