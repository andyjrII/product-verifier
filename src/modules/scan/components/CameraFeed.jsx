import { useRef } from 'react';
import Webcam from 'react-webcam';
import Button from '../../../components/ui/Button';

const CameraFeed = ({ onCapture, onCancel }) => {
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

      <div className='flex gap-3'>
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
