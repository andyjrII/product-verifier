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
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        className='camera-feed mb-3'
      />
      <button className='btn btn-primary ms-3' onClick={capture}>
        📷 Scan
      </button>
    </>
  );
};

export default CameraFeed;
