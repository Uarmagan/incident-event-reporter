import { useState } from 'react';
import { domains, statusList } from '../../utils/staticData';
import { createEvent } from '../../http/events';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function AddEventPage() {
  const { replace } = useRouter();
  const domainsList = Object.keys(domains);
  const [event, setEvent] = useState<any>({
    name: '',
    domain: domainsList[0],
    status: statusList[0],
    owners: [],
  });

  const queryClient = useQueryClient();

  const addEvent = (e: any) => {
    e.preventDefault();
    mutate(event);
  };

  const [newOwner, setNewOwner] = useState('');
  const handleChange = (e: any) => {
    e.preventDefault();
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const removeOwner = (index: number) => {
    event.owners.splice(index, 1);
    setEvent({ ...event });
  };

  const handleAddOwner = () => {
    const randomUuid = self.crypto.randomUUID();
    event.owners.push({
      name: newOwner,
      avatar: `https://avatars.dicebear.com/api/avataaars/${randomUuid}.svg`,
    });
    setNewOwner('');
  };

  const { mutate } = useMutation(createEvent, {
    onMutate: (data) => {
      queryClient.setQueryData(['events'], data);
      replace('/events');
    },
    onSuccess: () => {
      // trigger the old data to be invalidated
      queryClient.invalidateQueries(['events', event.id]);
      replace('/events');
    },
  });

  return (
    <div>
      <div className='py-5 '>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Add Event
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Add the details of the event
        </p>
      </div>
      <div></div>
      <form
        className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'
        onSubmit={addEvent}
      >
        <div className='flex flex-col sm:col-span-1'>
          <label htmlFor='domain' className='text-sm font-medium text-gray-500'>
            Domain
          </label>
          <select
            name='domain'
            className='mt-1 block w-2/4 rounded-md border-gray-300 pl-3  pr-10 text-base '
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
            <legend className='text-lg font-medium text-gray-900'>
              Owners
            </legend>
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
          Post
        </button>
      </form>
    </div>
  );
}
