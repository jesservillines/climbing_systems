import React from 'react';

const KnowledgeLevelToggle = ({ level, setLevel }) => {
  return (
    <div className="knowledge-level-toggle">
      <h4 style={{ marginBottom: '0.5rem' }}>Content Detail Level:</h4>
      <div className="toggle-container" style={{ display: 'flex', marginBottom: '1rem' }}>
        <button 
          className={`toggle-btn ${level === 'beginner' ? 'active' : ''}`}
          onClick={() => setLevel('beginner')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px 0 0 4px',
            border: '1px solid var(--primary-color)',
            backgroundColor: level === 'beginner' ? 'var(--primary-color)' : 'transparent',
            color: level === 'beginner' ? 'white' : 'var(--primary-color)',
            cursor: 'pointer',
            fontWeight: level === 'beginner' ? 'bold' : 'normal',
          }}
        >
          Beginner
        </button>
        <button 
          className={`toggle-btn ${level === 'intermediate' ? 'active' : ''}`}
          onClick={() => setLevel('intermediate')}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid var(--primary-color)',
            borderLeft: 'none',
            backgroundColor: level === 'intermediate' ? 'var(--primary-color)' : 'transparent',
            color: level === 'intermediate' ? 'white' : 'var(--primary-color)',
            cursor: 'pointer',
            fontWeight: level === 'intermediate' ? 'bold' : 'normal',
          }}
        >
          Intermediate
        </button>
        <button 
          className={`toggle-btn ${level === 'advanced' ? 'active' : ''}`}
          onClick={() => setLevel('advanced')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0 4px 4px 0',
            border: '1px solid var(--primary-color)',
            borderLeft: 'none',
            backgroundColor: level === 'advanced' ? 'var(--primary-color)' : 'transparent',
            color: level === 'advanced' ? 'white' : 'var(--primary-color)',
            cursor: 'pointer',
            fontWeight: level === 'advanced' ? 'bold' : 'normal',
          }}
        >
          Advanced
        </button>
      </div>
      <div className="level-description" style={{ 
        backgroundColor: 'rgba(52, 152, 219, 0.1)', 
        padding: '0.5rem 1rem', 
        borderRadius: '4px',
        marginBottom: '1.5rem'
      }}>
        {level === 'beginner' && (
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Beginner Level:</strong> Essential information for those new to rope soloing.
            Focuses on core concepts, basic safety, and simplified explanations.
          </p>
        )}
        {level === 'intermediate' && (
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Intermediate Level:</strong> More detailed information for climbers with some experience.
            Includes additional techniques, considerations, and system variations.
          </p>
        )}
        {level === 'advanced' && (
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Advanced Level:</strong> In-depth technical information for experienced climbers.
            Includes nuanced details, edge cases, advanced techniques and system optimizations.
          </p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeLevelToggle;
