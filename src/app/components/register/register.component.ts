import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../management/actions/auth.action';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  errorMessage = '';

  private store = inject(Store);
  private fb = inject(FormBuilder);

  form = this.fb.group(
    {
      name: [''],
      surname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    },
    { validators: this.passwordsMatchValidator() }
  );

  private passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirm = group.get('confirmPassword')?.value;
      if (!password || !confirm) return null;
      return password === confirm ? null : { passwordMismatch: true };
    };
  }

  register() {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage = 'Lütfen formu kontrol edin.';
      return;
    }
    const { email, password } = this.form.getRawValue();
    this.store.dispatch(AuthActions.register({ request: { email: email!, password: password! } }));
  }
}
