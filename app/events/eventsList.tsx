'use client';
import Link from 'next/link';
import { use } from 'react';
import { Event } from './events.interface';
import { EventsAvatars } from './eventsAvatars';
export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('http://localhost:3000/api/events');
  return res.json();
};

export default function EventsList() {
  const events: Event[] = use(getAllEvents());
  return (
    <>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>Events</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the Events at Diamond Age. Click an event to see more
            details.
          </p>
        </div>
        <Link href='/events/add' className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
          >
            Add Event
          </button>
        </Link>
      </div>
      <div className='mt-8 flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full py-2 align-middle '>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full border border-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Domain
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Owners
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {events.map(
                    ({
                      id,
                      domain,
                      subDomain,
                      owners,
                      status,
                      createdDate,
                    }) => (
                      <tr key={id} className='hover:bg-gray-100'>
                        <td className='whitespace-nowrap py-4 pr-3 text-sm'>
                          <Link
                            href={`/events/${id}`}
                            className='hover:bg-gray-200'
                          >
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className='font-medium text-gray-900'>
                                  {domain}
                                </div>
                                <div className='text-gray-500'>{subDomain}</div>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <Link
                            href={`/events/${id}`}
                            className='hover:bg-gray-200'
                          >
                            <EventsAvatars owners={owners} />
                          </Link>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                            {status}
                          </span>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <Link
                            href={`/events/${id}`}
                            className='hover:bg-gray-200'
                          >
                            {createdDate}
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
