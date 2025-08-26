import './MismatchDisplay.css';

const MismatchDisplay = ({ scannedImage, databaseImage, errorMessage }) => {
  return (
    <div className='alert alert-danger mt-3 mismatch-display text-center'>
      <h5>❌ Mismatch Detected</h5>
      <p>
        <strong>Error:</strong> {errorMessage}
      </p>
      <div className='row mt-3'>
        <div className='col-md-6 text-center'>
          <p>Scanned Product</p>
          <img
            src={scannedImage}
            alt='Scanned'
            className='img-fluid rounded shadow'
          />
        </div>
        <div className='col-md-6 text-center'>
          <p>Database Product</p>
          <img
            src={databaseImage}
            alt='Database'
            className='img-fluid rounded shadow'
          />
        </div>
      </div>
    </div>
  );
};

export default MismatchDisplay;
