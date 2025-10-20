import { provideRouter } from '@angular/router';
import {
  InjectionToken,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { routes } from '../app.routes';
import { DemandPort } from './ports/demandPort';

export const DEMAND_PORT = new InjectionToken<DemandPort>('DEMAND_PORT');

export interface Ports {
  demandPort: DemandPort;
}

export function provideCore(ports: Partial<Ports>) {
  return [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: DEMAND_PORT,
      useValue: ports.demandPort,
    },
  ];
}
