import { Outlet } from 'react-router-dom';
import './Layout.css';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='main-container mx-auto'>
      <main className='container mb-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
