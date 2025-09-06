import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'todo-details',
  imports: [CommonModule, NzCardModule, NzStepsModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);
  private authService = inject(AuthService);
  todo: Todo = {
    id: '',
    title: '',
    description: '',
    completed: false,
    parentId: null,
    dueDate: new Date(),
    createdAt: new Date(),
    assignedUserId: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;
      const userId = this.authService.getCurrentUser()?.id || '';
      const todos = this.todoService.getTodos(userId);
      const found = todos.find(t => t.id === id);
      if (found) {
        this.todo = found;
      }
    });

  }

}
