import { Directive, ElementRef, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[safeHtml]',
  standalone: true
})
export class SafeHtmlDirective {
  private el = inject(ElementRef<HTMLElement>);
  private sanitizer = inject(DomSanitizer);

  @Input('safeHtml') set safeHtml(value: string | null | undefined) {
    const sanitized: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(value ?? '');
    // Angular will sanitize normally for [innerHTML]; we're using explicit safe type
    this.el.nativeElement.innerHTML = '';
    // Using as any to assign SafeHtml to innerHTML
    (this.el.nativeElement as any).innerHTML = sanitized as any;
  }
}
