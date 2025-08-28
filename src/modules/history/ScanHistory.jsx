import { useState } from 'react';
import ScanResultModal from './components/ScanResultModal';
import DBImage from '../../assets/db-image.jpg';
import ScannedImage from '../../assets/scanned-img.jpeg';

const ScanHistory = () => {
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
    <div className='max-w-lg mx-auto mt-8 px-4'>
      <h2 className='text-xl font-bold mb-4'>📚 Scan History</h2>

      <div className='space-y-3'>
        {scans.map((scan) => (
          <div
            key={scan.id}
            className='flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition'
          >
            <div>
              <p className='font-semibold text-gray-800'>{scan.productName}</p>
              <p className='text-sm text-gray-500'>
                {scan.timestamp} •{' '}
                <span
                  className={`font-medium ${
                    scan.status === 'match' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {scan.status}
                </span>
              </p>
            </div>

            <button
              onClick={() => setSelectedScan(scan)}
              className='px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition'
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

export default ScanHistory;
