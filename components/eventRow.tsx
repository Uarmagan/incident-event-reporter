import { classNames } from '../utils/tailwind.util';
import Link from 'next/link';
import { Event } from '../types/events.interface';
import { EventsAvatars } from './eventsAvatars';
export const EventRow = ({ event }: { event: Event }) => {
  const { id, domain, subDomain, owners, status, createdDate } = event;
  return (
    <Link key={id} href={`/events/${id}`} className='hover:bg-gray-200'>
      <tr key={id} className='cursor-pointer hover:bg-gray-100'>
        <td className=' whitespace-nowrap py-4 pr-3 text-sm'>
          <div className='flex items-center'>
            <div className='ml-4'>
              <div className='font-medium text-gray-900'>{domain}</div>
              <div className='text-gray-500'>{subDomain}</div>
            </div>
          </div>
        </td>
        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
          <EventsAvatars owners={owners} />
        </td>
        <td className='whitespace-nowrap px-3 py-4 text-sm'>
          <span className='inline-flex rounded-full px-2 text-xs font-semibold leading-5'>
            {status}
          </span>
        </td>
        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
          {createdDate}
        </td>
      </tr>
    </Link>
  );
};
