import React from 'react';

const RecentScansList = ({ scans }) => {
  return (
    <div className='mt-4'>
      <h4>Recent Scans</h4>
      <ul className='list-group'>
        {scans.map((scan, index) => (
          <li
            key={index}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            {scan.label}
            <span
              className={`badge ${
                scan.status === 'match' ? 'bg-success' : 'bg-danger'
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
