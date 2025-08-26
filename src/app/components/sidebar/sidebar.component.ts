import { Component, EventEmitter, Output, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NzLayoutModule, NzIconModule, NzMenuModule, NzBreadCrumbModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // UI toggle signals
  showCategories = signal(true);
  showLabels = signal(true);

  // Source data signals
  categories = signal<string[]>(['Home','Office','School']);
  labels = signal<string[]>(['High','Medium','Low']);

  // Selection signals
  activeCategory = signal<string|null>(null);
  activeLabel = signal<string|null>(null);

  // Derived (computed) filter object
  filter = computed(() => ({ category: this.activeCategory(), label: this.activeLabel() }));

  @Output() filterChange = new EventEmitter<{ category: string|null; label: string|null }>();

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  urlFilter = signal<{category: string|null; label: string|null}>({ category: null, label: null });

  constructor() {
    // İlk URL değerlerini yükle
    const qp = this.route.snapshot.queryParamMap;
    this.activeCategory.set(qp.get('cat'));
    this.activeLabel.set(qp.get('lab'));
    this.urlFilter.set({ category: this.activeCategory(), label: this.activeLabel() });

    // Category -> URL (yalnızca cat paramını dokun)
    effect(() => {
      const cat = this.activeCategory();
      const currentCat = this.route.snapshot.queryParamMap.get('cat');
      if (cat !== currentCat) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { cat: cat || null },
          queryParamsHandling: 'merge'
        });
      }
      this.urlFilter.update(o => ({ ...o, category: cat }));
      this.filterChange.emit(this.filter());
    });

    // Label -> URL (yalnızca lab paramını dokun)
    effect(() => {
      const lab = this.activeLabel();
      const currentLab = this.route.snapshot.queryParamMap.get('lab');
      if (lab !== currentLab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { lab: lab || null },
          queryParamsHandling: 'merge'
        });
      }
      this.urlFilter.update(o => ({ ...o, label: lab }));
      this.filterChange.emit(this.filter());
    });
  }

  toggleCategories() { this.showCategories.update(v => !v); }
  toggleLabels() { this.showLabels.update(v => !v); }

  selectCategory(c: string) {
    this.activeCategory.set(this.activeCategory() === c ? null : c);
  }

  selectLabel(l: string) {
    this.activeLabel.set(this.activeLabel() === l ? null : l);
  }
}
