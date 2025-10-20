import { beforeEach, describe } from 'vitest';
import { FakeDemandAdapter } from '../../adapters/local-demand/fakeDemandAdapter';
import { Dispatcher } from '@ngrx/signals/events';
import { demandStore } from '../../store/demandStore';
import { configureAppTest } from '../../../../test-setup';
import { Demand } from '../../model/demand';
import { demandRetrievalEvent } from './demandRetrievalEvent';

describe('DemandRetrievedEffect', () => {
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
  });

  it('should retrieve demand data and update the store', () => {
    const mockDemandData: Demand = {
      id: 'd1',
      username: 'testUser',
      projectName: 'Test Project',
      contract: 12243,
    };
    demandAdapter.demands = [mockDemandData];
    dispatcher.dispatch(demandRetrievalEvent.demandRequested());
    expect(demandStore.demands()).toEqual<Demand[]>([mockDemandData]);
  });
});
