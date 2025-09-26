import { Component, inject, signal } from '@angular/core';
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
import { TodoCategory } from '../../features/todo/model/category.model';
import { GetTodosByCategoryRequest, GetTodosByOverdueRequest, GetTodosByUpcomingRequest } from '../../features/todo/model/todo.model';

@Component({
  selector: 'todo-layout',
  imports: [CategoryAddModal, RouterOutlet, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {

  userCategories = signal<TodoCategory[]>([]);
  userLabels = signal<{ id: number; name: string }[]>([]);
  userId = signal<number>(0);

  constructor(private router: Router) { }

  private store = inject(Store);

  ngOnInit(): void {

    this.store.select(selectAllCategories).subscribe(categories => {
      this.userCategories.set(categories);
    });

    this.store.select(selectUser).subscribe(user => {
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

  filterByCategory(categoryId: string) {
    this.router.navigate(['/app/todos'], { queryParams: { categoryId } });
  }

  filterByPriority(priority: number) {
    this.router.navigate(['/app/todos'], { queryParams: { priority } });
  }

  filterByOverdue() {
    const request: GetTodosByOverdueRequest = {
      userId: this.userId()
    };
    this.store.dispatch(TaskActions.loadOverdueTasks({ request }));
    this.router.navigate(['/app/todos'], { queryParams: { isOverdue: true } });
  }

  filterByUpcoming() {
    const request: GetTodosByUpcomingRequest = {
      userId: this.userId()
    };
    this.store.dispatch(TaskActions.loadUpcomingTasks({ request }));
    this.router.navigate(['/app/todos'], { queryParams: { isUpcoming: true } });
  }
}
