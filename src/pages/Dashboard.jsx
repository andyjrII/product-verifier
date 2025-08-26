import { useState } from 'react';
import CameraFeed from '../components/CameraFeed';
import RecentScansList from '../components/RecentScansList';
import MatchModal from '../components/MatchModal';
import MismatchDisplay from '../components/MismatchDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardPage = () => {
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
      toast.success('✅ Scan completed!', {
        position: 'top-center',
        autoClose: 2000,
      });

      const result = {
        status: 'mismatch',
        productName: 'Protein Bar X',
        scannedImage: imgSrc,
        databaseImage: '/images/database.jpg',
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
      <h2 className='mb-4'>📦 Product Label Scanner</h2>

      {/* Scan Section */}
      <div className='row mb-4'>
        <div className='col-md-6'>
          <div className='card p-4 shadow-sm'>
            <h5>📷 Scan Product Label</h5>
            <CameraFeed onCapture={handleCapture} />
            {loading && (
              <div className='alert alert-info mt-3'>
                Processing scan... please wait.
              </div>
            )}
          </div>
        </div>

        {/* Latest Result */}
        <div className='col-md-6'>
          <div className='card p-4 shadow-sm'>
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
        </div>
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
