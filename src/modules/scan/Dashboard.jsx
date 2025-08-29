import { useState } from 'react';
import { Link } from 'react-router-dom';
import CameraFeed from './components/CameraFeed';
import RecentScansList from './components/RecentScansList';
import ResultModal from './components/ResultModal';
import scannedImage from '../../assets/scanned-img.jpeg';
import dbImage from '../../assets/db-image.jpg';
import { PiScanThin } from 'react-icons/pi';

const Dashboard = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latestResult, setLatestResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedScan, setSelectedScan] = useState(null);

  const [scans, setScans] = useState([
    {
      id: 1,
      productName: 'Eva Water',
      label: 'Product A',
      status: 'match',
      scannedImage: scannedImage,
      databaseImage: scannedImage,
      errorMessage: [],
      timestamp: '15 Aug 2025, 16:14',
    },
    {
      id: 2,
      productName: 'Ragolis',
      label: 'Product B',
      status: 'mismatch',
      scannedImage: scannedImage,
      databaseImage: dbImage,
      errorMessage: ['Barcode mismatch'],
      timestamp: '5 Aug 2025, 11:14',
    },
    {
      id: 3,
      productName: 'Coke',
      status: 'match',
      scannedImage: dbImage,
      databaseImage: scannedImage,
      errorMessage: [],
      timestamp: '25 Aug 2025, 13:10',
    },
    {
      id: 4,
      productName: 'Rite Sausage Roll',
      status: 'mismatch',
      scannedImage: scannedImage,
      databaseImage: dbImage,
      errorMessage: ['Ingredients list mismatch', 'Verbiage mismatch'],
      timestamp: '27 Aug 2025, 09:45',
    },
  ]);

  const handleCapture = (imgSrc) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCameraActive(false);

      const result = {
        status: 'mismatch',
        productName: 'LaCasera',
        scannedImage: imgSrc,
        databaseImage: dbImage,
        errorMessage: ['Verbiage mismatch'],
        timestamp: new Date().toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setLatestResult(result);

      setScans((prev) => [{ ...result, label: result.productName }, ...prev]);

      setSelectedScan(result);
      setShowResultModal(true);
    }, 2000);
  };

  return (
    <div className='px-4 py-6 space-y-12'>
      <h2 className='text-3xl font-semibold'>
        Scan <span className='float-right'>📷</span>
      </h2>

      {!cameraActive ? (
        <div
          className='flex flex-col items-center justify-center w-full p-6 rounded-2xl bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 transition'
          onClick={() => setCameraActive(true)}
        >
          <PiScanThin className='text-9xl mb-2' />
          <p className='font-medium text-3xl'>Scan Product</p>
        </div>
      ) : (
        <div className='border-0 space-y-4'>
          <h3 className='font-medium text-2xl text-teal-500'>📡 Scanning...</h3>
          <CameraFeed
            onCapture={handleCapture}
            onCancel={() => setCameraActive(false)}
            loading={loading}
          />
        </div>
      )}

      <div className='p-6 rounded-2xl border-gray-200 shadow-gray-600 shadow-2xl'>
        <h3 className='font-medium text-3xl mb-6 px-3'>Recent Scans</h3>
        <RecentScansList
          scans={scans.slice(0, 5)}
          onSelectScan={(scan) => {
            setSelectedScan(scan);
            setShowResultModal(true);
          }}
        />

        <div className='mt-6 px-3 border-t pt-8'>
          <Link
            to='/history'
            className='text-blue-600 text-2xl hover:underline'
          >
            View Full History →
          </Link>
        </div>
      </div>

      {showResultModal && selectedScan && (
        <ResultModal
          result={selectedScan}
          onClose={() => {
            setSelectedScan(null);
            setShowResultModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
