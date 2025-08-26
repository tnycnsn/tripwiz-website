import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">Explore World and Collect Memories</h1>
      
      <div className="cta-buttons">
        <a 
          href="#" 
          className="cta-button"
          onClick={(e) => e.preventDefault()}
        >
          <img src="/AppStoreButton.png" alt="Download on App Store" className="store-button" />
        </a>
        <a 
          href="#" 
          className="cta-button"
          onClick={(e) => e.preventDefault()}
        >
          <img src="/PlayStoreButton.png" alt="Get it on Google Play" className="store-button" />
        </a>
      </div>
      
      <img 
        src="/WebPhoto2.png"
        alt="TripWiz App" 
        className="hero-image"
      />
    </div>
  );
};

export default Home; 