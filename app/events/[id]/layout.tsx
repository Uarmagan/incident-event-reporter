export default function EventDetailLayout({ children }: any): JSX.Element {
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
      {children}
    </div>
  );
}
