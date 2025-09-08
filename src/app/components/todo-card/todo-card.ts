import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'todo-card',
  standalone: true,
  imports: [NzCardModule, NzButtonModule],
  templateUrl: './todo-card.html',
  styleUrls: ['./todo-card.css']
})
export class TodoCard {

  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() toggleComplete = new EventEmitter<string>();

  private router = inject(Router);

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onEdit(): void {
    this.edit.emit(this.todo.id);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }

  onOpenDetails(): void {
    this.router.navigate(['/app', 'todos', this.todo.id]);
  }

}
