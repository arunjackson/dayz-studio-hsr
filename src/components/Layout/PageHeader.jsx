import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header fade-in-up">
      <div className="page-title">{title}</div>
      <div className="page-subtitle">{subtitle}</div>
    </div>
  );
};

export default PageHeader;
