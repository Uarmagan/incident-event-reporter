import { useQuery } from '@tanstack/react-query';
import { getAllEvents, getEventByID } from '../http/events';
import { Event } from '../types/events.interface';

export function useEvents() {
  return useQuery(['allEvents'], () => getAllEvents());
}

export function useEventById(id: string) {
  return useQuery(['events', id], () => getEventByID(id), {
    enabled: !!id,
  });
}
