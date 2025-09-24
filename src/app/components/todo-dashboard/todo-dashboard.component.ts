import { Component, computed, signal, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Todo } from '../../features/todo/model/todo.model';

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

  ngOnInit() {
    // İlk yüklemede resolverdan gelen veriyi set et
    this.route.data.subscribe(data => {
      const incoming = data['todos'];
      let arr: Todo[] = [];
      if (Array.isArray(incoming)) {
        arr = incoming as Todo[];
      } else if (incoming && typeof incoming === 'object' && Array.isArray(incoming.value)) {
        // Resolver bir envelope (Response) döndürdüyse value'yu al
        arr = incoming.value as Todo[];
      }
      this.todos.set(arr);
      console.log('Resolved todos for dashboard:', this.todos());
    });
  }

  completedPercentage = computed(() => {
    const list = Array.isArray(this.todos()) ? this.todos() : [];
    if (!list || list.length === 0) return 0;
    const done = list.filter(t => !!t.isCompleted).length;
    return Math.round((done / list.length) * 100);
  });

  completedTodoNumber = computed(() => {
    const list = Array.isArray(this.todos()) ? this.todos() : [];
    if (!list || list.length === 0) return 0;
    const done = list.filter(t => !!t.isCompleted).length;
    return done;
  });

  unCompletedTodoNumber = computed(() => {
    const list = Array.isArray(this.todos()) ? this.todos() : [];
    if (!list || list.length === 0) return 0;
    const undone = list.filter(t => !t.isCompleted).length;
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
