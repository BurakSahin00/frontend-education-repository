import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search',
  template: `<h2>Arama</h2><p>Sorgu: {{ q }}</p>`
})
export class SearchComponent {
  q: string | null;
  constructor(private route: ActivatedRoute) {
    this.q = this.route.snapshot.queryParamMap.get('q');
  }
}
