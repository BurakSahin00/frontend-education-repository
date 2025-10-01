import { Component, DestroyRef, Input, signal, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AssignTodoRequest, CreateTodoRequest, Todo, UnassignTodoRequest } from '../../features/todo/model/todo.model';
import { LoggingService } from '../../services/logging.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TaskActions } from '../../management/actions/task.action';
import { selectAllCategories } from '../../management/selectors/category.selector';
import { Category } from '../../features/todo/model/category.model';
import { UpdateTodoRequest } from '../../features/todo/model/todo.model';
import { User } from '../../features/todo/model/user.model';
import { selectUser } from '../../management/selectors/auth.selector';
import { Task } from '../../features/todo/domain/todo.domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'todo-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzModalModule, NzFormModule, NzInputModule, NzSelectModule, CommonModule],
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoModal {

  // Current working todo when editing
  private _currentTodo: Todo | null = null;

  todoForm: FormGroup;
  isVisible: boolean = false;
  modalTitle: string = '';
  mode: string = '';
  todoID: number = 0;
  user = signal<User | null>(null);
  userLabels: { id: string; name: string }[] = [];
  userCategories: Category[] = [];
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  // Allow passing selected todo via input binding
  @Input()
  set todo(value: Todo | null | undefined) {
    if (value) {
      this._currentTodo = value;
    }
  }

  constructor(private formBuilder: FormBuilder, private loggingService: LoggingService, private store: Store) {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      category: [[]],
      dueDate: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.store.select(selectAllCategories).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(categories => {
      this.userCategories = categories;
    });

    this.store.select(selectUser).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(user => {
      this.user.set(user);
    });

    this.userLabels = [
      {
        id: '0',
        name: 'Low'
      },
      {
        id: '1',
        name: 'Medium'
      },
      {
        id: '2',
        name: 'High'
      }
    ];
  }

  handleCancel(): void {
    this.isVisible = false;
    this.todoForm.reset();
    this.cdr.markForCheck();
  }

  handleOk(): void {
    if (this.todoForm.valid && this.mode === 'EDIT' && this._currentTodo?.id) {
      const formValue = this.todoForm.value;
      this.loggingService.info('Düzenleme modunda form gönderiliyor.', { todoID: this._currentTodo.id, formValue });

      // Multi-select returns string[] of selected category IDs directly
      const selectedCategoryIds: number[] = Array.isArray(formValue.category) ? formValue.category : [];
      const dueDateUtc = formValue.dueDate ? this.toUtcDate(formValue.dueDate) : undefined;

      const updatedTodo: UpdateTodoRequest = {
        taskItemId: this._currentTodo.id,
        title: formValue.title,
        description: formValue.description,
        priority: Number(formValue.priority) as 0 | 1 | 2,
        dueDate: dueDateUtc,
        clearDueDate: false,
        clearDescription: false
      };

      this.loggingService.info('Güncellenen todo (payload):', updatedTodo);

      // Existing categories on the todo (IDs)
  const existingCategoryIds = (this._currentTodo.categories || []).map(c => c.id);

      // Determine removed category IDs
      const removed = existingCategoryIds.filter(id => !selectedCategoryIds.includes(id));
      // Determine newly added category IDs
      const added = selectedCategoryIds.filter(id => !existingCategoryIds.includes(id));

      removed.forEach(categoryId => {
        const request: UnassignTodoRequest = { taskItemId: this._currentTodo!.id, categoryId: Number(categoryId) };
        this.store.dispatch(TaskActions.unassignCategory({ request: request }));
        this.loggingService.info('Kategori kaldırıldı', { todo: this._currentTodo!.title, categoryId });
      });

      added.forEach(categoryId => {
        const request: AssignTodoRequest = { taskItemId: this._currentTodo!.id, categoryId: Number(categoryId) };
        this.store.dispatch(TaskActions.assignCategory({ request: request }));
        this.loggingService.info('Kategori eklendi', { todo: this._currentTodo!.title, categoryId });
      });

      this.store.dispatch(TaskActions.updateTask({ task: updatedTodo, taskId: Number(this._currentTodo.id) }));

  } else if (this.todoForm.valid && this.mode === 'ADD') {

      const formValue = this.todoForm.value;
      const dueDateUtc = formValue.dueDate ? this.toUtcDate(formValue.dueDate) : undefined;
      const newTodo: CreateTodoRequest = {
        title: formValue.title,
        description: formValue.description,
        priority: Number(formValue.priority) as 0 | 1 | 2,
        dueDate: dueDateUtc,
        userId: this.user()?.id || 0,
      };

      this.loggingService.info('Yeni todo ekleme formu gönderiliyor.', newTodo);

  const selectedCategoryIds: number[] = Array.isArray(formValue.category) ? formValue.category : [];
  this.store.dispatch(TaskActions.addTask({ task: newTodo, categoryIds: selectedCategoryIds }));
    }

    this.isVisible = false;
    this.mode = '';
    this.modalTitle = '';
    this.todoForm.reset();
    this.cdr.markForCheck();
  }

  openModal(mode: 'ADD' | 'EDIT', todo?: Todo): void {
    this.loggingService.info('Modal açılıyor.', { mode, isFormValid: this.todoForm.valid, incomingTodo: todo });
    if (mode === 'EDIT') {
      const src = todo ?? this._currentTodo;
      if (!src) {
        this.loggingService.error('Edit mode açıldı ancak düzenlenecek todo bulunamadı.');
        return;
      }
      this._currentTodo = src;
      this.mode = 'EDIT';
      this.modalTitle = 'Edit Todo';
      this.todoID = src.id;
      this.todoForm.reset();
      this.todoForm.patchValue({
        title: src.title,
        description: src.description,
        // Priority select [nzValue] uses label.id ('0','1','2'), so we must patch with string id
        priority: String(src.priority),
        category: src.categories ? src.categories.map(cat => cat.id) : [],
        dueDate: src.dueDate ? new Date(src.dueDate).toISOString().substring(0, 10) : null
      });
    } else if (mode === 'ADD') {
      this._currentTodo = null;
      this.mode = 'ADD';
      this.modalTitle = 'Add New Todo';
      this.todoForm.reset();
    }
    this.isVisible = true;
    this.cdr.markForCheck();
  }

  private toUtcDate(dateOnly: string): Date {
    if (!dateOnly || typeof dateOnly !== 'string') return new Date(NaN);
    const parts = dateOnly.split('-').map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return new Date(NaN);
    const [year, month, day] = parts;
    return new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
  }
}
