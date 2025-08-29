import { useRef } from 'react';
import Webcam from 'react-webcam';
import ScanButton from '../../../components/ui/ScanButton';
import { RxCross2 } from 'react-icons/rx';

const CameraFeed = ({ onCapture, onCancel, loading }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className='relative flex flex-col items-center gap-4'>
      <div className='relative w-full max-w-lg rounded-2xl shadow-lg overflow-hidden'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          className='w-full rounded-2xl'
        />

        {loading && (
          <div className='absolute inset-0 z-10'>
            <div className='absolute inset-0 bg-black bg-opacity-30'></div>
            <div className='animate-scan-line h-full' />
          </div>
        )}
      </div>

      <div className='flex justify-between g-8 items-center mt-4 w-full'>
        <ScanButton variant='primary' onClick={capture}>
          📷 Scan
        </ScanButton>
        <ScanButton variant='danger' onClick={onCancel}>
          <RxCross2 className='text-white' /> Cancel
        </ScanButton>
      </div>
    </div>
  );
};

export default CameraFeed;
