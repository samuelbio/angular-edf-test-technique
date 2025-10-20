import { DemandPort } from '../../ports/demandPort';
import { demandRetrievalEvent } from './demandRetrievalEvent';
import { Events } from '@ngrx/signals/events';
import { first, map, switchMap } from 'rxjs';

export const demandRetrievalEffect = (events: Events, demandPort: DemandPort) => ({
  retrievedDemand$: events
    .on(demandRetrievalEvent.demandRequested)
    .pipe(
      switchMap(() =>
        demandPort
          .fetchDemands()
          .pipe(map((demands) => demandRetrievalEvent.demandRetrieved(demands))),
      ),
    ),
});
