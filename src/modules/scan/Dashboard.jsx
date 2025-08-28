import { useState } from 'react';
import CameraFeed from './components/CameraFeed';
import MatchCard from './components/MatchCard';
import MismatchCard from './components/MismatchCard';
import RecentScansList from './components/RecentScansList';
import dbImage from '../../assets/db-image.jpg';

const Dashboard = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latestResult, setLatestResult] = useState(null);
  const [scans, setScans] = useState([
    { label: 'Product A', status: 'match' },
    { label: 'Product B', status: 'mismatch' },
  ]);

  const handleCapture = (imgSrc) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCameraActive(false);

      const result = {
        status: 'mismatch',
        productName: 'Protein Bar X',
        scannedImage: imgSrc,
        databaseImage: dbImage,
        errorMessage: 'Verbiage mismatch',
      };

      setLatestResult(result);
      setScans((prev) => [
        { label: result.productName, status: result.status },
        ...prev,
      ]);
    }, 2000);
  };

  return (
    <div className='px-4 py-6 space-y-6'>
      <h2 className='text-lg font-semibold'>📷 Scan</h2>

      {/* Scan Section */}
      {!cameraActive ? (
        <div
          className='flex flex-col items-center justify-center p-6 border rounded-xl shadow cursor-pointer hover:shadow-md transition'
          onClick={() => setCameraActive(true)}
        >
          <span className='text-6xl'>📷</span>
          <p className='text-gray-500 mt-2'>Click here to start your scan</p>
        </div>
      ) : (
        <div className='p-4 border rounded-xl shadow space-y-4'>
          <h3 className='font-medium'>📡 Scanning...</h3>
          <CameraFeed onCapture={handleCapture} />
          <button
            className='px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
            onClick={() => setCameraActive(false)}
          >
            ❌ Cancel
          </button>
          {loading && (
            <div className='mt-3 p-3 bg-blue-50 text-blue-700 rounded'>
              Processing scan... please wait.
            </div>
          )}
        </div>
      )}

      {/* Latest Result */}
      <div className='p-4 border rounded-xl shadow'>
        <h3 className='font-medium'>📊 Latest Scan Result</h3>
        {!latestResult ? (
          <p className='text-gray-400'>No scan yet</p>
        ) : latestResult.status === 'match' ? (
          <MatchCard productName={latestResult.productName} />
        ) : (
          <MismatchCard {...latestResult} />
        )}
      </div>

      {/* Recent History */}
      <div className='p-4 border rounded-xl shadow'>
        <h3 className='font-medium'>🕓 Recent Scans</h3>
        <RecentScansList scans={scans.slice(0, 5)} />
        <div className='text-right mt-3'>
          <a href='/history' className='text-blue-600 hover:underline'>
            📚 View Full History →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
