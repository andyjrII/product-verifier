import { useState } from 'react';
import ScanResultModal from '../components/ScanResultModal';
import DBImage from '../assets/db-image.jpg';
import ScannedImage from '../assets/scanned-img.jpeg';

const ScanHistoryPage = () => {
  const [scans] = useState([
    {
      id: 1,
      productName: 'Product B',
      status: 'mismatch',
      scannedImage: ScannedImage,
      databaseImage: DBImage,
      errorMessage: 'Verbiage mismatch',
      timestamp: 'Aug 26, 2025 14:30',
    },
    {
      id: 2,
      productName: 'Product A',
      status: 'match',
      scannedImage: DBImage,
      databaseImage: DBImage,
      timestamp: 'Aug 25, 2025 13:10',
    },
  ]);

  const [selectedScan, setSelectedScan] = useState(null);

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>📚 Scan History</h2>
      <div className='list-group'>
        {scans.map((scan) => (
          <div
            key={scan.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <div>
              <strong>{scan.productName}</strong>
              <br />
              <small>
                {scan.timestamp} • {scan.status}
              </small>
            </div>
            <button
              className='btn btn-primary'
              onClick={() => setSelectedScan(scan)}
            >
              View Result
            </button>
          </div>
        ))}
      </div>

      {selectedScan && (
        <ScanResultModal
          scan={selectedScan}
          onClose={() => setSelectedScan(null)}
        />
      )}
    </div>
  );
};

export default ScanHistoryPage;
