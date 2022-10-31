import { useQuery } from '@tanstack/react-query';
import { getAllEvents, getEventByID, updateEvent } from '../http/events';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEvents() {
  return useQuery(['allEvents'], () => getAllEvents());
}

export function useEventById(id: string) {
  return useQuery(['events', id], () => getEventByID(id), {
    enabled: !!id,
  });
}
