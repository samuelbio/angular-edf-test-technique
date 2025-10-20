import { DemandPort } from '../../ports/demandPort';
import { EMPTY, Observable, of } from 'rxjs';
import { Demand } from '../../model/demand';

export class FakeDemandAdapter implements DemandPort {
  demands: Demand[] = [];
  fetchDemands(): Observable<Demand[]> {
    return of(this.demands);
  }

  deleteDemand(id: string): Observable<void> {
    return EMPTY;
  }

  createDemand(payload: Demand): Observable<Demand> {
    this.demands.push(payload);
    return of(payload);
  }

  updateDemand(id: string, command: Demand): Observable<Demand> {
    return of({ ...command, id });
  }
}
