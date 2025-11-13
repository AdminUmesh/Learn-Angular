import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const MainRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'Lazyload',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.routes').then(
        (m) => m.LazyLoading_ROUTES
      ),
  },
];
