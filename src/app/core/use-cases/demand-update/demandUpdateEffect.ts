import { demandUpdateEvent } from './demandUpdateEvent';
import { Events } from '@ngrx/signals/events';
import { DemandPort } from '../../ports/demandPort';
import { map, switchMap } from 'rxjs';

export const demandUpdateEffect = (events: Events, demandPort: DemandPort) => ({
  demandUpdate$: events.on(demandUpdateEvent.demandUpdateRequested).pipe(
    switchMap(({ payload }) => {
      const { id, data } = payload;
      return demandPort
        .updateDemand(id, data)
        .pipe(
          map((updatedDemand) => demandUpdateEvent.demandUpdateSucceeded({ data: updatedDemand })),
        );
    }),
  ),
});
