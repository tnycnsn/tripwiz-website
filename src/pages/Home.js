import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    '/WebPhoto2.png',
    '/WebPhoto3.png',
    '/WebPhoto4.png',
    '/WebPhoto5.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((prevNext) => 
          prevNext === images.length - 1 ? 0 : prevNext + 1
        );
        setIsTransitioning(false);
      }, 500); // Duration of transition animation
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, nextImageIndex]);

  return (
    <div className="home-container">
      <h1 className="hero-title">Explore World and Collect Memories</h1>
      
      <div className="cta-buttons">
        <a 
          href="https://apps.apple.com/de/app/tripwiz-ai-tourist-guide/id6745735451?l=en-GB" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/AppStoreButton.png" alt="Download on App Store" className="store-button" />
        </a>
        <a 
          href="https://play.google.com/store/apps/details?id=com.tnycnsn.tripwiz" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/PlayStoreButton.png" alt="Get it on Google Play" className="store-button" />
        </a>
      </div>
      
      <div className="hero-image-container">
        <img 
          src={images[currentImageIndex]}
          alt="TripWiz App" 
          className={`hero-image current ${isTransitioning ? 'slide-out' : ''}`}
          key={`current-${currentImageIndex}`}
        />
        {isTransitioning && (
          <img 
            src={images[nextImageIndex]}
            alt="TripWiz App" 
            className="hero-image next slide-in"
            key={`next-${nextImageIndex}`}
          />
        )}
      </div>
    </div>
  );
};

export default Home; 