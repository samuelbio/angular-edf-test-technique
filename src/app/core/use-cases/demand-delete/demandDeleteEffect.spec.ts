import { describe, expect } from 'vitest';
import { demandDeleteEvent } from './demandDeleteEvent';
import { FakeDemandAdapter } from '../../adapters/local-demand/fakeDemandAdapter';
import { Dispatcher } from '@ngrx/signals/events';
import { Demand } from '../../model/demand';
import { configureAppTest } from '../../../../test-setup';
import { demandStore } from '../../store/demandStore';
import { demandRetrievalEvent } from '../demand-retrieval/demandRetrievalEvent';

describe('DemandDeleteEffect', () => {
  let demandAdapter: FakeDemandAdapter;
  let dispatcher: Dispatcher;
  let demandStore: demandStore;

  beforeEach(() => {
    demandAdapter = new FakeDemandAdapter();
    const { _store, _dispatcher } = configureAppTest({
      demandPort: demandAdapter,
    });
    demandStore = _store;
    dispatcher = _dispatcher;
    demandAdapter.demands = [existingDemand];
    dispatcher.dispatch(demandRetrievalEvent.demandRequested());
  });

  it('should delete demand data and update store', () => {
    dispatcher.dispatch(demandDeleteEvent.demandDeleteSucceeded({ id: existingDemand.id }));
    expect(demandStore.demands().length).toEqual(0);
  });

  const existingDemand: Demand = {
    id: 'd1',
    username: 'existingUser',
    projectName: 'Existing Project',
    contract: 12345,
  };
});
