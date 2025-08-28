import { useRef } from 'react';
import Webcam from 'react-webcam';

const CameraFeed = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        className='w-full max-w-lg rounded-xl shadow-lg'
      />

      <button
        onClick={capture}
        className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-transform'
      >
        📷 Scan
      </button>
    </div>
  );
};

export default CameraFeed;
