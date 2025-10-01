import { Pipe, PipeTransform, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import DOMPurify from 'dompurify';

@Pipe({ name: 'sanitizeHtml', standalone: true })
export class SanitizeHtmlPipe implements PipeTransform {
  private platformId = inject(PLATFORM_ID);

  transform(value: string | null | undefined): string {
    if (!value) return '';
    // Avoid using DOM APIs on the server
    if (!isPlatformBrowser(this.platformId)) return '';

    // Minimal, safe whitelist. Extend only when necessary.
    const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span'];
    const ALLOWED_ATTR = ['href', 'title', 'target', 'rel'];

    const sanitized = DOMPurify.sanitize(value, {
      ALLOWED_TAGS,
      ALLOWED_ATTR,
      ALLOW_DATA_ATTR: false,
      USE_PROFILES: { html: true },
      FORBID_TAGS: ['style', 'script']
    });

    return sanitized;
  }
}
