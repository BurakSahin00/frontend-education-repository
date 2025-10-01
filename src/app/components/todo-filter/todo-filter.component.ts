import { Component, DestroyRef, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../features/todo/model/category.model';
import { Store } from '@ngrx/store';
import { selectAllCategories } from '../../management/selectors/category.selector';
import { selectUserId } from '../../management/selectors/auth.selector';
import { TodoFilterRequest } from '../../features/todo/model/todo.model';
import { TaskActions } from '../../management/actions/task.action';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'todo-filter',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, FormsModule, NzSelectModule, NzRadioModule, ReactiveFormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFilter {

  filterForm: FormGroup;
  categories = signal<Category[]>([]);
  userId = signal<number>(0);
  isVisible = signal<boolean>(false);
  private destroyRef = inject(DestroyRef);

  constructor(private fb: FormBuilder, private store: Store) {
    this.filterForm = this.fb.group({
      completion: [null],
      priority: [null],
      category: [null],
      startDate: [null],
      endDate: [null]
    });
  }

  ngOnInit(): void {

    this.store.select(selectAllCategories).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(categories => {
      this.categories.set(categories);
    });

    this.store.select(selectUserId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(userId => {
      this.userId.set(Number(userId));
    });

  }

  handleOk(): void {
    const v = this.filterForm.value as any;
    const toDate = (val: unknown): Date | undefined => {
      if (!val) return undefined;
      if (val instanceof Date) return val;
      if (typeof val === 'string') {
        if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
          const [y, m, d] = val.split('-').map(Number);
          return new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
        }
        const parsed = new Date(val);
        return isNaN(parsed.getTime()) ? undefined : parsed;
      }
      return undefined;
    };

    const toPriority = (val: unknown): 0 | 1 | 2 | undefined => {
      if (val == null) return undefined;
      const n = Number(val);
      if (n === 0 || n === 1 || n === 2) return n as 0 | 1 | 2;
      return undefined;
    };

    const request: TodoFilterRequest = {
      UserId: this.userId(),
      isCompleted: v.completion == null ? undefined : v.completion,
      Priority: toPriority(v.priority),
      CategoryId: v.category == null ? undefined : Number(v.category),
      StartDate: toDate(v.startDate),
      EndDate: toDate(v.endDate)
    };

    this.store.dispatch(TaskActions.filterTasks({ params: request }));
    this.filterForm.reset();
    this.isVisible.set(false);
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

}
