import { Component, DestroyRef, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CategoryAddModal } from '../category-add-modal/category-add-modal';
import { UserService } from '../../services/user.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { selectUser } from '../../management/selectors/auth.selector';
import { CommonModule } from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TaskActions } from '../../management/actions/task.action';
import { selectAllCategories, selectCategoryState } from '../../management/selectors/category.selector';
import { CategoryActions } from '../../management/actions/category.actions';
import { TodoCategory } from '../../features/todo/model/category.model';
import { GetTodosByCategoryRequest, GetTodosByOverdueRequest, GetTodosByUpcomingRequest } from '../../features/todo/model/todo.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'todo-layout',
  imports: [CategoryAddModal, RouterOutlet, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {

  userCategories = signal<TodoCategory[]>([]);
  userLabels = signal<{ id: number; name: string }[]>([]);
  userId = signal<number>(0);

  constructor(private router: Router) { }

  private store = inject(Store);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Tüm kategorileri veritabanından yükle
    this.store.dispatch(CategoryActions.loadAllCategories());

    this.store.select(selectAllCategories).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(categories => {
      // filter out any null/undefined placeholders to avoid rendering blanks
      this.userCategories.set((categories || []).filter(Boolean));
    });

    this.store.select(selectUser).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(user => {
      if (user) {
        this.userId.set(Number(user.id));
      }
    });

    this.userLabels.set([
      { id: 0, name: 'Low' },
      { id: 1, name: 'Medium' },
      { id: 2, name: 'High' }
    ]);

  }

  trackByCategoryId = (_: number, item: { id: number }) => item?.id;

  filterByCategory(categoryId: number) {
    this.router.navigate(['/app/todos'], { queryParams: { categoryId } });
  }

  filterByPriority(priority: number) {
    this.router.navigate(['/app/todos'], { queryParams: { priority } });
  }

  filterByOverdue() {
    this.router.navigate(['/app/todos'], { queryParams: { isOverdue: true } });
  }

  filterByUpcoming() {
    this.router.navigate(['/app/todos'], { queryParams: { isUpcoming: true } });
  }
}
