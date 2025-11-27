import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {NotFoundComponent} from './features/not-found/not-found.component';
import {authGuard} from './core/guards/auth.guard';
import {AdminPageComponent} from './features/admin-page/admin-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [authGuard]},
  { path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];
