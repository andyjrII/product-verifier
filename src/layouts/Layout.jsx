import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-3'>
        <Link className='navbar-brand' to='/'>
          LabelScan
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
