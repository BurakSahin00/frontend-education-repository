
import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-calendar',
  imports: [NzCalendarModule, NzBadgeModule, NzAlertModule, DatePipe, FormsModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date = new Date();
  todos: Todo[] = [];
  private todoService = inject(TodoService);
  private userService = inject(UserService);

  constructor() {
   
  }

  ngOnInit() {
    // Test için otomatik login (kullanıcı yoksa ilk kullanıcıyı login yap)
    let user = this.userService.getLoggedUser();
    if (!user) {
      const users = this.userService.getUsers();
      if (users.length > 0) {
        this.userService.setLoggedUser(users[0]);
        user = users[0];
      }
    }
    if (user) {
     this.todoService.getTodos().subscribe(todos => {
        this.todos = todos;
      });
    }
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
  }

  getTodosForDate(date: Date): Todo[] {
    const allTodos: Todo[] = [];
    for (const todo of this.todos) {
      if (todo.dueDate) {
        const todoDate = new Date(todo.dueDate);
        if (
          todoDate.getFullYear() === date.getFullYear() &&
          todoDate.getMonth() === date.getMonth() &&
          todoDate.getDate() === date.getDate()
        ) {
          allTodos.push(todo);
        }
      }
      if (todo.children && todo.children.length > 0) {
        for (const child of todo.children) {
          if (child.dueDate) {
            const childDate = new Date(child.dueDate);
            if (
              childDate.getFullYear() === date.getFullYear() &&
              childDate.getMonth() === date.getMonth() &&
              childDate.getDate() === date.getDate()
            ) {
              allTodos.push(child);
            }
          }
        }
      }
    }
      return this.todos.filter(todo => {
        if (!todo.dueDate) return false;
        const todoDate = new Date(todo.dueDate);
        return (
          todoDate.getFullYear() === date.getFullYear() &&
          todoDate.getMonth() === date.getMonth() &&
          todoDate.getDate() === date.getDate()
        );
      });
    }
}
