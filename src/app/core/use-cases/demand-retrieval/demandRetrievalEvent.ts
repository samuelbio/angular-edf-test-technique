import { eventGroup } from '@ngrx/signals/events';
import { type } from '@ngrx/signals';
import { Demand } from '../../model/demand';

export const demandRetrievalEvent = eventGroup({
  source: 'DemandRetrieval',
  events: {
    demandRequested: type<void>(),
    demandRetrieved: type<Demand[]>(),
  },
});
