const RecentScansList = ({ scans, onSelectScan }) => {
  return (
    <div className='recent-scans-grid grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'>
      {scans.map((scan, index) => (
        <div
          key={index}
          role='button'
          onClick={() => onSelectScan(scan)}
          className='scan-card bg-white hover:bg-gray-100 py-3 px-2 flex items-center gap-3 cursor-pointer transition'
        >
          {/* Image */}
          <img
            src={scan.scannedImage}
            alt={scan.productName}
            className='w-[60px] h-[60px] object-cover rounded-lg'
          />

          {/* Info row */}
          <div className='flex flex-1 justify-between items-center'>
            <div className='flex flex-col'>
              <span className='font-semibold text-2xl text-gray-600'>
                {scan.productName}
              </span>
              <span className='text-md text-gray-400'>{scan.timestamp}</span>
            </div>

            <span
              className={`text-lg px-4 py-2 rounded-full text-white ${
                scan.status === 'match' ? 'bg-green-500' : 'bg-red-500'
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
