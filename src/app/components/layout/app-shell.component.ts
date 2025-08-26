import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="shell">
      <app-sidebar (filterChange)="onFilter($event)"></app-sidebar>
      <main class="shell-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .shell { display:flex; height:100dvh; width:100%; overflow:hidden; }
    .shell-content { flex:1; overflow:auto; padding:1rem; background:#fafafa; }
  `]
})
export class AppShellComponent {
  onFilter(value: { category?: string|null; label?: string|null }) {
    console.log('Filter changed', value);
  }
}
