import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/login-page/login-page.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


export const routes: Routes = [

  {
    path: 'Dashboard',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  { path: '**', redirectTo: 'dashboard' },

    {
        path: 'login',
        loadComponent: () =>
          import('./features/login/login-page/login-page.component').then(m => m.LoginPageComponent),
      },
      {
        path: '',
        component:LoginPageComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
      },
];
