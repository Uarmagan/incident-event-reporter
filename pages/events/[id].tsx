import { PencilIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { EventDetails } from '../../components/eventDetails';
import { useEventById } from '../../hooks/useEvents';

export default function EventDetailPage(): JSX.Element {
  const { query } = useRouter();
  console.log('id ', query.id);
  const { data: event, isLoading } = useEventById(query.id);
  const [editMode, setEditMode] = useState(false);
  const onClick = async () => {
    console.log('clicked');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (event) {
    return (
      <div className='overflow-hidden sm:rounded-lg'>
        <div className='py-5 '>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Event Details
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Details on the event
          </p>
        </div>
        <div>
          <button
            className=' mb-5 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm '
            // onClick={onClick}
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
      </div>
    );
  }
}
