import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoggingService } from '../../services/logging.service';
import { Category, UpdateCategoryRequest } from '../../features/todo/model/category.model';
import { CategoryActions } from '../../management/actions/category.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'category-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzModalModule],
  templateUrl: './category-edit-modal.html',
  styleUrls: ['./category-edit-modal.css']
})
export class CategoryEditModal {

  @Input() category: Category | null = null;

  categoryForm: FormGroup;
  isVisible = signal<boolean>(false);
  title = signal<string>('Kategori Düzenle');

  constructor(private fb: FormBuilder, private log: LoggingService, private store: Store) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  open(category?: Category): void {
    const src = category ?? this.category;
    if (!src) {
      this.log.error('Düzenlenecek kategori bulunamadı.');
      return;
    }
    this.category = src;
    this.categoryForm.reset();
    this.categoryForm.patchValue({
      name: src.name,
      description: src.description
    });
    this.isVisible.set(true);
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

  handleOk(): void {
    if (!this.category) {
      return;
    }
    if (this.categoryForm.valid) {
      const formValue = this.categoryForm.value;
      const request: UpdateCategoryRequest = {
        id: this.category.id,
        name: formValue.name,
        description: formValue.description
      };
      this.store.dispatch(CategoryActions.updateCategory({ request }));
      this.isVisible.set(false);
    }
  }
}
