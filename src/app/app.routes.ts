import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demand',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'demand',
        loadChildren: () => import('./features/demand/demand.routes').then((m) => m.default),
      },
    ],
  },
];
