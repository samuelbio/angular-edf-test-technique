export interface Demand {
  id: string;
  projectName: string;
  username: string;
  contract: number;
  status?: Status;
}

export type Status = 'pending' | 'approved' | 'rejected';

export type DemandCommand = Omit<Demand, 'id' | 'status'>;
