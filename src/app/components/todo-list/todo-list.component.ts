import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../features/todo/model/todo.model';
import { TodoCard } from '../todo-card/todo-card';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoCard],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];

  @Output() deleteTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() toggleComplete = new EventEmitter<number>();

  trackByTodoId = (_: number, todo: Todo) => todo.id;
}
