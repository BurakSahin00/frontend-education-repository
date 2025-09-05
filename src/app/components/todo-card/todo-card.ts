import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onEdit(): void {
    this.edit.emit(this.todo.id);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }

  onToggleIncomplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }

}
