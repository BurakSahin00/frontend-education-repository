
import { Component, DestroyRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { Todo } from '../../features/todo/model/todo.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../management/selectors/task.selector';

@Component({
  selector: 'todo-calendar',
  imports: [NzCalendarModule, NzBadgeModule, NzAlertModule, DatePipe, FormsModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  selectedDate: Date = new Date();
  todos: Todo[] = [];
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);

  constructor() {
   
  }

  ngOnInit() {
    // Resolver, route değişiminde görevleri NgRx effect'leri ile yüklüyor.
    // Burada sadece store'dan listeyi izleyip ekrana yansıtıyoruz.
    this.store
      .select(selectAllTasks)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((todos) => {
        this.todos = todos ?? [];
      });
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
  }

  getTodosForDate(date: Date): Todo[] {
    return this.todos.filter((todo) => {
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
