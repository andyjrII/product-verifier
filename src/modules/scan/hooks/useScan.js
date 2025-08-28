import { useState } from 'react';

const useScan = () => {
  const [scannedImage, setScannedImage] = useState(null);
  const [databaseImage, setDatabaseImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [recentScans, setRecentScans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockDatabase = {
    'label-123': '/images/reference/label-123.png',
    'label-456': '/images/reference/label-456.png',
  };

  const simulateMatchCheck = (imageData) => {
    // Simulate label detection and matching
    const detectedLabel = imageData.includes('123') ? 'label-123' : 'label-456';
    const referenceImage = mockDatabase[detectedLabel];

    const isMatch = Math.random() > 0.3; // Simulate 70% match success

    return {
      status: isMatch ? 'match' : 'mismatch',
      label: detectedLabel,
      scannedImage: imageData,
      databaseImage: referenceImage,
      errorMessage: isMatch ? null : 'Label does not match database image.',
    };
  };

  const handleScan = (imageData) => {
    setScannedImage(imageData);

    const result = simulateMatchCheck(imageData);
    setDatabaseImage(result.databaseImage);
    setScanResult(result);
    setRecentScans((prev) => [result, ...prev.slice(0, 4)]);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return {
    scannedImage,
    databaseImage,
    scanResult,
    recentScans,
    isModalOpen,
    handleScan,
    closeModal,
  };
};

export default useScan;
