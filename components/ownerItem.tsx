import { Owner } from '../types/events.interface';
import Image from 'next/image';

export const OwnerItem = ({ owner }: { owner: Owner }) => {
  return (
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
  );
};
