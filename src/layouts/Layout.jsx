import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div className='main-container mx-auto'>
      <nav className='navbar bg-primary navbar-dark px-3'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <Link className='navbar-brand d-flex align-items-center gap-2' to='/'>
            🏠 ProductScan
          </Link>

          <ul className='navbar-nav flex-row gap-3'>
            <li className='nav-item'>
              <Link
                className={`nav-link text-white ${
                  location.pathname === '/' ? 'fw-bold' : ''
                }`}
                to='/'
              >
                🏠 Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link text-white ${
                  location.pathname === '/history' ? 'fw-bold' : ''
                }`}
                to='/history'
              >
                📚 History
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className='container mt-4'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
