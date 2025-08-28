import { useEffect } from 'react';

const ScanResultModal = ({ scan, onClose }) => {
  if (!scan) return null;

  const {
    productName,
    status,
    scannedImage,
    databaseImage,
    errorMessage,
    timestamp,
  } = scan;
  const isMatch = status === 'match';

  // close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='bg-white rounded-2xl shadow-lg max-w-md w-full animate-fadeIn'>
        {/* Header */}
        <div className='flex justify-between items-center border-b px-4 py-3'>
          <h5 className='text-lg font-semibold'>Scan Result: {productName}</h5>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 text-xl font-bold'
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className='p-4'>
          <div className='text-center mb-4'>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                isMatch
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {isMatch ? 'Match ✅' : 'Mismatch ❌'}
            </span>
          </div>

          <div className='grid grid-cols-2 gap-3 mb-4'>
            <div className='text-center'>
              <h6 className='font-medium mb-2'>Scanned Image</h6>
              <img
                src={scannedImage}
                alt='Scanned'
                className='w-full h-40 object-cover rounded-lg shadow'
              />
            </div>
            <div className='text-center'>
              <h6 className='font-medium mb-2'>Database Image</h6>
              <img
                src={databaseImage}
                alt='Reference'
                className='w-full h-40 object-cover rounded-lg shadow'
              />
            </div>
          </div>

          <p className='text-sm text-gray-500 text-center'>
            Scanned on: {timestamp}
          </p>

          {!isMatch && errorMessage && (
            <div className='mt-4 bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded text-center text-sm'>
              <strong>Issue:</strong> {errorMessage}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className='border-t px-4 py-3 flex justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:scale-95 transition'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanResultModal;
