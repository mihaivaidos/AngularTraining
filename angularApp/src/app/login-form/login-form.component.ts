import {Component, inject} from '@angular/core';
import {FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  protected readonly loginFormGroup = this._formBuilder.group<LoginForm>({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', [Validators.required, Validators.minLength(6)])
  });

  onFormSubmit(): void {
    if(this.loginFormGroup.valid) {
      console.log('getRawValue():', this.loginFormGroup.getRawValue());
    }
  }
}
