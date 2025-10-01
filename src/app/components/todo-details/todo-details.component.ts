import { Component, DestroyRef, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';
import { Todo, UpdateTodoRequest } from '../../features/todo/model/todo.model';
import { TodoModal } from '../todo-modal/todo-modal.component';
import { Store } from '@ngrx/store';
import { TaskActions } from '../../management/actions/task.action';
import { CompleteTodoRequest, ReOpenTodoRequest } from '../../features/todo/model/todo.model';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { LoggingService } from '../../services/logging.service';
import { SanitizeHtmlPipe } from '../../security/sanitizer/sanitize-html.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectTaskById } from '../../management/selectors/task.selector';


@Component({
  selector: 'todo-details',
  standalone: true,
  imports: [CommonModule, TodoModal, NzCardModule, NzStepsModule, NzButtonModule, NzTagModule, NzIconModule, NzDescriptionsModule, SanitizeHtmlPipe],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private logger = inject(LoggingService);
  private destroyRef = inject(DestroyRef);

  todo = signal<Todo>({} as Todo);

  ngOnInit(): void {
    // İlk resolver verisini set et ve store'daki aynı id'yi reaktif olarak takip et
    this.route.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
      const resolved: Todo = data['todo'];
      if (resolved) {
        this.todo.set(resolved);
        // Store'dan bu id'yi dinleyerek updateTaskSuccess sonrası otomatik güncelle
        const id = resolved.id;
        this.store.select(selectTaskById(id))
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(latest => {
            if (latest) this.todo.set(latest);
          });
      }
    });

    this.logger.info('TodoDetailsComponent initialized');
  }

  getPriorityColor(priority: 0 | 1 | 2): string {
    switch (priority) {
      case 2:
        return 'red';
      case 1:
        return 'orange';
      case 0:
        return 'green';
      default:
        return 'grey';
    }
  }

  onToggleComplete(): void {
    const currentTodo = this.todo();
    if (currentTodo.isCompleted) {
      const request: ReOpenTodoRequest = { taskItemId: currentTodo.id };
      this.store.dispatch(TaskActions.reopenTask({ taskId: request }));
    } else {
      const request: CompleteTodoRequest = { taskItemId: currentTodo.id };
      this.store.dispatch(TaskActions.completeTask({ taskId: request }));
    }
  }

  onDeleteTodo(): void {
    const currentTodo = this.todo();
    this.store.dispatch(TaskActions.deleteTask({ taskId: currentTodo.id }));
  }

}
