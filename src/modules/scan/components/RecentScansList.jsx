import './RecentScansList.css';

const RecentScansList = ({ scans, onSelectScan }) => {
  return (
    <div className='recent-scans-grid grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'>
      {scans.map((scan, index) => (
        <div
          key={index}
          role='button'
          onClick={() => onSelectScan(scan)}
          className='scan-card bg-white hover:bg-gray-100 p-3 flex items-start gap-3 cursor-pointer transition'
        >
          {/* Image */}
          <img
            src={scan.scannedImage}
            alt={scan.label}
            className='w-[50px] h-[50px] object-cover rounded-lg'
          />

          {/* Info row */}
          <div className='flex flex-1 justify-between items-center mt-2'>
            <span className='font-semibold text-2xl text-gray-600'>
              {scan.label}
            </span>
            <span
              className={`text-lg px-4 py-2 rounded-full text-white ${
                scan.status === 'match' ? 'bg-green-400' : 'bg-red-400'
              }`}
            >
              {scan.status === 'match' ? 'Match' : 'Mismatch'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentScansList;
