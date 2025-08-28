const MismatchDisplay = ({ scannedImage, databaseImage, errorMessage }) => {
  return (
    <div className='bg-red-50 border border-red-200 rounded p-4'>
      <h6 className='text-red-700 font-semibold mb-2'>Mismatch Detected ❌</h6>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        <div className='text-center'>
          <p className='text-sm font-medium mb-1'>Scanned Image</p>
          <img
            src={scannedImage}
            alt='Scanned'
            className='rounded shadow w-40'
          />
        </div>
        <div className='text-center'>
          <p className='text-sm font-medium mb-1'>Database Image</p>
          <img
            src={databaseImage}
            alt='Reference'
            className='rounded shadow w-40'
          />
        </div>
      </div>
      <p className='mt-3 text-sm text-red-600 text-center'>{errorMessage}</p>
    </div>
  );
};

export default MismatchDisplay;
