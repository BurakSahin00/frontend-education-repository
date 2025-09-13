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

@Component({
  selector: 'todo-layout',
  imports: [RouterOutlet, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {


  userLabels: string[];
  userCategories: string[];


  constructor( private authService: AuthService, private router: Router) {
    this.userLabels = [];
    this.userCategories = [];
  }
  
  private store = inject(Store);

  user$ = this.store.select(selectUser).subscribe(user => {
    if (user) {
      this.userLabels = user.todoLabels;
      this.userCategories = user.todoCategories;

    } else {
      console.log('No user found in Layout component');
    }
  });


  filterByCategory(category: string) {
    this.router.navigate(['/app/todos'], { queryParams: { category } });
  }

  filterByLabel(label: string) {
    this.router.navigate(['/app/todos'], { queryParams: { label } });
  }

}
