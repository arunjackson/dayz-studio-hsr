import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon, label, path, isActive, onClick }) => (
  <div 
    className={`nav-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {icon}
    </svg>
    <span className="nav-label">{label}</span>
  </div>
);

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🚫 DON'T SHOW NAVBAR ON HOMEPAGE
  if (location.pathname === '/') {
    return null;
  }

  const navItems = [
    { path: '/', label: 'Home', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
    { path: '/explore', label: 'Explore', icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></> },
    { path: '/blog', label: 'Blog', icon: <><path d="M4 4h16v16H4z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></> },
    { path: '/booking', label: 'Booking', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></> },
    { path: '/directions', label: 'Directions', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></> }
  ];

  return (
    <div className="bottom-nav">
      {navItems.map(item => (
        <NavItem
          key={item.path}
          {...item}
          isActive={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        />
      ))}
    </div>
  );
};

export default BottomNav;
