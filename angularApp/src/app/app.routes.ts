import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];
