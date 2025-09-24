import { Component, inject, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { FormsModule, Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TodoService } from '../../services/todo.service';
import { TodoCard } from '../todo-card/todo-card';
import { CommonModule } from '@angular/common';
import { TodoPriority, TodoUpdate } from '../../models/todo.model';
import { CompleteTodoRequest, ReOpenTodoRequest, Todo } from '../../features/todo/model/todo.model';
import { Store } from '@ngrx/store';
import { LoggingService } from '../../services/logging.service';
import { NotificationService } from '../../services/notification.service';
import { NzListModule } from 'ng-zorro-antd/list';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { TodoModal } from '../todo-modal/todo-modal.component';
import { selectAllTasks } from '../../management/selectors/task.selector';
import { selectUser } from '../../management/selectors/auth.selector';
import { User } from '../../features/todo/model/user.model';
import { TaskActions } from '../../management/actions/task.action';
import { TodoFilter } from '../todo-filter/todo-filter.component';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [TodoCard, CommonModule, NzListModule, NzButtonModule, NzModalModule, FormsModule, NzInputModule, ReactiveFormsModule, NzSelectModule, TodoModal, TodoFilter],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todoList = signal<Todo[]>([]);
  userLabels = signal<string[]>([]);
  userCategories = signal<string[]>([]);
  user = signal<User | null>(null);

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private logger: LoggingService, private notification: NotificationService, private store: Store) {}

  ngOnInit(): void {
    // Query parametrelerine göre filtreleme

    this.store.select(selectUser).subscribe(currentUser => {
      this.user.set(currentUser);
    });

    // Store'daki görevler değiştikçe sinyali güncelle
    this.store.select(selectAllTasks).subscribe(tasks => {
      this.todoList.set(tasks || []);
    });

    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const isCompleted = params['isCompleted'];
      const priority = params['priority'];
      const startDate = params['startDate'] ? new Date(params['startDate']) : null;
      const endDate = params['endDate'] ? new Date(params['endDate']) : null;
      const categoryId = params['categoryId'] ? parseInt(params['categoryId'], 10) : null;
    });
    // İlk yüklemede resolver'dan gelen veriyi set et (query param yoksa)
    this.route.data.subscribe(data => {
    this.todoList.set(data['todos'] || []);
    });
  }

  //Silme işlemi
  removeTodo(todoId: string): void {
    this.store.dispatch(TaskActions.deleteTask({ taskId: todoId }));
  }

  //Tamamlanma durumunu güncelleme
  toggleTodoCompletion(todoId: string): void {
    const todo = this.todoList().find(t => t.id === todoId);
    

    if (todo && todo.isCompleted) {
      const request: ReOpenTodoRequest = { taskItemId: todoId };
      this.todoList.update(todos => todos.map(t => t.id === todoId ? { ...t, isCompleted: false } : t));
      this.store.dispatch(TaskActions.reopenTask({ taskId: request }));
    } else {
      const request: CompleteTodoRequest = { taskItemId: todoId };
      this.todoList.update(todos => todos.map(t => t.id === todoId ? { ...t, isCompleted: true, completedAt: new Date() } : t));
      this.store.dispatch(TaskActions.completeTask({ taskId: request }));
    }
  }

  trackByTodoId = (_: number, todo: Todo): string => todo.id;

}
