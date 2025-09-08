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
import {CommonModule} from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-layout',
  imports: [RouterOutlet, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {

  private userService: UserService;
  private authService: AuthService;
  private router = inject(Router);
  userLabels: string[] | null;
  userCategories: string[] | null;

  constructor() {
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.userLabels = this.authService.getCurrentUser()?.todoLabels || [];
    this.userCategories = this.authService.getCurrentUser()?.todoCategories || [];
    console.log('User Labels in Layout:', this.userLabels);
    console.log('User Categories in Layout:', this.userCategories);
  }

  filterByCategory(category: string) {
    this.router.navigate(['/app/todos'], { queryParams: { category } });
  }

  filterByLabel(label: string) {
    this.router.navigate(['/app/todos'], { queryParams: { label } });
  }

}
