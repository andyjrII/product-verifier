const MismatchCard = ({ scannedImage, databaseImage, errorMessage }) => (
  <div className='p-3 mt-3 bg-red-50 text-red-700 border border-red-200 rounded-lg'>
    <h5 className='font-semibold'>❌ Mismatch Detected</h5>
    <p>
      <strong>Error:</strong> {errorMessage}
    </p>
    <div className='grid grid-cols-2 gap-3 mt-3'>
      <div className='text-center'>
        <p className='text-sm text-gray-500'>Scanned Product</p>
        <img
          src={scannedImage}
          alt='Scanned'
          className='w-full h-40 object-cover rounded shadow'
        />
      </div>
      <div className='text-center'>
        <p className='text-sm text-gray-500'>Database Product</p>
        <img
          src={databaseImage}
          alt='Database'
          className='w-full h-40 object-cover rounded shadow'
        />
      </div>
    </div>
  </div>
);

export default MismatchCard;
