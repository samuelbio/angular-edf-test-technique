import { ApplicationConfig } from '@angular/core';

import { provideCore } from './core/core';
import { LocalDemandAdapter } from './core/adapters/local-demand/localDemandAdapter';

const demandPort = new LocalDemandAdapter();

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ demandPort })],
};
