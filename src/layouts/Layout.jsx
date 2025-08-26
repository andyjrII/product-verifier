import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className='main-container mx-auto'>
      <nav className='navbar bg-primary' data-bs-theme='dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            ProductScan
          </Link>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/scan'>
                  Scan
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/result'>
                  Results
                </Link>
              </li>
            </ul>
            <span className='navbar-text'>
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
      <main className='container mt-4'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
