import { inject, provideAppInitializer } from '@angular/core';
import { CsrfService } from './csrf.service';
import { catchError, of, firstValueFrom } from 'rxjs';

// Angular 19+ recommended: use provideAppInitializer instead of APP_INITIALIZER
export const csrfAppInitializer = provideAppInitializer(() => {
  const csrf = inject(CsrfService);
  // Ensure the initializer always resolves and never blocks bootstrap on error
  return firstValueFrom(
    csrf.ensureToken$().pipe(
      catchError(() => of(void 0))
    )
  );
});