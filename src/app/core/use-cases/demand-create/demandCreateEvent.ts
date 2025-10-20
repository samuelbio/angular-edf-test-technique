import { eventGroup } from '@ngrx/signals/events';
import { type } from '@ngrx/signals';
import { Demand, DemandCommand } from '../../model/demand';

export const demandCreateEvent = eventGroup({
  source: 'DemandCreate',
  events: {
    demandCreateRequested: type<DemandCommand>(),
    demandCreateSucceeded: type<Demand>(),
  },
});
