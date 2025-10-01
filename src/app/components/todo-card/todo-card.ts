import { Component, EventEmitter, Input, Output, inject, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../features/todo/model/todo.model';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ChangeDetectionStrategy } from '@angular/core';
import { SanitizeHtmlPipe } from '../../security/sanitizer/sanitize-html.pipe';
import { Store } from '@ngrx/store';
import { selectTaskById } from '../../management/selectors/task.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'todo-card',
  standalone: true,
  imports: [NzCardModule, NzButtonModule, SanitizeHtmlPipe],
  templateUrl: './todo-card.html',
  styleUrls: ['./todo-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCard {

  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Todo>();
  @Output() toggleComplete = new EventEmitter<number>();

  private router = inject(Router);
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onEdit(): void {
    this.edit.emit(this.todo);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }

  onOpenDetails(): void {
    this.router.navigate(['/app', 'todos', this.todo.id]);
  }

  ngOnInit(): void {
    const id = this.todo?.id;
    if (id != null) {
      this.store.select(selectTaskById(id)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(latest => {
        if (latest) this.todo = latest;
      });
    }
  }

}
