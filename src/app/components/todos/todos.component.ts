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
import { TodoModal } from '../todo-modal/todo-modal.component';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [TodoCard, CommonModule, NzListModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule, NzSelectModule, TodoModal],
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
