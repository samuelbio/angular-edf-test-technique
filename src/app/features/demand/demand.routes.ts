import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    loadComponent: () => import('./components/demand.component'),
  },
];
