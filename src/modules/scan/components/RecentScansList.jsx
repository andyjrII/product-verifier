const RecentScansList = ({ scans }) => {
  return (
    <div className='mt-6'>
      <h4 className='text-lg font-semibold mb-3'>Recent Scans</h4>
      <ul className='space-y-2'>
        {scans.map((scan, index) => (
          <li
            key={index}
            className='flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200'
          >
            <span className='text-gray-700 font-medium'>{scan.label}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                scan.status === 'match'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {scan.status === 'match' ? 'Match' : 'Mismatch'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentScansList;
