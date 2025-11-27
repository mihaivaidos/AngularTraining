import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];
