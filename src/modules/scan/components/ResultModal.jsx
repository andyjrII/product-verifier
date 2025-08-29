import { MdWarning } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';

const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  // Define the three categories
  const categories = ['Verbiage', 'Ingredients', 'Barcode'];

  // Normalize errorMessage to array
  const errors = Array.isArray(result.errorMessage) ? result.errorMessage : [];

  // Helper to check if a category has an error
  const getCategoryStatus = (category) => {
    const match = errors.find((msg) =>
      msg.toLowerCase().includes(category.toLowerCase())
    );
    return match || 'Matched';
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-2xl p-10 max-w-lg w-full'>
        <h2 className='text-center text-2xl font-semibold mb-8'>
          <span
            className={`rounded-2xl text-white px-8 py-2 ${
              result.status === 'match' ? 'bg-green-400' : 'bg-red-400'
            }`}
          >
            {result.status === 'match'
              ? '✅ Products Match'
              : '❌ Mismatch Detected'}
          </span>
        </h2>

        <p className='my-4 font-medium text-3xl text-gray-600 text-center'>
          {result.productName}
        </p>

        <div className='flex gap-24 justify-center'>
          <div className='flex flex-col text-center'>
            <img
              src={result.databaseImage}
              alt='Reference'
              className='w-[100px] h-[100px] rounded-lg shadow object-contain'
            />
            <span className='text-md text-gray-600 mt-4'>Saved Product</span>
          </div>

          <div className='flex flex-col text-center'>
            <img
              src={result.scannedImage}
              alt='Scanned'
              className='w-[100px] h-[100px] rounded-lg shadow object-contain'
            />
            <span className='text-md text-gray-600 mt-4'>Scanned Product</span>
          </div>
        </div>

        <div className='mt-8'>
          <ul className='mt-4 space-y-3'>
            {categories.map((category, index) => {
              const status = getCategoryStatus(category);
              const isMatched = status === 'Matched';
              return (
                <li
                  key={index}
                  className={`text-2xl font-medium px-6 py-8 flex gap-2 rounded-xl ${
                    isMatched
                      ? 'bg-green-200 text-green-600'
                      : 'bg-red-200 text-red-600'
                  }`}
                >
                  {isMatched ? (
                    <FaCircleCheck className='text-green-600 text-3xl' />
                  ) : (
                    <MdWarning className='text-red-600 text-3xl' />
                  )}
                  {isMatched ? `${category} matched` : status}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={onClose}
          className='text-2xl mt-8 w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-700 transition'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
