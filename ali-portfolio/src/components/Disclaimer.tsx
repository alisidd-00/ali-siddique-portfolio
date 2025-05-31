import { useState, useEffect } from 'react';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show disclaimer after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`disclaimer-banner ${isClosing ? 'closing' : ''}`}
      style={{
        animation: isClosing ? 'slideOutToRight 0.3s ease-in forwards' : undefined
      }}
    >
      <div className="disclaimer-header">
        <span className="disclaimer-title">
          <span className="disclaimer-emoji">🚀</span>
          Vibe Coded
        </span>
        <button 
          className="disclaimer-close" 
          onClick={handleClose}
          aria-label="Close disclaimer"
        >
          ×
        </button>
      </div>
      <p className="disclaimer-text">
        Hey! This is vibe coded - I'm not that good a frontend dev, but I tried my best! 😄
      </p>
    </div>
  );
};

export default Disclaimer; 