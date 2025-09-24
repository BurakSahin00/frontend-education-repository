import { Component, inject } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserService } from '../../services/user.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { selectUser } from '../../management/selectors/auth.selector';
import { CommonModule } from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { selectAllCategories, selectCategoryState } from '../../management/selectors/category.selector';
import { TodoCategory } from '../../features/todo/model/category.model';

@Component({
  selector: 'todo-layout',
  imports: [RouterOutlet, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {


  userLabels = [
    {
      id: 0,
      name: 'Low'
    },
    {
      id: 1,
      name: 'Medium'
    },
    {
      id: 2,
      name: 'High'
    }
  ];
  userCategories: TodoCategory[];


  constructor( private authService: AuthService, private router: Router) {
    this.userLabels = [];
    this.userCategories = [];
  }
  
  private store = inject(Store);

  user$ = this.store.select(selectAllCategories).subscribe(user => {
    if (user) {
      this.userCategories = user;
    }
  });


  filterByCategory(categoryId: string) {
    this.router.navigate(['/app/todos'], { queryParams: { categoryId } });
  }

  filterByPriority(priority: number) {
    this.router.navigate(['/app/todos'], { queryParams: { priority } });
  }


}
