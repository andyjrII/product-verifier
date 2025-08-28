import CameraFeed from '../components/CameraFeed';
import MismatchDisplay from '../components/MismatchDisplay';
import RecentScanList from '../components/RecentScansList';
import ScanResultModal from '../../history/components/ScanResultModal';
import useScan from '../hooks/useScan';

const Dashboard = () => {
  const {
    scannedImage,
    databaseImage,
    scanResult,
    recentScans,
    isModalOpen,
    handleScan,
    closeModal,
  } = useScan();

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>Label Scanner</h1>

      <CameraFeed onCapture={handleScan} />

      {scanResult && scanResult.status === 'mismatch' && (
        <div className='mt-6'>
          <MismatchDisplay
            scannedImage={scannedImage}
            databaseImage={databaseImage}
            errorMessage={scanResult.errorMessage}
          />
        </div>
      )}

      <div className='mt-10'>
        <h2 className='text-lg font-semibold text-gray-700 mb-4'>
          Recent Scans
        </h2>
        <RecentScanList scans={recentScans} />
      </div>

      <ScanResultModal
        isOpen={isModalOpen}
        onClose={closeModal}
        result={scanResult}
      />
    </div>
  );
};

export default Dashboard;
