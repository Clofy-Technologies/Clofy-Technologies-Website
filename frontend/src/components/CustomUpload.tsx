import React from 'react';

const CustomUpload: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG content for the upload icon */}
    <path d="M12 2L12 15M12 15L9 12M12 15L15 12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default CustomUpload; 