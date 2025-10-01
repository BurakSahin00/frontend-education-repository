import { Component, Input, signal, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoggingService } from '../../services/logging.service';
import { Category, UpdateCategoryRequest } from '../../features/todo/model/category.model';
import { CategoryActions } from '../../management/actions/category.actions';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectUserId } from '../../management/selectors/auth.selector';

@Component({
  selector: 'category-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzModalModule, NzInputModule],
  templateUrl: './category-edit-modal.html',
  styleUrls: ['./category-edit-modal.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditModal {

  @Input() category: Category | null = null;

  categoryForm: FormGroup;
  isVisible = signal<boolean>(false);
  title = signal<string>('Kategori Düzenle');
  userId = signal<number | null>(null);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  constructor(private fb: FormBuilder, private log: LoggingService, private store: Store) {
    this.categoryForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/.*\S.*/),
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      description: ['']
    });
  }
  ngOnInit(): void {
    this.store.select(selectUserId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(userId => {
      if (userId) {
        this.userId.set(userId);
      }
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
      name: (src.name || '').trim(),
      description: (src.description || '').trim()
    });
    this.isVisible.set(true);
    // Ensure OnPush view updates immediately
    this.categoryForm.updateValueAndValidity({ onlySelf: false, emitEvent: false });
    this.cdr.markForCheck();
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

  handleOk(): void {
    if (!this.category) {
      return;
    }
    this.categoryForm.markAllAsTouched();
    if (!this.categoryForm.valid) {
      return;
    }
    const formValue = this.categoryForm.value;
    const nameTrimmed = (formValue.name || '').trim();
    if (!nameTrimmed) {
      this.categoryForm.get('name')?.setErrors({ required: true });
      return;
    }
    const request: UpdateCategoryRequest = {
      id: this.category.id,
      name: nameTrimmed,
      description: (formValue.description || '').trim() || undefined,
      userId: this.userId() as number
    };
    this.store.dispatch(CategoryActions.updateCategory({ request }));
    this.isVisible.set(false);
  }
}
