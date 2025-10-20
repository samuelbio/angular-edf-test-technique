import { Demand, DemandCommand } from '../../model/demand';
import { type } from '@ngrx/signals';
import { eventGroup } from '@ngrx/signals/events';

export const demandUpdateEvent = eventGroup({
  source: 'DemandUpdate',
  events: {
    demandUpdateRequested: type<{ id: string; data: DemandCommand }>(),
    demandUpdateSucceeded: type<{ data: Demand }>(),
  },
});
