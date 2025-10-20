import { Events } from '@ngrx/signals/events';
import { DemandPort } from '../../ports/demandPort';
import { map, switchMap } from 'rxjs';
import { demandCreateEvent } from './demandCreateEvent';

export const demandCreateEffect = (events: Events, demandPort: DemandPort) => ({
  createDemand$: events
    .on(demandCreateEvent.demandCreateRequested)
    .pipe(
      switchMap(({ payload }) =>
        demandPort
          .createDemand(payload)
          .pipe(map((demand) => demandCreateEvent.demandCreateSucceeded(demand))),
      ),
    ),
});
