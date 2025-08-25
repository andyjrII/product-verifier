import { useState } from 'react';
import ScanButton from '../components/ScanButton';
import RecentScansList from '../components/RecentScansList';

const HomePage = () => {
  const [scans, setScans] = useState([
    { label: 'Product A', status: 'match' },
    { label: 'Product B', status: 'mismatch' },
  ]);

  const handleScan = () => {
    alert('Scan initiated!');
  };

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>📦 Product Verifier</h2>
      <ScanButton onClick={handleScan} />
      <RecentScansList scans={scans} />
    </div>
  );
};

export default HomePage;
