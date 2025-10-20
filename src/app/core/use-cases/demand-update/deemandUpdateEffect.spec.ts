import { beforeEach, describe, expect } from 'vitest';
import { FakeDemandAdapter } from '../../adapters/local-demand/fakeDemandAdapter';
import { Dispatcher } from '@ngrx/signals/events';
import { demandStore } from '../../store/demandStore';
import { configureAppTest } from '../../../../test-setup';
import { Demand } from '../../model/demand';
import { demandCreateEvent } from '../demand-create/demandCreateEvent';
import { demandUpdateEvent } from './demandUpdateEvent';

describe('DemandUpdateEffect', () => {
  let demandAdapter: FakeDemandAdapter;
  let dispatcher: Dispatcher;
  let store: demandStore;

  beforeEach(() => {
    demandAdapter = new FakeDemandAdapter();
    const { _store, _dispatcher } = configureAppTest({
      demandPort: demandAdapter,
    });
    store = _store;
    dispatcher = _dispatcher;
  });

  it('should update demand and update store', () => {
    const mockOldDemandData: Demand = {
      id: 'd1',
      username: 'testUser',
      projectName: 'Test Project',
      contract: 12243,
    };
    const mockDemandUpdateData: Demand = {
      id: 'd1',
      username: 'updatedUser',
      projectName: 'Updated Project',
      contract: 54321,
    };

    dispatcher.dispatch(demandCreateEvent.demandCreateRequested(mockOldDemandData));
    dispatcher.dispatch(
      demandUpdateEvent.demandUpdateRequested({
        id: mockOldDemandData.id,
        data: mockDemandUpdateData,
      }),
    );
    expect(store.demands()).toEqual<Demand[]>([mockDemandUpdateData]);
  });
});
