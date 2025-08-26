import { useState } from 'react';
import CameraFeed from '../components/CameraFeed';
import RecentScansList from '../components/RecentScansList';
import MatchModal from '../components/MatchModal';
import MismatchDisplay from '../components/MismatchDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dbImage from '../assets/db-image.jpg';

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
      setCameraActive(false); // ✅ Close camera after scan

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
    <div className='container mt-5'>
      <h2 className='mb-4'>📦 Product Scanner</h2>

      {/* Scan Trigger */}
      <div className='mb-4'>
        {!cameraActive ? (
          <button
            className='btn btn-primary w-100'
            onClick={() => setCameraActive(true)}
          >
            📷 Start Scan
          </button>
        ) : (
          <div className='card p-4 shadow-sm'>
            <h5>📷 Scanning...</h5>
            <div className='row'>
              <CameraFeed onCapture={handleCapture} />
              <button
                className='btn btn-md btn-outline-danger w-25'
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
      <div className='card p-4 shadow-sm mb-4'>
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
      <div className='card p-4 shadow-sm'>
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
