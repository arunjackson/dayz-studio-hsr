import React from 'react';
import { useLocation } from 'react-router-dom';

const AppContainer = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="app-container">
      {children}
      {/* BottomNav is now rendered inside App.jsx, but we need to add padding on non-homepages */}
      {!isHomePage && <div style={{ height: '80px' }} />}
    </div>
  );
};

export default AppContainer;
