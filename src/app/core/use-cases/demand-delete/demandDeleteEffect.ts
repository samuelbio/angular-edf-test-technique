import { map, switchMap } from 'rxjs';
import { Events } from '@ngrx/signals/events';
import { DemandPort } from '../../ports/demandPort';
import { demandDeleteEvent } from './demandDeleteEvent';

export const demandDeleteEffect = (events: Events, demandPort: DemandPort) => ({
  deleteDemand$: events
    .on(demandDeleteEvent.demandDeleteRequested)
    .pipe(
      switchMap(({ payload }) =>
        demandPort
          .deleteDemand(payload.id)
          .pipe(map(() => demandDeleteEvent.demandDeleteSucceeded({ id: payload.id }))),
      ),
    ),
});
