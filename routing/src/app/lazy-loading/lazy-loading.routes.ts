import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

export const LazyLoading_ROUTES: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'reports', component: ReportsComponent,},
];
