import { Component, Input } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Todo, TodoUpdate } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { LoggingService } from '../../services/logging.service';
import { AuthService } from '../../services/auth.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

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
  userLabels: string[] = [];
  userCategories: string[] = []

  constructor(private formBuilder: FormBuilder, private todoService: TodoService, private loggingService: LoggingService, private authService: AuthService) {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      category: [[], [Validators.required]],
      dueDate: ['', [Validators.required]]
    });

    this.userCategories = this.authService.getCurrentUser()?.todoCategories || [];
    this.userLabels = this.authService.getCurrentUser()?.todoLabels || [];
  }

  handleCancel(): void {
    this.isVisible = false;
    this.todoForm.reset();
  }

  handleOk(todoID: string = this.todoID): void {
    if (this.todoForm.valid && this.mode === 'EDIT' && todoID) {
      const formValue = this.todoForm.value;
      const updatedTodo: TodoUpdate = {
        title: formValue.title,
        description: formValue.description,
        priority: formValue.priority,
        tags: formValue.tags,
        dueDate: formValue.dueDate
      };

      this.todoService.updateTodo(todoID, updatedTodo).subscribe({
        next: (todo) => {
          this.loggingService.info('Todo başarıyla güncellendi.', todo);
        },
        error: (error) => {
          this.loggingService.error('Todo güncellenirken hata oluştu:', error);
        }
      });
    } else if (this.todoForm.valid && this.mode === 'ADD') {
      const formValue = this.todoForm.value;
      const newTodo: Todo = {
        id: this.todoService.getNextTodoId(),
        title: formValue.title,
        completed: false,
        description: formValue.description,
        priority: formValue.priority,
        tags: formValue.tags,
        dueDate: formValue.dueDate,
        createdAt: new Date(),
        parentId: null,
        assignedUserId: this.authService.getCurrentUser()?.id || ''
      };
      this.todoService.addTodo(newTodo).subscribe({
        next: (todo) => {
          this.loggingService.info('Todo başarıyla eklendi.', todo);
        },
        error: (error) => {
          this.loggingService.error('Todo eklenirken hata oluştu:', error);
        }
      });
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
        priority: todo.priority,
        category: todo.tags,
        dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().substring(0, 10) : null
      });
    } else if (mode === 'ADD') {
      this.loggingService.info('Yeni todo ekleme modunda açılıyor.');
      this.mode = 'ADD';
      this.modalTitle = 'Add New Todo';
    }
    this.isVisible = true;
  }
}
