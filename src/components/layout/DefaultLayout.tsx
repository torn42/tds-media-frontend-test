import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { SIDEBAR_ITEMS } from '../../constants/navigation';

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen h-full bg-gray-100">
      <Sidebar items={SIDEBAR_ITEMS} />
      <main className="flex-1 flex flex-col min-w-0 ">
        <div className="px-4 py-6 md:px-8 grow">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
