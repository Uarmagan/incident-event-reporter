export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('http://localhost:3000/api/events');
  return res.json();
};

export const getEventByID = async (id: string): Promise<Event> => {
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  return res.json();
};

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
