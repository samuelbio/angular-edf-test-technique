import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../core/model/demand';

export interface StatusDisplay {
  label: string;
  color: string;
}

export const statusDisplayMap: Record<Status, StatusDisplay> = {
  pending: { label: 'En attente', color: 'bg-[#FEF0C7] text-[#92400E]' },
  approved: { label: 'Approuvée', color: 'bg-red-400 text-red-900' },
  rejected: { label: 'Rejetée', color: 'bg-red-400 text-red-500' },
};

@Pipe({
  name: 'statusPipe',
})
export class StatusPipe implements PipeTransform {
  transform(value: Status): StatusDisplay {
    return getStatusDisplay(value);
  }
}

export const getStatusDisplay = (status: Status): StatusDisplay => {
  return statusDisplayMap[status];
};
