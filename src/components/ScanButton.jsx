const ScanButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='btn btn-primary btn-lg w-100'>
      Scan Product
    </button>
  );
};

export default ScanButton;
