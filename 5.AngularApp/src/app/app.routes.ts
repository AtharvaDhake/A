import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
