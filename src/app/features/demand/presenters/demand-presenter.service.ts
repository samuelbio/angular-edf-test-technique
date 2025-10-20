import { computed, inject, Injectable } from '@angular/core';
import { injectDispatch } from '@ngrx/signals/events';
import { demandRetrievalEvent } from '../../../core/use-cases/demand-retrieval/demandRetrievalEvent';
import { demandStore } from '../../../core/store/demandStore';
import { demandCreateEvent } from '../../../core/use-cases/demand-create/demandCreateEvent';
import { DemandCommand } from '../../../core/model/demand';
import { demandDeleteEvent } from '../../../core/use-cases/demand-delete/demandDeleteEvent';
import { demandUpdateEvent } from '../../../core/use-cases/demand-update/demandUpdateEvent';

@Injectable({ providedIn: 'any' })
export class DemandPresenter {
  private readonly demandStore = inject(demandStore);
  private readonly retrievalDemandDispatcher = injectDispatch(demandRetrievalEvent);
  private readonly createDemandDispatcher = injectDispatch(demandCreateEvent);
  private readonly deleteDemandDispatcher = injectDispatch(demandDeleteEvent);
  private readonly updateDemandDispatcher = injectDispatch(demandUpdateEvent);

  readonly demandList = computed(() => this.demandStore.demands());
  readonly isLoading = computed(() => this.demandStore.isLoading());

  requestDemand(): void {
    this.retrievalDemandDispatcher.demandRequested();
  }

  createDemand(payload: DemandCommand): void {
    this.createDemandDispatcher.demandCreateRequested(payload);
  }

  updateDemand(id: string, payload: DemandCommand): void {
    this.updateDemandDispatcher.demandUpdateRequested({ id, data: payload });
  }

  deleteDemand(demandId: string): void {
    this.deleteDemandDispatcher.demandDeleteRequested({ id: demandId });
  }
}
