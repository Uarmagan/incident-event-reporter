'use client';

import { Event } from '../types/events.interface';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateEvent } from '../hooks/useEvents';

const domains = {
  electrical: ['blown breaker', 'damaged wire', 'water damage'],
  Mechanical: ['broken pipe', 'fire', 'cracked machine'],
  Software: ['production incedent', 'servers down', 'database error'],
};

const statusList = ['Ready', 'In Progress', 'Fixed'];

export const EventEdit = (prop: {
  event: Event;
  setEditMode: (editMode: boolean) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateEvent, {
    onMutate: (data) => {
      queryClient.setQueryData(['events', event.id], data);
      prop.setEditMode(false);
    },
    onSuccess: () => {
      // trigger the old data to be invalidated
      queryClient.invalidateQueries(['events', event.id]);
      prop.setEditMode(false);
    },
  });

  const UpdateEvent = (e: any) => {
    e.preventDefault();
    mutate(event);
  };
  const removeOwner = (index: number) => {
    event.owners.splice(index, 1);
    setEvent({ ...event });
  };

  const [event, setEvent] = useState(prop.event);
  const [newOwner, setNewOwner] = useState('');
  const handleChange = (e: any) => {
    e.preventDefault();
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleAddOwner = () => {
    const randomUuid = self.crypto.randomUUID();
    event.owners.push({
      name: newOwner,
      avatar: `https://avatars.dicebear.com/api/avataaars/${randomUuid}.svg`,
    });
    setNewOwner('');
  };

  return (
    <form
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'
      onSubmit={UpdateEvent}
    >
      <div className='flex flex-col sm:col-span-1'>
        <label htmlFor='domain' className='text-sm font-medium text-gray-500'>
          Domain
        </label>
        <select
          name='domain'
          className='mt-1 block w-2/4 rounded-md border-gray-300 pl-3  pr-10 text-base '
          defaultValue={event.domain}
          onChange={handleChange}
        >
          {Object.keys(domains).map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label
          htmlFor='subDomain'
          className='text-sm font-medium text-gray-500'
        >
          Subdomain
        </label>
        <select
          name='subDomain'
          className='mt-1 block w-2/4 rounded-md border-gray-300 pl-3  pr-10 text-base '
          defaultValue={event.subDomain}
          onChange={handleChange}
        >
          {domains[event.domain].map((subDomain) => (
            <option key={subDomain} value={subDomain}>
              {subDomain}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label htmlFor='status' className='text-sm font-medium text-gray-500'>
          Status
        </label>
        <select
          name='status'
          className='mt-1 block w-2/4 rounded-md border-gray-300 pl-3  pr-10 text-base '
          defaultValue={event.status}
          onChange={handleChange}
        >
          {statusList.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label
          htmlFor='createdOn'
          className='text-sm font-medium text-gray-500'
        >
          Created On
        </label>
        <input
          className='w-2/4 border-2 pl-1 text-sm text-gray-900'
          name='createdOn'
          value={event.createdDate}
          disabled
        />
      </div>
      <div className='flex flex-col sm:col-span-2'>
        <label
          htmlFor='description'
          className='text-sm font-medium text-gray-500'
        >
          Description
        </label>
        <textarea
          onChange={handleChange}
          name='description'
          className='mt-1 text-sm text-gray-900'
        >
          {event.description}
        </textarea>
      </div>
      <div className='sm:col-span-2'>
        <fieldset>
          <legend className='text-lg font-medium text-gray-900'>Owners</legend>
          <div className='mt-4 divide-y divide-gray-200 border-t border-b border-gray-200'>
            {event.owners.map((owner, index) => (
              <div
                key={owner.name + index}
                className='relative flex items-start py-4'
              >
                <div className='min-w-0 flex-1 text-sm'>
                  <p className='select-none font-medium text-gray-700'>
                    {owner.name}
                  </p>
                </div>
                <div className='ml-3 flex h-5 items-center'>
                  <button
                    onClick={() => removeOwner(index)}
                    type='button'
                    className='rounded border-gray-300 bg-red-600 px-2 text-white'
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className='flex justify-between py-3'>
              <input
                value={newOwner}
                onChange={(e) => setNewOwner(e.target.value)}
                className='border-2 pl-3'
              />
              <button
                type='button'
                className=' rounded-lg bg-blue-600 px-2 text-white'
                onClick={handleAddOwner}
              >
                Add Owner
              </button>
            </div>
          </div>
        </fieldset>
      </div>

      <button
        type='submit'
        className='w-20 items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75'
      >
        Update
      </button>
    </form>
  );
};
