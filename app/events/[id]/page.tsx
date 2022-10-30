'use client';

import { Event, Status } from '../events.interface';
import Image from 'next/image';
import { use, useState } from 'react';
import { EventDetails } from './eventDetails';
import { PencilIcon } from '@heroicons/react/24/outline';

async function getEventById(id: string) {
  return fetch(`http://localhost:3000/api/events/${id}`).then((res) =>
    res.json()
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const event: Event = use(getEventById(params.id));
  const [editMode, setEditMode] = useState(false);
  const onClick = async () => {
    console.log('clicked');
  };
  return (
    <div>
      <button
        className=' mb-5 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm '
        onClick={onClick}
      >
        <PencilIcon
          className='-ml-1 mr-2 h-5 w-5 text-gray-400'
          aria-hidden='true'
        />
        <span>Edit</span>
      </button>
      <EventDetails event={event} />
      <div className='mt-10 flex space-x-5'>
        <button
          type='button'
          className='inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75'
          // disabled={statusSelected === event.status}
        >
          Save
        </button>
        <button
          type='button'
          className=' inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          delete
        </button>
      </div>
    </div>
  );
}
