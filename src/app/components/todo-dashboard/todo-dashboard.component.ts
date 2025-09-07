import { Component, computed, signal, OnDestroy, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../services/auth.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import type { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-dashboard',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzProgressModule, ScrollingModule, NzListModule, NzSkeletonModule],
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  todos = signal<Todo[]>([]);
  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.todos.set(data['todos'] || []);
      console.log('Resolved todos for dashboard:', this.todos());
    });
  }

  completedPercentage = computed(() => {
    const list = this.todos();
    if (!list || list.length === 0) return 0;
    const done = list.filter(t => !!t.completed).length;
    return Math.round((done / list.length) * 100);
  });

  completedTodoNumber = computed(() => {
    const list = this.todos();
    if (!list || list.length === 0) return 0;
    const done = list.filter(t => !!t.completed).length;
    return done;
  });

  unCompletedTodoNumber = computed(() => {
    const list = this.todos();
    if (!list || list.length === 0) return 0;
    const undone = list.filter(t => !t.completed).length;
    return undone;
  });

  unCompletedPercentage = computed(() => {
    const total = Array.isArray(this.todos()) ? this.todos().length : 0;
    if (total === 0) return 0;
    const undone = this.unCompletedTodoNumber();
    return Math.round((undone / total) * 100);
  });

  formatCompletedCount = (percent: number) => `${this.completedTodoNumber()}`;
  formatUncompletedCount = (percent: number) => `${this.unCompletedTodoNumber()}`;

}
