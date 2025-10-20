import { DemandPort } from '../../ports/demandPort';
import { delay, EMPTY, Observable, of } from 'rxjs';
import { Demand, DemandCommand, Status } from '../../model/demand';

export class LocalDemandAdapter implements DemandPort {
  fakeDemands: Demand[] = [
    {
      id: '1',
      projectName: 'Projet de travaux lorem ipsum',
      username: 'John Doe',
      contract: 1534885932,
      status: 'pending',
    },
  ];
  fetchDemands(): Observable<Demand[]> {
    return of(this.fakeDemands);
  }

  deleteDemand(id: string): Observable<void> {
    return of(undefined).pipe(delay(300));
  }

  createDemand(demand: Demand): Observable<Demand> {
    const statuses: Status[] = ['pending', 'approved', 'rejected'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const payload: Demand = {
      ...demand,
      status,
      id: Math.random().toString(36).substring(2, 9),
    };
    return of(payload).pipe(delay(300));
  }

  updateDemand(id: string, demand: DemandCommand): Observable<Demand> {
    return of({ id, ...demand, status: 'approved' } as Demand).pipe(delay(300));
  }
}
