'use client';
import { classNames } from '../utils/tailwind.util';
import { Owner } from '../types/events.interface';
import Image from 'next/image';
import { Tooltip } from './tooltip';

export const EventsAvatars = ({ owners }: { owners: Owner[] }) => {
  return (
    <Tooltip text={owners?.map(({ name }) => name).join(', ')}>
      <div className='flex -space-x-2 overflow-hidden'>
        {/* only show first three avatars */}
        {owners.slice(0, 3).map((owner: Owner, index) => (
          <Image
            src={owner.avatar}
            key={owner.name + index}
            className={classNames(
              'inline-block h-8 w-8 rounded-full ',
              `z-${index}`
            )}
            alt='avatar image'
            width={40}
            height={40}
          />
        ))}
        {owners.length > 3 && (
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-center font-semibold '>
            {owners.length - 3}+
          </div>
        )}
      </div>
    </Tooltip>
  );
};
