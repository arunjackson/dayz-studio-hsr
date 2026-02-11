import React, { createContext, useState, useContext } from 'react';

const StudioContext = createContext();

export const StudioProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const value = {
    selectedCategory,
    setSelectedCategory,
    selectedProgram,
    setSelectedProgram,
    modalOpen,
    setModalOpen,
    bookingDetails,
    setBookingDetails,
    clearSelections: () => {
      setSelectedCategory('');
      setSelectedProgram(null);
      setBookingDetails(null);
    }
  };

  return (
    <StudioContext.Provider value={value}>
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
