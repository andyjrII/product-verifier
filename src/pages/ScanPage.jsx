import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CameraFeed from '../components/CameraFeed';

export default function ScanPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCapture = (imgSrc) => {
    setLoading(true);

    // Simulate scan logic
    setTimeout(() => {
      setLoading(false);

      // Simulated result
      const result = {
        status: 'mismatch',
        productName: 'Protein Bar X',
        scannedImage: imgSrc,
        databaseImage: '/images/database.jpg',
        errorMessage: 'Verbiage mismatch',
      };

      navigate('/result', { state: result });
    }, 2000);
  };

  return (
    <div className='container mt-4'>
      <h3>📷 Scan Product Label</h3>
      <CameraFeed onCapture={handleCapture} />
      {loading && (
        <div className='alert alert-info mt-3'>
          Processing scan... please wait.
        </div>
      )}
    </div>
  );
}
