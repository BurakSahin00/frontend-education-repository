import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoPriority } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@Component({
  selector: 'todo-details',
  imports: [CommonModule, NzCardModule, NzStepsModule, NzButtonModule, NzTagModule, NzIconModule, NzDescriptionsModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);
  private authService = inject(AuthService);
  index = 0;

  displayedSubTodo: Todo = {
    id: '',
    title: '',
    description: '',
    completed: false,
    parentId: null,
    priority: TodoPriority.Low,
    dueDate: new Date(),
    createdAt: new Date(),
    assignedUserId: ''
  };

  todo: Todo = {
    id: '',
    title: '',
    description: '',
    completed: false,
    parentId: null,
    priority: TodoPriority.Low,
    dueDate: new Date(),
    createdAt: new Date(),
    assignedUserId: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      const todo: Todo = data['todo'];
      if (todo) {
        this.todo = todo;
        if (this.todo.children && this.todo.children.length > 0) {
          this.displayedSubTodo = this.todo.children[this.index];
        }
      }
    });
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "grey";
    }
  }

  onSubtaskCardIndexChange(event: number): void {
    this.index = event;
    if (this.todo.children) {
      this.displayedSubTodo = this.todo.children[this.index];
    }
  }

  onToggleComplete(): void {
    if (!this.displayedSubTodo.id) return;
    this.displayedSubTodo.completed = !this.displayedSubTodo.completed;
    this.todoService.updateTodoStatus(this.displayedSubTodo.id, this.displayedSubTodo.completed);
  }

  onDeleteTodo(): void {
    if (!this.displayedSubTodo.id) return;
    const userId = this.authService.getCurrentUser()?.id || '';
    this.todoService.removeTodo(this.displayedSubTodo.id, userId);
  }

  onEditTodo(): void {

  }

  onAddSubtask(): void {
    const newSubtask: Todo = {
      id: this.todoService.getNextTodoId(),
      title: '',
      description: '',
      completed: false,
      parentId: this.todo.id,
      priority: TodoPriority.Low,
      dueDate: new Date(),
      createdAt: new Date(),
      assignedUserId: ''
    };
    this.todoService.addChildTodo(this.todo.id, newSubtask);
    if (this.todo.children) {
      this.displayedSubTodo = newSubtask;
      this.index = this.todo.children.length - 1;
    }
  }
}
