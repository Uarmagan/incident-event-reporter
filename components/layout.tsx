import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '../utils/tailwind.util';

export default function Layout({ children }: any) {
  const numberOfEvents = 5;

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: false },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    {
      name: 'Events',
      icon: FolderIcon,
      href: '/events',
      count: numberOfEvents,
      current: true,
    },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    {
      name: 'Documents',
      icon: InboxIcon,
      href: '#',
      count: 12,
      current: false,
    },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
  ];
  return (
    <html lang='en'>
      <head>
        <title>Next.js</title>
      </head>
      <body className='mx-auto h-screen'>
        <div className='grid h-full grid-cols-[1fr_4fr] gap-1'>
          <div className='flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4'>
            <div className='flex flex-shrink-0 items-center px-4'>
              <h1 className='font-mono font-black tracking-widest text-gray-600'>
                Diamond Age
              </h1>
            </div>
            <div className='mt-5 flex flex-grow flex-col'>
              <nav
                className='flex-1 space-y-1 bg-white px-2'
                aria-label='Sidebar'
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center rounded-md px-2 py-3 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                    <span className='flex-1'>{item.name}</span>
                    {item.count ? (
                      <span
                        className={classNames(
                          item.current
                            ? 'bg-white'
                            : 'bg-gray-100 group-hover:bg-gray-200',
                          'ml-3 inline-block rounded-full py-0.5 px-3 text-xs font-medium'
                        )}
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <main role='main' className='w-full pt-1'>
            <div className='w-full px-5 pt-8'>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
