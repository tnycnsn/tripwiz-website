import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Privacy Policy</h1>
      <div className="privacy-content">
        <div className="privacy-intro">
          <p>
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application TripWiz, available on iOS and Android platforms.
          </p>
          <p>
            Please read this policy carefully. By using the App, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not use the App.
          </p>
        </div>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>We collect the following types of information when you use the App:</p>
          
          <div className="subsection">
            <h3>Personal Identifiers</h3>
            <p>Sign-in credentials (Google or Apple ID, including associated name and email address). Device identifiers (e.g., IP address, device model, OS version).</p>
          </div>

          <div className="subsection">
            <h3>Location Data</h3>
            <p>We collect and use your location at the time of submitting a photo to provide contextual and accurate narratives related to tourist attractions.</p>
          </div>

          <div className="subsection">
            <h3>Image Data</h3>
            <p>Submitted photographs might be processed via third-party AI services (e.g., OpenAI) to generate descriptive content. We explicitly discourage submission of images containing personal biometric data or identifiable individuals.</p>
          </div>

          <div className="subsection">
            <h3>Usage and Diagnostic Information</h3>
            <p>App interaction data (narrative card creation, deletions, in-app purchases). Crash reports and usage analytics (via Firebase Analytics and Crashlytics).</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>We use your information to provide and maintain the functionality of the App, generate and store narrative cards based on photo and location input, manage user accounts, credit balances, and in-app purchases via RevenueCat, improve App performance, resolve issues, and monitor usage patterns, and comply with legal obligations and enforce our Terms of Use.</p>
        </section>

        <section className="privacy-section">
          <h2>Data Sharing and Third Parties</h2>
          <p>We may share limited data with third-party services under the following circumstances:</p>
          <p><strong>AI Processing Services:</strong> Submitted images are transmitted to third-party APIs solely for the purpose of generating narrative content. These services process the data as per their own privacy policies.</p>
          <p><strong>Monetization Platforms:</strong> RevenueCat facilitates in-app purchases and subscription tracking in integration with Google Play and Apple App Store.</p>
          <p><strong>Firebase Services:</strong> Google Firebase is used for authentication, database storage, analytics, and crash reporting.</p>
          <p>We do not sell or share your personal data with third parties for advertising purposes.</p>
        </section>

        <section className="privacy-section">
          <h2>Data Retention</h2>
          <p>We retain your data only as long as necessary for the purposes stated above. Narrative cards, images, and location data are stored securely to allow future access by users. You may delete individual narrative cards at any time from within the App. Account-related information is retained until you request account deletion.</p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights under applicable data protection laws: access the personal data we hold about you, request correction or deletion of your data, object to or restrict the processing of your data, withdraw consent at any time (without affecting prior processing), and lodge a complaint with a supervisory authority (e.g., GDPR).</p>
          <p>To exercise these rights, please contact us at: <a href="mailto:info.tripwiz@gmail.com">info.tripwiz@gmail.com</a></p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We take reasonable administrative, technical, and physical measures to protect your information from unauthorized access, disclosure, or misuse. All communications are encrypted via HTTPS, and data is stored in secure cloud infrastructure compliant with relevant security standards.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            TripWiz is not intended for use by individuals under the age of 13 (or equivalent age in your jurisdiction). We do not knowingly collect personal data from children.
          </p>
        </section>

        <section className="privacy-section">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be processed and stored in countries outside of your residence, including countries that may not have the same data protection laws. We ensure appropriate safeguards are in place to protect such data transfers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="contact-email">
            <a href="mailto:info.tripwiz@gmail.com">info.tripwiz@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 