import { Demand, DemandCommand } from '../model/demand';
import { Observable } from 'rxjs';

export interface DemandPort {
  fetchDemands(): Observable<Demand[]>;
  createDemand(demand: DemandCommand): Observable<Demand>;
  updateDemand(id: string, demand: DemandCommand): Observable<Demand>;
  deleteDemand(id: string): Observable<void>;
}
