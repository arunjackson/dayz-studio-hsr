import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../../context/StudioContext';

const ProgramDetailModal = () => {
  const { selectedProgram, modalOpen, setModalOpen, setSelectedProgram } = useStudio();
  const navigate = useNavigate();

  if (!modalOpen || !selectedProgram) return null;

  const handleClose = () => {
    setModalOpen(false);
    setSelectedProgram(null);
  };

  const handleBookNow = () => {
    setModalOpen(false);
    navigate('/booking');
  };

  return (
    <div 
      className="modal-overlay"
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px'
      }}
    >
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '24px',
          maxWidth: '480px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'fadeInUp 0.3s ease-out'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0,0,0,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="#0f1f1a" fill="none" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Program Image */}
        <div 
          style={{
            width: '100%',
            height: '240px',
            backgroundImage: `url(${selectedProgram.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px 24px 0 0'
          }}
        />

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '700',
            color: '#0f1f1a',
            marginBottom: '8px'
          }}>
            {selectedProgram.name}
          </h2>
          
          <p style={{ 
            fontSize: '16px', 
            color: '#0f1f1a',
            opacity: 0.7,
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            {selectedProgram.fullDescription || selectedProgram.desc}
          </p>

          {/* Quick Info Grid - NO PRICE */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Changed from 3 to 2 columns
            gap: '12px',
            marginBottom: '32px',
            padding: '16px',
            background: 'rgba(111, 198, 192, 0.1)',
            borderRadius: '16px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0f1f1a" fill="none" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1f1a' }}>{selectedProgram.duration || '60 min'}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0f1f1a" fill="none" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1f1a' }}>{selectedProgram.intensity || 'All Levels'}</div>
            </div>
          </div>

          {/* Benefits */}
          {selectedProgram.benefits && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600',
                color: '#0f1f1a',
                marginBottom: '16px'
              }}>
                Benefits
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {selectedProgram.benefits.map((benefit, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: '#6fc6c0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg viewBox="0 0 24 24" width="14px" height="14px" stroke="white" fill="none" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '15px', color: '#0f1f1a' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Book Now Button */}
          <button 
            onClick={handleBookNow}
            style={{
              width: '100%',
              background: '#0f1f1a',
              color: 'white',
              border: 'none',
              padding: '18px',
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '1px',
              borderRadius: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(15, 31, 26, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            BOOK THIS SESSION
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" fill="none" strokeWidth="2">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;
