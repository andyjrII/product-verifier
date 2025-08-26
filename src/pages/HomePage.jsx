import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScanButton from '../components/ScanButton';
import RecentScansList from '../components/RecentScansList';

const HomePage = () => {
  const [scans, setScans] = useState([
    { label: 'Product A', status: 'match' },
    { label: 'Product B', status: 'mismatch' },
  ]);

  const navigate = useNavigate();

  const handleScan = () => {
    navigate('/scan');
  };

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>📦 Product Label Scanner</h2>
      <ScanButton onClick={handleScan} />
      <RecentScansList scans={scans} />
    </div>
  );
};

export default HomePage;
