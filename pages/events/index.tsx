//  @ts-nocheck
import Link from 'next/link';
import { useEvents } from '../../hooks/useEvents';
import { EventRow } from '../../components/eventRow';

export default function EventsPage(): JSX.Element {
  const { data: events, isLoading } = useEvents();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>Events</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the Events at your work site. Click an event to see
            more details.
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
                  {events?.map((event) => (
                    <EventRow event={event} key={event.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
