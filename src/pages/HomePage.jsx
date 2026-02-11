import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div id="page1" className="page active">
      {/* MAIN LOGO SECTION */}
      <div className="home-container">
        <div className="logo">
          <svg viewBox="0 0 260 260">
            <circle cx="130" cy="130" r="105" fill="none" stroke="#0f1f1a" strokeWidth="3"/>
            <polygon className="diamond"
              points="130,10 250,130 130,250 10,130"
              fill="none" stroke="#0f1f1a" strokeWidth="3"/>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f6b44c"/>
                <stop offset="100%" stopColor="#e76b3c"/>
              </linearGradient>
            </defs>
            <circle className="pulse" cx="130" cy="130" r="80" fill="url(#grad)"/>
            <g fill="#0f1f1a">
              <rect x="75" y="85" width="25" height="8"/>
              <circle cx="120" cy="90" r="6"/>
              <circle cx="145" cy="90" r="6"/>
              <circle cx="90" cy="115" r="6"/>
              <rect x="115" y="110" width="30" height="8"/>
              <rect x="80" y="135" width="30" height="8"/>
              <circle cx="130" cy="140" r="6"/>
              <rect x="150" y="135" width="40" height="8"/>
              <rect x="90" y="160" width="30" height="8"/>
              <rect x="130" y="160" width="30" height="8"/>
              <circle cx="170" cy="165" r="6"/>
              <circle cx="190" cy="165" r="6"/>
            </g>
          </svg>

          <div className="dayz">DAYZ</div>
          <div className="studio">STUDIO</div>
          <div className="services">DANCE | ARTS | YOGA | ZUMBA</div>
          <div className="tagline">ELEVATE YOUR EVERYDAY</div>
          
          <button className="explore-btn" onClick={() => navigate('/explore')}>
            EXPLORE
            <svg viewBox="0 0 24 24">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* SOCIAL ICONS - SEPARATE SECTION, ALWAYS AT BOTTOM */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
        width: '100%',
        maxWidth: '480px',
        padding: '15px 20px',
        zIndex: 100,
        background: 'none'
      }}>
        {/* Instagram */}
        <a 
          href="https://instagram.com/dayzstudiohsr" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,31,26,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
          }}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0f1f1a" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="3"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#0f1f1a"/>
            </svg>
          </div>
          <span style={{
            fontSize: '11px',
            color: '#0f1f1a',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: '0.8',
            textShadow: '0 1px 2px rgba(255,255,255,0.3)'
          }}>Instagram</span>
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com/@dayzstudiohsr" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,31,26,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
          }}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0f1f1a" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0f1f1a"/>
            </svg>
          </div>
          <span style={{
            fontSize: '11px',
            color: '#0f1f1a',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: '0.8',
            textShadow: '0 1px 2px rgba(255,255,255,0.3)'
          }}>YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
