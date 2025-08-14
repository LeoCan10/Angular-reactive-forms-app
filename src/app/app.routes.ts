import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('../app/reactive/reactive.routes').then((m) => m.reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.routes'),
  },
  {
    path: 'country',
    loadChildren: () => import('../app/country/country.routes').then((m) => m.countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
