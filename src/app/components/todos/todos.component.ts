import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TodoService } from '../../services/todo.service';
import { TodoCard } from '../todo-card/todo-card';
import { CommonModule } from '@angular/common';
import { Todo, TodoPriority, TodoUpdate } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { LoggingService } from '../../services/logging.service';
import { NotificationService } from '../../services/notification.service';
import { NzListModule } from 'ng-zorro-antd/list';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [TodoCard, CommonModule, NzListModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule, NzSelectModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  private todoService = inject(TodoService);
  private store = inject(Store);
  todos: Todo[] = [];
  userLabels: string[] = [];
  userCategories: string[] = [];
  private todosSub?: Subscription;
  isModalVisible = false;
  isEditModalVisible = false;
  todoForm: FormGroup;
  editTodoForm: FormGroup;
  userid = JSON.parse(localStorage.getItem('currentUser') || '{}').id || '';
  

  constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private logger: LoggingService,
  private notification: NotificationService
) {
  const currentUser = this.authService.getCurrentUser();
  this.userLabels = currentUser?.todoLabels || [];
  this.userCategories = currentUser?.todoCategories || [];
  console.log('User Labels:', this.userLabels);
  console.log('User Categories:', this.userCategories);
  this.todoForm = this.createTodoForm();
  this.editTodoForm = this.createTodoForm();
}

  ngOnInit(): void {
    // Query parametrelerine göre filtreleme
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const label = params['label'];
      this.todosSub = this.todoService.getTodos().subscribe(todos => {
        let filtered = todos;
        if (category) {
          const catLower = category.toLowerCase();
          filtered = filtered.filter(todo => todo.tags?.some(tag => tag.toLowerCase() === catLower));
        }
        if (label) {
          const labelLower = label.toLowerCase();
          filtered = filtered.filter(todo => todo.priority?.toString().toLowerCase() === labelLower);
        }
        this.todos = filtered;
      });
    });
    // İlk yüklemede resolver'dan gelen veriyi set et (query param yoksa)
    this.route.data.subscribe(data => {
      if (!this.route.snapshot.queryParams['category'] && !this.route.snapshot.queryParams['label']) {
        this.todos = data['todos'] || [];
      }
    });
  }

  ngOnDestroy(): void {
    this.todosSub?.unsubscribe();
  }

  createTodoForm(): FormGroup {
  return this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    priority: [null, [Validators.required]],
    category: [null, [Validators.required]],
    dueDate: [null, [Validators.required]]
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
    const patch = {
      ...todo,
      dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().substring(0, 10) : null,
      tags: todo.tags || null
    };
    this.editTodoForm.patchValue(patch);
    this.editingTodoId = todoId;
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
    const formValue = this.todoForm.value;
    const newTodo: Todo = {
      id: this.todoService.getNextTodoId(),
      title: formValue.title,
      description: formValue.description,
      completed: false,
      priority: formValue.priority,
      tags: formValue.tags,
      parentId: null,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate) : null,
      createdAt: new Date(),
      assignedUserId: this.authService.getCurrentUser()?.id || ''
    };
    this.todoService.addTodo(newTodo);
    this.isModalVisible = false;
    this.todoForm.reset();
  }
}

  removeTodo(todoId: string): void {
   if (this.userid) {
        this.todoService.removeTodo(todoId, this.userid).subscribe({
          next: () => {
            this.logger.warn('Todo başarıyla silindi.', { todoId, userId: this.userid });
            this.notification.showSuccess('Başarılı', 'Todo başarıyla silindi.');
          },
          error: (err) => {
            this.logger.error('Todo silinirken hata oluştu:', err);
            this.notification.showError('Hata', 'Todo silinirken bir hata oluştu.');
          }
        });
      } else {
        console.error('Kullanıcı ID alınamadı. Todo silinemedi.');
      }
  }

  updateTodo(): void {
  if (this.editTodoForm.valid && this.editingTodoId) {
    const formValue = this.editTodoForm.value;
    const update: TodoUpdate = {
      title: formValue.title,
      description: formValue.description,
      priority: formValue.priority,
      tags: formValue.tags,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate) : null
    };
    this.todoService.updateTodo(this.editingTodoId, update).subscribe({
      next: (updatedTodo) => {
        this.logger.info('Todo başarıyla güncellendi.', updatedTodo);
      },
      error: (err) => {
        this.logger.error('Todo güncellenirken hata oluştu:', err);
      }
    });
    this.isEditModalVisible = false;
    this.editTodoForm.reset();
    this.editingTodoId = "N";
  }
}

  toggleTodoCompletion(todoId: string): void {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      this.todoService.updateTodoStatus(todoId, !todo.completed).subscribe({
        next: (updatedTodo) => {
          this.logger.info('Todo durumu başarıyla güncellendi.', updatedTodo);
        },
        error: (err) => {
          this.logger.error('Todo durumu güncellenirken hata oluştu:', err);
        }
      });
    }
  }
}
