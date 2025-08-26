import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className='main-container mx-auto'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-3'>
        <Link className='navbar-brand' to='/'>
          ProductScan
        </Link>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/scan'>
            Scan
          </Link>
          <Link className='nav-link' to='/result'>
            Results
          </Link>
        </div>
      </nav>
      <main className='container mt-4'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
