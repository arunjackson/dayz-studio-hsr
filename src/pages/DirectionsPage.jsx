import React from 'react';

const DirectionsPage = () => {
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <div className="page-title">Find Us</div>
        <div className="page-subtitle">Visit DAYZ Studio</div>
      </div>
      <div className="directions-container">
        <div className="address-card fade-in-up">
          <div className="address-header">
            <div className="address-icon">
              <svg viewBox="0 0 24 24" width="30" height="30" stroke="#0f1f1a" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="address-title">DAYZ Studio</div>
          </div>
          
          <div className="address-details">
            <div className="address-line">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="#0f1f1a" fill="none">
                <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
              </svg>
              <span>1st Floor, 36/6, opp. Sri Sairam PU & Degree College, 2nd Sector, HSR, Samasundra Palya, Somasundarapalya, Bengaluru, Karnataka 560102</span>
            </div>
            
            <div className="address-line">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="#0f1f1a" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Phone: 088616 16622</span>
            </div>
          </div>
          
          <a href="https://maps.google.com/?q=DAYZ+Studio+Bengaluru" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="map-button">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              OPEN IN MAPS
            </button>
          </a>
          
          <a href="tel:+9108861616622" style={{ textDecoration: 'none', display: 'block', marginTop: '10px' }}>
            <button className="phone-button">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              CALL NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DirectionsPage;
