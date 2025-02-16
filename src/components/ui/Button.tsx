import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-blue-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export default Button; 