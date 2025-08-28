import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='mx-auto max-w-[400px] min-h-screen flex flex-col'>
      {/* Main content */}
      <main className='flex-1 mb-20 px-4'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
