import { eventGroup } from '@ngrx/signals/events';
import { type } from '@ngrx/signals';

export const demandDeleteEvent = eventGroup({
  source: 'DemandDelete',
  events: {
    demandDeleteRequested: type<{ id: string }>(),
    demandDeleteSucceeded: type<{ id: string }>(),
  },
});
