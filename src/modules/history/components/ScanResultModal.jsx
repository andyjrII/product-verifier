const ScanResultModal = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  const { status, label, scannedImage, databaseImage, errorMessage } = result;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Scan Result: {status === 'match' ? '✅ Match' : '❌ Mismatch'}
        </h2>

        <div className='flex flex-col gap-3'>
          <p className='text-sm text-gray-600'>
            Label: <span className='font-medium'>{label}</span>
          </p>

          <div className='flex gap-4 justify-center'>
            <div className='text-center'>
              <p className='text-xs text-gray-500 mb-1'>Scanned</p>
              <img
                src={scannedImage}
                alt='Scanned'
                className='w-24 h-24 object-cover rounded shadow'
              />
            </div>
            <div className='text-center'>
              <p className='text-xs text-gray-500 mb-1'>Reference</p>
              <img
                src={databaseImage}
                alt='Reference'
                className='w-24 h-24 object-cover rounded shadow'
              />
            </div>
          </div>

          {errorMessage && (
            <p className='text-sm text-red-600 text-center mt-2'>
              {errorMessage}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className='mt-6 w-full bg-brand text-white py-2 rounded hover:bg-blue-700 transition'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ScanResultModal;
