import { useState } from 'react';
import CameraFeed from './components/CameraFeed';
import MatchCard from './components/MatchCard';
import MismatchCard from './components/MismatchCard';
import RecentScansList from './components/RecentScansList';
import ResultModal from './components/ResultModal';
import dbImage from '../../assets/db-image.jpg';
import { PiScanThin } from 'react-icons/pi';

const Dashboard = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latestResult, setLatestResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
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
      setShowResultModal(true);
    }, 2000);
  };

  return (
    <div className='px-4 py-6 space-y-6'>
      <h2 className='text-lg font-semibold'>📷 Scan</h2>

      {!cameraActive ? (
        <div
          className='flex flex-col items-center justify-center w-full p-6 rounded-2xl bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 transition'
          onClick={() => setCameraActive(true)}
        >
          <PiScanThin className='text-9xl mb-2' />
          <p className='font-medium text-2xl'>Scan Product</p>
        </div>
      ) : (
        <div className='p-4 border rounded-xl shadow space-y-4'>
          <h3 className='font-medium'>📡 Scanning...</h3>
          <CameraFeed
            onCapture={handleCapture}
            onCancel={() => setCameraActive(false)}
            loading={loading}
          />
        </div>
      )}

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

      <div className='p-4 border rounded-xl shadow'>
        <h3 className='font-medium'>🕓 Recent Scans</h3>
        <RecentScansList scans={scans.slice(0, 5)} />
        <div className='text-right mt-3'>
          <a href='/history' className='text-blue-600 hover:underline'>
            📚 View Full History →
          </a>
        </div>
      </div>

      {showResultModal && (
        <ResultModal
          result={latestResult}
          onClose={() => setShowResultModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
