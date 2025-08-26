import { useLocation, useNavigate } from 'react-router-dom';
import MatchModal from '../components/MatchModal';
import MismatchDisplay from '../components/MismatchDisplay';

export default function ResultPage() {
  const { state: result } = useLocation();
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className='container mt-4'>
        <div className='alert alert-warning'>
          No scan result found. Please scan a product first.
        </div>
        <button className='btn btn-primary' onClick={() => navigate('/scan')}>
          Go to Scan
        </button>
      </div>
    );
  }

  return (
    <div className='container mt-4'>
      <h3>📊 Scan Result</h3>
      {result.status === 'match' ? (
        <MatchModal productName={result.productName} />
      ) : (
        <MismatchDisplay
          scannedImage={result.scannedImage}
          databaseImage={result.databaseImage}
          errorMessage={result.errorMessage}
        />
      )}
      <button className='btn btn-secondary mt-4' onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
