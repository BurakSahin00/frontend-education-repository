import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'todo-card',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './todo-card.html',
  styleUrls: ['./todo-card.css']
})
export class TodoCard {

  @Input() todo!: Todo;

}
