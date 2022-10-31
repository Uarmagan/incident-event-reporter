import { Status } from '../types/events.interface';

export function getBadgeColor(status: Status): string {
  if (status === 'Ready') {
    return 'bg-blue-100 text-blue-800';
  }
  if (status === 'In Progress') {
    return 'bg-yellow-100 text-yellow-800';
  }
  if (status === 'Fixed') {
    return 'bg-green-100 text-green-800';
  } else return 'bg-gray-500';
}
