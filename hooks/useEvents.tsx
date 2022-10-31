import { useQuery } from '@tanstack/react-query';
import { Event } from '../types/events.interface';
const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('http://localhost:3000/api/events');
  return res.json();
};

export function useEvents() {
  return useQuery(['allEvents'], () => getAllEvents());
}

const getEventByID = async (id: string): Promise<Event> => {
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  return res.json();
};

export function useEventById(id: string) {
  return useQuery(['events', id], () => getEventByID(id), {
    enabled: !!id,
  });
}

export const updateEvent = async ({ id, ...updatedUser }: any) => {
  // return api.put(`/api/users/${id}`, updatedUser).then(({ data }) => data);
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...updatedUser }),
  };
  const res = await fetch(
    `http://localhost:3000/api/events/${id}`,
    requestOptions
  );
  return res.json();
};
