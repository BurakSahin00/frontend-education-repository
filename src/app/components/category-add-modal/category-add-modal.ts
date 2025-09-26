import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoggingService } from '../../services/logging.service';
import { CreateCategoryRequest } from '../../features/todo/model/category.model';
import { CategoryActions } from '../../management/actions/category.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'category-add-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzModalModule],
  templateUrl: './category-add-modal.html',
  styleUrls: ['./category-add-modal.css']
})
export class CategoryAddModal {

  categoryForm: FormGroup;
  isVisible = signal<boolean>(false);


  constructor(private fb: FormBuilder, private log: LoggingService, private store: Store) {
    this.categoryForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  open(): void {
    this.isVisible.set(true);
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

  handleOk(): void {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;
      const request: CreateCategoryRequest = {
        name: newCategory.name,
        description: newCategory.description
      };
      this.store.dispatch(CategoryActions.createCategory({ request: request }));
      this.categoryForm.reset();
      this.isVisible.set(false);
    }

  }
}


