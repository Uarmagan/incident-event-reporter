'use client';

import { Event } from '../events.interface';
import Image from 'next/image';

export const EventDetails = ({ event }: { event: Event }) => {
  return (
    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
      <button onClick={() => console.log('lksdfjlks')}>dsfsfdsf</button>
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
        <dd className='mt-1 text-sm text-gray-900'>
          <dd className='mt-1 text-sm text-gray-900'>{event.status}</dd>

          {/* <label
        htmlFor='location'
        className='block text-sm font-medium text-gray-700'
      >
        Location
      </label>
      <select
        id='location'
        name='location'
        className='mt-1 block w-32 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        defaultValue={statusSelected}
        onChange={(e) => setStatusSelected(e.target.value as Status)}
      >
        <option>Active</option>
        <option>In Progress</option>
        <option>Fixed</option>
      </select> */}
        </dd>
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
    </dl>
  );
};
