export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('http://localhost:3000/api/events');
  return res.json();
};

export const getEventByID = async (id: string): Promise<Event> => {
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  return res.json();
};

export const updateEvent = async ({ id, ...updatedUser }: any) => {
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

export const deleteEvent = async ({ id, ...updatedUser }: any) => {
  // return api.put(`/api/users/${id}`, updatedUser).then(({ data }) => data);
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  const res = await fetch(
    `http://localhost:3000/api/events/${id}`,
    requestOptions
  );
  return res.json();
};

export const createEvent = async (event: Event) => {
  const newDate = new Date();
  const createdDate =
    (newDate.getMonth() > 8
      ? newDate.getMonth() + 1
      : '0' + (newDate.getMonth() + 1)) +
    '/' +
    (newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate()) +
    '/' +
    newDate.getFullYear();

  const eventWithDate = { ...event, createdDate };
  console.log('evveeent ', eventWithDate);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventWithDate),
  };
  const res = await fetch(`http://localhost:3000/api/events`, requestOptions);

  return res.json();
};
