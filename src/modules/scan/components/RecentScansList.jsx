const RecentScansList = ({ scans }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
      {scans.map((scan, index) => (
        <div
          key={index}
          className='bg-white border rounded p-3 shadow-sm flex flex-col items-center'
        >
          <span
            className={`text-xs px-2 py-1 rounded ${
              scan.status === 'match'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {scan.status}
          </span>
          <p className='mt-2 text-sm text-gray-700'>{scan.label}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentScansList;
