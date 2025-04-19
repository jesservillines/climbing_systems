import React from 'react';

/**
 * Icon Component for AlpinistHub
 * @param {string} name - The name of the icon without extension
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Additional inline styles
 */
const Icon = ({ 
  name, 
  width = 24, 
  height = 24, 
  className = '', 
  style = {}, 
  alt = ''
}) => {
  const iconPath = `/icons/${name}.png`;
  const iconAlt = alt || `${name} icon`;
  
  return (
    <img
      src={iconPath}
      alt={iconAlt}
      width={width}
      height={height}
      className={`icon ${className}`}
      style={{ objectFit: 'contain', ...style }}
    />
  );
};

export default Icon;
