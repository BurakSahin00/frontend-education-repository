import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `<h2>404 - Bulunamadı</h2><a routerLink="/">Ana sayfa</a>`
})
export class NotFoundComponent {}
