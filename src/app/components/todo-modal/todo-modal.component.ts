import { Component, Input, signal } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoRequest, Todo } from '../../features/todo/model/todo.model';
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

@Component({
  selector: 'todo-modal',
  imports: [FormsModule, ReactiveFormsModule, NzModalModule, NzFormModule, NzInputModule, NzSelectModule, CommonModule],
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModal {

  todoForm: FormGroup;
  isVisible: boolean = false;
  modalTitle: string = '';
  mode: string = '';
  todoID: string = '';
  user = signal<User | null>(null);
  userLabels: { id: string; name: string }[] = [];
  userCategories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private loggingService: LoggingService, private store: Store) {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      category: [[], [Validators.required]],
      dueDate: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.store.select(selectAllCategories).subscribe(categories => {
      this.userCategories = categories;
    });

    this.store.select(selectUser).subscribe(user => {
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
  }

  handleOk(todoID: string = this.todoID): void {
    if (this.todoForm.valid && this.mode === 'EDIT' && todoID) {
      this.loggingService.info('Düzenleme modunda form gönderiliyor.', { todoID, formValue: this.todoForm.value });
      const formValue = this.todoForm.value;
      const dueDateUtc = formValue.dueDate ? this.toUtcDate(formValue.dueDate) : undefined;
      const updatedTodo: UpdateTodoRequest = {
        taskItemId: todoID,
        title: formValue.title,
        description: formValue.description,
        priority: Number(formValue.priority) as 0 | 1 | 2,
        dueDate: dueDateUtc,
        clearDueDate: false,
        clearDescription: false
      };

      this.loggingService.info('Güncellenen todo:', updatedTodo);

      this.store.dispatch(TaskActions.updateTask({ task: updatedTodo, taskId: Number(todoID) }));

    } else if (this.todoForm.valid && this.mode === 'ADD') {

      const formValue = this.todoForm.value;
      const dueDateUtc = formValue.dueDate ? this.toUtcDate(formValue.dueDate) : undefined;
      const newTodo: CreateTodoRequest = {
        title: formValue.title,
        description: formValue.description,
        priority: Number(formValue.priority) as 0 | 1 | 2,
        dueDate: dueDateUtc,
        userId: this.user()?.id || '',
      };

      this.store.dispatch(TaskActions.addTask({ task: newTodo }));
    }

    this.isVisible = false;
    this.mode = '';
    this.modalTitle = '';
    this.todoForm.reset();
  }

  openModal(mode: 'ADD' | 'EDIT', todo?: Todo): void {
    this.loggingService.info('Modal açılıyor.', { mode, todo, isFormValid: this.todoForm.valid });
    if (mode === 'EDIT' && todo) {

      this.loggingService.info('Todo düzenleme modunda açılıyor.', todo);
      this.mode = 'EDIT';
      this.modalTitle = 'Edit Todo';
      this.todoID = todo.id;

      this.todoForm.patchValue({
        title: todo.title,
        description: todo.description,
        priority: Number(todo.priority) as 0 | 1 | 2,
        category: todo.categories ? todo.categories.map(cat => cat.name) : [],
        dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().substring(0, 10) : null
      });

    } else if (mode === 'ADD') {

      this.loggingService.info('Yeni todo ekleme modunda açılıyor.');
      this.mode = 'ADD';
      this.modalTitle = 'Add New Todo';

    }
    this.isVisible = true;
  }

  private toUtcDate(dateOnly: string): Date {
    if (!dateOnly || typeof dateOnly !== 'string') return new Date(NaN);
    const parts = dateOnly.split('-').map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return new Date(NaN);
    const [year, month, day] = parts;
    return new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
  }
}
