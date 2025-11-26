import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login.component';
import {NotFoundComponent} from './auth/not-found.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
