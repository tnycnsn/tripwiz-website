import React from 'react';

const Home = () => {
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
      
      <img 
        src="/WebPhoto2.png"
        alt="TripWiz App" 
        className="hero-image"
      />
    </div>
  );
};

export default Home; 