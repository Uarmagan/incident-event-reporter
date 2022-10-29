'use client';
import { classNames } from '../../utils/tailwind.util';
import { Owner } from './events.interface';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

export const EventsAvatars = ({ owners }: { owners: Owner[] }) => {
  return (
    <div
      data-tip={owners.map(({ name }) => name).join(', ')}
      className='flex -space-x-2 overflow-hidden'
    >
      {/* only show first three avatars */}
      {owners.slice(0, 3).map((owner: Owner, index) => (
        <Image
          src={owner.avatar}
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
        <div className='h-8 w-8 rounded-full bg-gray-100 text-center font-semibold flex items-center justify-center '>
          {owners.length - 3}+
        </div>
      )}
      <ReactTooltip />
    </div>
  );
};
