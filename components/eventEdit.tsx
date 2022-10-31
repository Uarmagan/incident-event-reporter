'use client';

import { Event } from '../types/events.interface';
import Image from 'next/image';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateEvent } from '../hooks/useEvents';

export const EventEdit = (prop: {
  event: Event;
  setEditMode: (editMode: boolean) => void;
}) => {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(updateEvent, {
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

  const [event, setEvent] = useState(prop.event);

  const handleChange = (e: any) => {
    e.preventDefault();
    setEvent({ ...event, [e.target.name]: e.target.value });
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
        <input
          className='mt-1 w-2/4 border-2 pl-1 text-sm text-gray-900'
          name='domain'
          value={event.domain}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label
          htmlFor='subDomain'
          className='text-sm font-medium text-gray-500'
        >
          Subdomain
        </label>
        <input
          className='mt-1 w-2/4 border-2 pl-1 text-sm text-gray-900'
          value={event.subDomain}
          name='subDomain'
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label htmlFor='status' className='text-sm font-medium text-gray-500'>
          Status
        </label>
        <input
          className='mt-1 w-2/4 border-2 pl-1 text-sm text-gray-900'
          name='status'
          value={event.status}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col sm:col-span-1'>
        <label
          htmlFor='createdOn'
          className='text-sm font-medium text-gray-500'
        >
          Created On
        </label>
        <input
          className='mt-1 w-2/4 border-2 pl-1 text-sm text-gray-900'
          name='createdOn'
          value={event.domain}
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
        <dt className='text-sm font-medium text-gray-500'>Owners</dt>
        <dd className='mt-3 w-3/4 text-sm text-gray-900'>
          <ul role='list' className='grid grid-cols-3 gap-2'>
            {event.owners.map((owner, index) => (
              <li
                key={owner.name + index}
                className=' flex w-48 items-center justify-between divide-y divide-gray-200 rounded-md border border-gray-200 py-3 pl-3 pr-4 text-sm hover:cursor-pointer'
              >
                <div className='flex items-center'>
                  <Image
                    className='inline-block h-9 w-9 rounded-full'
                    src={owner.avatar}
                    alt=''
                    width={36}
                    height={36}
                  />

                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                      {owner.name}
                    </p>
                    <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                      View profile
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>

      <button type='submit' className='h-10 w-32 bg-black text-white'>
        Update
      </button>
    </form>
  );
};
