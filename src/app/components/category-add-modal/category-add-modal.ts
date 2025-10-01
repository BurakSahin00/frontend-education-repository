import { Component, DestroyRef, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoggingService } from '../../services/logging.service';
import { CreateCategoryRequest } from '../../features/todo/model/category.model';
import { CategoryActions } from '../../management/actions/category.actions';
import { Store } from '@ngrx/store';
import { selectUser, selectUserId } from '../../management/selectors/auth.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'category-add-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzModalModule],
  templateUrl: './category-add-modal.html',
  styleUrls: ['./category-add-modal.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryAddModal {

  categoryForm: FormGroup;
  isVisible = signal<boolean>(false);
  userId = signal<number | null>(null);
  private destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    this.store.select(selectUserId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(userId => {
      if (userId) {
        this.userId.set(userId);
      }
    });
  }


  constructor(private fb: FormBuilder, private log: LoggingService, private store: Store) {
    this.categoryForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          // disallow all-whitespace names
          Validators.pattern(/.*\S.*/),
          Validators.maxLength(50)
        ]
      ],
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
    // Trigger validation visuals
    this.categoryForm.markAllAsTouched();

    if (!this.categoryForm.valid) {
      return;
    }

    const raw = this.categoryForm.value;
    const nameTrimmed = (raw.name || '').trim();

    if (!nameTrimmed) {
      // set a validation error if only whitespace was entered
      this.categoryForm.get('name')?.setErrors({ required: true });
      return;
    }

    const request: CreateCategoryRequest = {
      name: nameTrimmed,
      description: (raw.description || '').trim() || undefined,
      userId: this.userId() as number
    };

    this.store.dispatch(CategoryActions.createCategory({ request }));
    this.categoryForm.reset();
    this.isVisible.set(false);

  }
}


