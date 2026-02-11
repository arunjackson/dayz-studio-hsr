import React from 'react';
import { useStudio } from '../../context/StudioContext';

const ProgramCard = ({ program, index }) => {
  const { setSelectedProgram, setModalOpen } = useStudio();

  const handleClick = () => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  return (
    <div 
      className="program-card fade-in-up" 
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={handleClick}
    >
      <div className="program-icon" dangerouslySetInnerHTML={{ __html: program.icon }} />
      <div className="program-info">
        <div className="program-name">{program.name}</div>
        <div className="program-desc">{program.desc}</div>
      </div>
      <div className="program-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#0f1f1a" fill="none" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default ProgramCard;
