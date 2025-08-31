import { Component, inject } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserService } from '../../services/user.service';
import { RouterOutlet } from '@angular/router';
import { User } from '../../models/user.model';
import {CommonModule} from "@angular/common";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'todo-layout',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NzIconModule, NzBreadCrumbModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {

  private userService: UserService;
  private authService: AuthService;
  userLabels: string[] | null;
  userCategories: string[] | null;

  constructor() {
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.userLabels = [];
    this.userCategories = [];
    this.initProperties();
  }

  initProperties(): void {
    this.userLabels = this.userService.getUserTodoLabelsById(this.authService.getCurrentUser()?.id || '');
    this.userCategories = this.userService.getUserTodoCategoriesById(this.authService.getCurrentUser()?.id || '');
  }

}
