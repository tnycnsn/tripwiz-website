import React from 'react';

const Support = () => {
  return (
    <div className="page-container">
      <div className="support-content">
        <h1 className="page-title">TripWiz Support</h1>
        <div className="support-intro">
          <p>
            Welcome to the support page! If you are experiencing issues or have any questions, we're here to help.
          </p>
        </div>

        <section className="support-section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          
          <div className="faq-item">
            <h3>What kind of photos can I submit in TripWiz?</h3>
            <p>
              TripWiz is designed for photographing public tourist attractions such as monuments, historical buildings, and landmarks. To protect privacy and ensure optimal results, please avoid submitting images containing identifiable people, faces, or private property.
            </p>
          </div>

          <div className="faq-item">
            <h3>How is my location used in the app?</h3>
            <p>
              Your location is only used at the moment you submit a photo, to generate a narrative based on your current surroundings. We do not track your location continuously, and location data is not shared with third parties for advertising.
            </p>
          </div>

          <div className="faq-item">
            <h3>Who can see the narrative cards I create?</h3>
            <p>
              Narrative cards are private by default and linked to your account. Only you can view or delete them unless you choose to share them externally.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are my photos stored or shared with others?</h3>
            <p>
              Photos are stored securely and processed only for the purpose of generating narrative content. They are never shared publicly or used for any purpose other than providing the app's core functionality.
            </p>
          </div>
        </section>

        <section className="support-section">
          <h2>Contact Us</h2>
          <p>
            If you need further assistance, feel free to reach out at:
          </p>
          <p className="contact-email">
            <a href="mailto:info.tripwiz@gmail.com">info.tripwiz@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support; 