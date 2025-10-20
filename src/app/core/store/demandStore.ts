import { Demand } from '../model/demand';
import { signalStore, withState } from '@ngrx/signals';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
import { DemandPort } from '../ports/demandPort';
import { DEMAND_PORT } from '../core';
import { inject } from '@angular/core';
import { demandRetrievalEffect } from '../use-cases/demand-retrieval/demandRetrievalEffect';
import { demandRetrievalEvent } from '../use-cases/demand-retrieval/demandRetrievalEvent';
import { demandCreateEvent } from '../use-cases/demand-create/demandCreateEvent';
import { demandCreateEffect } from '../use-cases/demand-create/demandCreateEffect';
import { demandDeleteEvent } from '../use-cases/demand-delete/demandDeleteEvent';
import { demandDeleteEffect } from '../use-cases/demand-delete/demandDeleteEffect';
import { demandUpdateEffect } from '../use-cases/demand-update/demandUpdateEffect';
import { demandUpdateEvent } from '../use-cases/demand-update/demandUpdateEvent';

export type DemandState = {
  demands: Demand[];
  isLoading: boolean;
};

export const initialDemandState: DemandState = {
  demands: [],
  isLoading: false,
};

export const demandStore = signalStore(
  { providedIn: 'root' },
  withState<DemandState>(initialDemandState),
  withReducer(
    on(demandRetrievalEvent.demandRequested, (event, state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(demandRetrievalEvent.demandRetrieved, (event, state) => {
      return {
        demands: event.payload,
        isLoading: false,
      };
    }),
    on(demandCreateEvent.demandCreateRequested, (event, state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(demandCreateEvent.demandCreateSucceeded, ({ payload }, state) => {
      return {
        demands: [...state.demands, payload],
        isLoading: false,
      };
    }),
    on(demandDeleteEvent.demandDeleteRequested, ({ payload }, state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(demandDeleteEvent.demandDeleteSucceeded, ({ payload }, state) => {
      return {
        ...state,
        demands: [...state.demands.filter((demand) => demand.id !== payload.id)],
        isLoading: false,
      };
    }),
    on(demandUpdateEvent.demandUpdateRequested, (_, state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(demandUpdateEvent.demandUpdateSucceeded, ({ payload }, state) => {
      const updatedDemands = state.demands.map((demand) =>
        demand.id === payload.data.id ? payload.data : demand,
      );
      return {
        ...state,
        demands: updatedDemands,
        isLoading: false,
      };
    }),
  ),
  withEffects((_, events = inject(Events), questionAdapter = inject<DemandPort>(DEMAND_PORT)) => {
    return {
      ...demandRetrievalEffect(events, questionAdapter),
      ...demandCreateEffect(events, questionAdapter),
      ...demandDeleteEffect(events, questionAdapter),
      ...demandUpdateEffect(events, questionAdapter),
    };
  }),
);

export type demandStore = InstanceType<typeof demandStore>;
