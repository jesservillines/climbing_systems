import React from 'react';

/**
 * Component that conditionally renders content based on user's knowledge level
 * 
 * @param {Object} props
 * @param {string} props.level - Current knowledge level (beginner, intermediate, advanced)
 * @param {React.ReactNode} props.beginner - Content for beginner level
 * @param {React.ReactNode} props.intermediate - Content for intermediate level
 * @param {React.ReactNode} props.advanced - Content for advanced level
 * @param {boolean} props.showHighlights - Whether to highlight content for levels above selected level 
 * @returns {React.ReactNode}
 */
const LevelContent = ({ 
  level, 
  beginner, 
  intermediate, 
  advanced,
  showHighlights = true
}) => {
  // Function to determine which content to display based on level
  const getContentForLevel = () => {
    switch(level) {
      case 'beginner':
        return beginner;
      case 'intermediate':
        return intermediate || beginner;
      case 'advanced':
        return advanced || intermediate || beginner;
      default:
        return beginner;
    }
  };

  // Function to add visual indicator for content from higher levels
  const getLevelIndicator = (contentLevel) => {
    if (!showHighlights) return null;
    
    let color, label;
    
    switch(contentLevel) {
      case 'intermediate':
        color = '#3498db';
        label = 'Intermediate';
        break;
      case 'advanced':
        color = '#8e44ad';
        label = 'Advanced';
        break;
      default:
        return null;
    }
    
    return (
      <div 
        style={{ 
          backgroundColor: color, 
          color: 'white', 
          display: 'inline-block',
          padding: '0.15rem 0.5rem', 
          borderRadius: '4px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          marginLeft: '0.5rem',
          verticalAlign: 'middle'
        }}
      >
        {label}
      </div>
    );
  };

  // Render content based on selected level
  return (
    <div className="level-content">
      {level === 'beginner' ? (
        <>
          {beginner}
        </>
      ) : level === 'intermediate' ? (
        <>
          {intermediate ? (
            <>{intermediate}</>
          ) : (
            <>{beginner}</>
          )}
        </>
      ) : (
        // Advanced level
        <>
          {advanced ? (
            <>{advanced}</>
          ) : intermediate ? (
            <>{intermediate} {getLevelIndicator('intermediate')}</>
          ) : (
            <>{beginner}</>
          )}
        </>
      )}
    </div>
  );
};

export default LevelContent;
