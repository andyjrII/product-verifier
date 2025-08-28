import { useRef } from 'react';

const CameraFeed = ({ onCapture }) => {
  const inputRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onCapture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='flex flex-col items-center gap-3'>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageUpload}
        className='hidden'
      />
      <button
        onClick={() => inputRef.current.click()}
        className='bg-brand text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition'
      >
        Upload Image
      </button>
      <p className='text-sm text-gray-500'>
        Or use your camera to scan a label
      </p>
    </div>
  );
};

export default CameraFeed;
