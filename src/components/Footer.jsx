import { Link, useLocation } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { MdHome, MdHistory } from 'react-icons/md';

const Footer = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'text-black font-semibold' : 'text-gray-500';

  return (
    <nav className='fixed bottom-0 left-1/2 -translate-x-1/2 w-[400px] bg-white border-gray-200 shadow-gray-600 shadow-2xl z-50 px-8'>
      <div className='flex justify-between items-center px-8 py-3 relative'>
        {/* Home */}
        <Link
          to='/'
          className={`flex flex-col items-center text-sm ${isActive('/')}`}
        >
          <MdHome className='text-4xl' />
          <span>Home</span>
        </Link>

        {/* Scan */}
        <div className='flex flex-col items-center'>
          <Link
            to='/'
            className='bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transform transition hover:scale-105'
          >
            <FaCamera />
          </Link>
          <span className='text-xs text-gray-500 mt-1'>Scan</span>
        </div>

        {/* History */}
        <Link
          to='/history'
          className={`flex flex-col items-center text-sm ${isActive(
            '/history'
          )}`}
        >
          <MdHistory className='text-4xl' />
          <span>History</span>
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
