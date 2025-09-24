import { Component, OnInit, inject } from '@angular/core';
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


@Component({
  selector: 'todo-details',
  standalone: true,
  imports: [CommonModule, TodoModal, NzCardModule, NzStepsModule, NzButtonModule, NzTagModule, NzIconModule, NzDescriptionsModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private store = inject(Store);

  todo = signal<Todo>({} as Todo);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      const todo: Todo = data['todo'];
      if (todo) {
        this.todo.set(todo);
      }
    });
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case "2":
        return "red";
      case "1":
        return "orange";
      case "0":
        return "green";
      default:
        return "grey";
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
