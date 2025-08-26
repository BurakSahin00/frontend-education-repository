import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-user-task-cards',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './user-task-cards.component.html',
  styleUrls: ['./user-task-cards.component.css']
})
export class UserTaskCardsComponent {
  private todoService = inject(TodoService);
  private userService = inject(UserService);

  // Seçili kullanıcı (ileride sidebar / profil entegrasyonu için dışarı açılabilir)
  selectedUserId = signal<string|null>(null);

  users = computed(() => this.userService.getUsers());

  allTodos = computed(() => this.todoService.getTodos());

  userTodos = computed(() => {
    const uid = this.selectedUserId();
    return this.allTodos().filter(t => !uid || t.assignedUserId === uid);
  });

  // Özetler
  summary = computed(() => {
    const list = this.userTodos();
    const total = list.length;
    const done = list.filter(t => t.completed).length;
    return { total, done, percent: total ? Math.round(done * 100 / total) : 0 };
  });

  selectUser(id: string|null) { this.selectedUserId.set(id === this.selectedUserId() ? null : id); }

  priorityLabel(p?: any) {
    switch(p){
      case 0: return 'Low';
      case 1: return 'Medium';
      case 2: return 'High';
      default: return '-';
    }
  }
}
