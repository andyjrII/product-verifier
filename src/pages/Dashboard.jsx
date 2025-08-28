import { useState } from 'react';
import CameraFeed from '../components/CameraFeed';
import RecentScansList from '../components/RecentScansList';
import MatchModal from '../modules/scan/components/MatchModal';
import MismatchDisplay from '../components/MismatchDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dbImage from '../assets/db-image.jpg';
import './Dashboard.css';

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
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

      toast.success('✅ Scan completed!', {
        position: 'top-center',
        autoClose: 2000,
      });

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
    <div className='container dashboard mt-2'>
      <h5>Scan</h5>
      {/* Scan */}
      <div className='mb-4'>
        {!cameraActive ? (
          <div
            className='text-center scan-container mx-auto'
            role='button'
            onClick={() => setCameraActive(true)}
          >
            <span className='scan-icon'>📷</span>
            <p className='scan-text text-secondary'>
              Click here to start your scan
            </p>
          </div>
        ) : (
          <div className='card p-4 shadow-sm'>
            <h5>📷 Scanning...</h5>
            <div className='row'>
              <CameraFeed onCapture={handleCapture} />
              <button
                className='btn btn-outline-danger'
                onClick={() => setCameraActive(false)}
              >
                ❌ Cancel
              </button>
            </div>
            {loading && (
              <div className='alert alert-info mt-3'>
                Processing scan... please wait.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Latest Result */}
      <div className='card p-4 mb-4 result-container'>
        <h5>📊 Latest Scan Result</h5>
        {!latestResult ? (
          <div className='text-muted'>No scan yet</div>
        ) : latestResult.status === 'match' ? (
          <MatchModal productName={latestResult.productName} />
        ) : (
          <MismatchDisplay
            scannedImage={latestResult.scannedImage}
            databaseImage={latestResult.databaseImage}
            errorMessage={latestResult.errorMessage}
          />
        )}
      </div>

      {/* Recent History Preview */}
      <div className='card p-4 recent-container'>
        <h5>🕓 Recent Scans</h5>
        <RecentScansList scans={scans.slice(0, 5)} />
        <div className='text-end mt-2'>
          <a href='/history' className='btn btn-link'>
            📚 View Full History →
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DashboardPage;
