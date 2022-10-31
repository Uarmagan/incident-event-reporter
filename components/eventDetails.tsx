'use client';

import { Event } from '../types/events.interface';
import { OwnerItem } from './ownerItem';

export const EventDetails = ({ event }: { event: Event }) => {
  return (
    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
      <div className='sm:col-span-1'>
        <dt className='text-sm font-medium text-gray-500'>Domain</dt>
        <dd className='mt-1 text-sm text-gray-900'>{event.domain}</dd>
      </div>
      <div className='sm:col-span-1'>
        <dt className='text-sm font-medium text-gray-500'>Subdomain</dt>
        <dd className='mt-1 text-sm text-gray-900'>{event.subDomain}</dd>
      </div>
      <div className='sm:col-span-1'>
        <dt className='text-sm font-medium text-gray-500'>Status</dt>

        <dd className='mt-1 text-sm text-gray-900'>{event.status}</dd>
      </div>
      <div className='sm:col-span-1'>
        <dt className='text-sm font-medium text-gray-500'>Created On</dt>
        <dd className='mt-1 text-sm text-gray-900'>{event.createdDate}</dd>
      </div>
      <div className='sm:col-span-2'>
        <dt className='text-sm font-medium text-gray-500'>Description</dt>
        <dd className='mt-1 text-sm text-gray-900'>{event.description}</dd>
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
                <OwnerItem owner={owner} />
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
};
