import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-details',
  imports: [],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  
  @Input() todo!: Todo;
  

}
