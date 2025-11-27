import {Component} from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  template: `<h2>Login Page</h2><app-login-form></app-login-form>`
})
export class LoginComponent {}

