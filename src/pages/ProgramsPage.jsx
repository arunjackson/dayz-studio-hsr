import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import { programsData, categoryTitles } from '../data/programsData';
import ProgramCard from '../components/Cards/ProgramCard';

const ProgramsPage = () => {
  const { selectedCategory } = useStudio();
  const navigate = useNavigate();

  useEffect(() => {
    // If no category selected, redirect to explore
    if (!selectedCategory) {
      navigate('/explore');
    }
  }, [selectedCategory, navigate]);

  if (!selectedCategory) return null;

  const programs = programsData[selectedCategory] || [];
  const titleData = categoryTitles[selectedCategory] || {
    title: 'Programs',
    subtitle: 'Select a program'
  };

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <div className="page-title">{titleData.title}</div>
        <div className="page-subtitle">{titleData.subtitle}</div>
      </div>
      <div className="programs-container">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
