import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">Explore World and Collect Memories</h1>
      
      <img 
        src="/tripwiz-website/logo192.png" 
        alt="TripWiz App" 
        className="hero-image"
      />
      
      <div className="cta-buttons">
        <a 
          href="#" 
          className="cta-button primary"
          onClick={(e) => e.preventDefault()}
        >
          Download App
        </a>
        <a 
          href="#" 
          className="cta-button secondary"
          onClick={(e) => e.preventDefault()}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home; 