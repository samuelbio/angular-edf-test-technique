import { describe } from 'vitest';
import { Dispatcher } from '@ngrx/signals/events';
import { FakeDemandAdapter } from '../../adapters/local-demand/fakeDemandAdapter';
import { configureAppTest } from '../../../../test-setup';
import { demandStore } from '../../store/demandStore';
import { Demand } from '../../model/demand';
import { demandCreateEvent } from './demandCreateEvent';

describe('DemandCreateEffect', () => {
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

  it('should demand-dialog demand data and update store', () => {
    const newDemand: Demand = {
      id: 'd2',
      username: 'newUser',
      projectName: 'New Project',
      contract: 54321,
    };
    dispatcher.dispatch(demandCreateEvent.demandCreateRequested(newDemand));
    expect(demandStore.demands()).toEqual([newDemand]);
  });
});
