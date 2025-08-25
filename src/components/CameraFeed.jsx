import './CameraFeed.css';
import { useRef } from 'react';
import Webcam from 'react-webcam';

const CameraFeed = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className='camera-container text-center'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        className='camera-feed mb-3'
      />
      <button className='btn btn-success' onClick={capture}>
        Capture Label
      </button>
    </div>
  );
};

export default CameraFeed;
