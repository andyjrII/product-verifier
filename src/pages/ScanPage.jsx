import { useState } from 'react';
import CameraFeed from '../components/CameraFeed';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCapture = (imgSrc) => {
    setLoading(true);
    setImage(imgSrc);

    // Simulate scanning process
    setTimeout(() => {
      setLoading(false);
      alert('Scan complete! (Next: compare with database)');
    }, 2000);
  };

  return (
    <div className='container mt-4'>
      <h3 className='mb-3'>📷 Scan Product Label</h3>
      <CameraFeed onCapture={handleCapture} />
      {loading && (
        <div className='alert alert-info mt-3'>
          Processing scan... please wait.
        </div>
      )}
      {image && !loading && (
        <div className='mt-3'>
          <h5>Captured Image:</h5>
          <img
            src={image}
            alt='Scanned label'
            className='img-fluid rounded shadow'
          />
        </div>
      )}
    </div>
  );
};

export default ScanPage;
