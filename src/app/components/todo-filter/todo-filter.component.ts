import { Component, signal } from '@angular/core';
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

@Component({
  selector: 'todo-filter',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, FormsModule, NzSelectModule, NzRadioModule, ReactiveFormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilter {

  filterForm: FormGroup;
  categories = signal<Category[]>([]);
  userId = signal<number>(0);
  isVisible = signal<boolean>(false);

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

    this.store.select(selectAllCategories).subscribe(categories => {
      this.categories.set(categories);
    });

    this.store.select(selectUserId).subscribe(userId => {
      this.userId.set(Number(userId));
    });

  }

  handleOk(): void {
    const request: TodoFilterRequest = {
      UserId: this.userId(),
      isCompleted: this.filterForm.value.completion,
      Priority: this.filterForm.value.priority,
      CategoryId: this.filterForm.value.category,
      StartDate: this.filterForm.value.startDate,
      EndDate: this.filterForm.value.endDate
    };

    this.store.dispatch(TaskActions.filterTasks({ params: request }));
    this.filterForm.reset();
    this.isVisible.set(false);
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

}
