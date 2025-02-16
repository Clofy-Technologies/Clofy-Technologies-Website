import React from 'react';

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card; 