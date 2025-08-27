import { Link, useLocation } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { MdHome, MdHistory } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  return (
    <nav className='footer-nav'>
      <div className='footer-inner'>
        {/* Home */}
        <Link
          to='/'
          className={`footer-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <MdHome className='footer-icon' />
          <span className='footer-label'>Home</span>
        </Link>

        {/* Scan */}
        <div className='scan-wrapper'>
          <Link to='/' className='scan-button' role='button'>
            <FaCamera />
          </Link>
          <span className='scan-label'>Scan</span>
        </div>

        {/* History */}
        <Link
          to='/history'
          className={`footer-item ${
            location.pathname === '/history' ? 'active' : ''
          }`}
        >
          <MdHistory className='footer-icon' />
          <span className='footer-label'>History</span>
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
