import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

const ScanResultModal = ({ scan, onClose }) => {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (!scan) return;

    const timeout = setTimeout(() => {
      if (modalRef.current) {
        modalInstance.current = new Modal(modalRef.current);
        modalInstance.current.show();

        modalRef.current.addEventListener('hidden.bs.modal', onClose);
      }
    }, 0); // Wait for DOM to render

    return () => {
      clearTimeout(timeout);
      if (modalRef.current) {
        modalRef.current.removeEventListener('hidden.bs.modal', onClose);
      }
      if (modalInstance.current) {
        modalInstance.current.dispose();
        modalInstance.current = null;
      }
    };
  }, [scan, onClose]);

  if (!scan) return <></>;

  const {
    productName,
    status,
    scannedImage,
    databaseImage,
    errorMessage,
    timestamp,
  } = scan;
  const isMatch = status === 'match';

  return (
    <div
      className='modal fade'
      id='scanResultModal'
      tabIndex='-1'
      aria-labelledby='scanResultModalLabel'
      aria-hidden='true'
      ref={modalRef}
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='scanResultModalLabel'>
              Scan Result: {productName}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>

          <div className='modal-body'>
            <div className='text-center mb-3'>
              <span className={`badge ${isMatch ? 'bg-success' : 'bg-danger'}`}>
                {isMatch ? 'Match ✅' : 'Mismatch ❌'}
              </span>
            </div>

            <div className='row justify-content-center'>
              <div className='col-md-6 text-center mb-3'>
                <h6>Scanned Image</h6>
                <img
                  src={scannedImage}
                  alt='Scanned'
                  className='img-fluid rounded shadow-sm'
                />
              </div>
              <div className='col-md-6 text-center mb-3'>
                <h6>Database Image</h6>
                <img
                  src={databaseImage}
                  alt='Reference'
                  className='img-fluid rounded shadow-sm'
                />
              </div>
            </div>

            <p className='mt-4 text-muted text-center'>
              Scanned on: {timestamp}
            </p>

            {!isMatch && errorMessage && (
              <div className='alert alert-warning mt-2 text-center'>
                <strong>Issue:</strong> {errorMessage}
              </div>
            )}
          </div>

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanResultModal;
