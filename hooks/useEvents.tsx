import { useQuery } from '@tanstack/react-query';
import { Event } from '../types/events.interface';
const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('http://localhost:3000/api/events');
  return res.json();
};

export function useEvents() {
  return useQuery(['allEvents'], () => getAllEvents());
}

export const getEventByID = async (id: string): Promise<Event> => {
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  return res.json();
};

export function useEventById(id: string) {
  return useQuery(['post', id], () => getEventByID(id), {
    enabled: !!id,
  });
}
