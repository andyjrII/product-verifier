import { useState } from 'react';
import ResultModal from '../scan/components/ResultModal';
import DBImage from '../../assets/db-image.jpg';
import ScannedImage from '../../assets/scanned-img.jpeg';

const ScanHistory = () => {
  const [scans] = useState([
    {
      id: 1,
      productName: 'Eva Water',
      status: 'mismatch',
      scannedImage: ScannedImage,
      databaseImage: DBImage,
      errorMessage: ['Verbiage mismatch'],
      timestamp: '26 Aug 2025, 14:30',
    },
    {
      id: 2,
      productName: 'LaCasera',
      status: 'match',
      scannedImage: DBImage,
      databaseImage: DBImage,
      errorMessage: [],
      timestamp: '25 Aug 2025, 13:10',
    },
    {
      id: 3,
      productName: 'Coke',
      status: 'match',
      scannedImage: DBImage,
      databaseImage: ScannedImage,
      errorMessage: [],
      timestamp: '25 Aug 2025, 13:10',
    },
    {
      id: 4,
      productName: 'Rite Sausage Roll',
      status: 'mismatch',
      scannedImage: ScannedImage,
      databaseImage: DBImage,
      errorMessage: ['Ingredients list mismatch', 'Verbiage mismatch'],
      timestamp: '27 Aug 2025, 09:45',
    },
    {
      id: 5,
      productName: 'Bigi Apple',
      status: 'match',
      scannedImage: DBImage,
      databaseImage: DBImage,
      errorMessage: [],
      timestamp: '28 Aug 2025, 11:20',
    },
    {
      id: 6,
      productName: 'Nestlé Pure Life',
      status: 'mismatch',
      scannedImage: ScannedImage,
      databaseImage: DBImage,
      errorMessage: ['Barcode mismatch'],
      timestamp: '29 Aug 2025, 14:05',
    },
  ]);

  const [selectedScan, setSelectedScan] = useState(null);

  return (
    <div className='max-w-2xl mx-auto mt-6 px-6'>
      <h2 className='text-3xl font-semibold'>
        Scan History <span className='float-right'>📚</span>
      </h2>

      <div className='space-y-6 mt-12'>
        {scans.map((scan) => (
          <div
            key={scan.id}
            className={`scan-card flex items-center justify-between border-gray-200 shadow-gray-300 shadow-md rounded-xl p-5 hover:shadow-md transition group ${
              scan.status === 'match'
                ? 'bg-green-200 hover:shadow-green-400'
                : 'bg-red-200 hover:shadow-red-400'
            }`}
            role='button'
            onClick={() => setSelectedScan(scan)}
          >
            <div className='flex items-center gap-4'>
              <img
                src={scan.scannedImage}
                alt={scan.productName}
                className='w-[60px] h-[60px] object-cover rounded-lg'
              />
              <div>
                <p
                  className={`text-2xl font-semibold group-hover:text-blue-600 transition  ${
                    scan.status === 'match' ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {scan.productName}
                </p>
                <p className='text-sm text-gray-500'>{scan.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedScan && (
        <ResultModal
          result={selectedScan}
          onClose={() => setSelectedScan(null)}
        />
      )}
    </div>
  );
};

export default ScanHistory;
