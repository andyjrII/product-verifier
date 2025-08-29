import { useRef } from 'react';
import Webcam from 'react-webcam';
import Button from '../../../components/ui/Button';

const CameraFeed = ({ onCapture, onCancel, loading }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className='relative flex flex-col items-center gap-4'>
      <div className='relative w-full max-w-lg rounded-xl shadow-lg overflow-hidden'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          className='w-full rounded-xl'
        />

        {loading && (
          <div className='absolute inset-0 z-10'>
            <div className='absolute inset-0 bg-black bg-opacity-30'></div>
            <div className='animate-scan-line h-full' />
          </div>
        )}
      </div>

      <div className='flex gap-16'>
        <Button variant='primary' onClick={capture}>
          📷 Scan
        </Button>
        <Button variant='danger' onClick={onCancel}>
          ❌ Cancel
        </Button>
      </div>
    </div>
  );
};

export default CameraFeed;
