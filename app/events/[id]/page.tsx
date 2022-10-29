import { Event } from '../events.interface';
import Image from 'next/image';

async function getEventById(id: string) {
  return fetch(`http://localhost:3000/api/events/${id}`).then((res) =>
    res.json()
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const event = await (getEventById(params.id) as Promise<Event>);

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
      <div className=' py-5 '>
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
            <dd className='mt-3 text-sm text-gray-900 w-3/4'>
              <ul role='list' className='grid grid-cols-3 gap-2'>
                {event.owners.map((owner, index) => (
                  <li
                    key={owner.name + index}
                    className=' w-48 flex items-center justify-between py-3 pl-3 pr-4 text-sm divide-y divide-gray-200 rounded-md border border-gray-200 hover:cursor-pointer'
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
      </div>
    </div>
  );
}
