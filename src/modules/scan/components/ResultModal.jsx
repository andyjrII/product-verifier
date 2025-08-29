const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 shadow-lg max-w-md w-full'>
        <h2 className='text-xl font-semibold mb-4'>
          {result.status === 'match'
            ? '✅ Match Found'
            : '❌ Mismatch Detected'}
        </h2>
        <p className='mb-2 font-medium'>{result.productName}</p>
        <div className='flex gap-4 justify-center'>
          <img
            src={result.scannedImage}
            alt='Scanned'
            className='w-24 h-24 rounded shadow'
          />
          <img
            src={result.databaseImage}
            alt='Reference'
            className='w-24 h-24 rounded shadow'
          />
        </div>
        {result.errorMessage && (
          <p className='mt-3 text-sm text-red-600 text-center'>
            {result.errorMessage}
          </p>
        )}
        <button
          onClick={onClose}
          className='mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
