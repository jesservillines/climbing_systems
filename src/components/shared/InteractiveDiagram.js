import React, { useState, useEffect } from 'react';

const InteractiveDiagram = ({ 
  src, 
  alt, 
  width = '100%', 
  height = 'auto',
  hotspots = [] 
}) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [zoomedIn, setZoomedIn] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  
  // Hide the help text after 5 seconds
  useEffect(() => {
    if (showHelp) {
      const timer = setTimeout(() => {
        setShowHelp(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showHelp]);
  
  // Handle hotspot click
  const handleHotspotClick = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };
  
  // Handle zoom click
  const handleZoomClick = () => {
    setZoomedIn(!zoomedIn);
    setActiveTooltip(null);
  };

  return (
    <div className="interactive-diagram" style={{ 
      position: 'relative', 
      maxWidth: zoomedIn ? '150%' : '100%', 
      margin: '2rem 0',
      overflow: 'auto',
      padding: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'max-width 0.3s ease'
    }}>
      {/* Zoom control */}
      <div 
        className="zoom-control"
        onClick={handleZoomClick}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(52, 152, 219, 0.8)',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 30,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          border: '2px solid white'
        }}
      >
        <span style={{ fontSize: '20px' }}>{zoomedIn ? '🔍-' : '🔍+'}</span>
      </div>
      
      <div style={{ 
        overflow: 'auto', 
        maxHeight: zoomedIn ? '80vh' : 'auto',
        position: 'relative'
      }}>
        <img 
          src={src} 
          alt={alt} 
          width={width} 
          height={height}
          style={{ 
            display: 'block', 
            maxWidth: '100%', 
            height: 'auto',
            transition: 'transform 0.3s ease',
            transform: zoomedIn ? 'scale(1.2)' : 'scale(1)',
            transformOrigin: 'top center'
          }}
        />
        
        {/* Help overlay - fades out after 5 seconds */}
        {showHelp && (
          <div 
            className="help-overlay" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              zIndex: 40,
              animation: 'fadeOut 5s forwards'
            }}
            onClick={() => setShowHelp(false)}
          >
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(44, 62, 80, 0.9)', 
              borderRadius: '8px',
              maxWidth: '80%',
              textAlign: 'center'
            }}>
              <h3>Interactive Diagram</h3>
              <p>Click on the numbered points to learn more about each component</p>
              <p>Use the zoom control 🔍 to enlarge the diagram</p>
              <p style={{ fontSize: '0.8rem' }}>(Click anywhere to dismiss this message)</p>
            </div>
          </div>
        )}
        
        {hotspots.map((hotspot, index) => (
          <div 
            key={index}
            className="hotspot"
            style={{
              position: 'absolute',
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: activeTooltip === index ? 'rgba(46, 204, 113, 0.9)' : 'rgba(52, 152, 219, 0.8)',
              border: '2px solid white',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s ease',
              // Pulse animation for hotspots
              animation: 'pulse 2s infinite'
            }}
            onClick={() => handleHotspotClick(index)}
          >
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%', 
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              {index + 1}
            </span>
            
            {activeTooltip === index && (
              <div 
                className="tooltip"
                style={{
                  position: 'absolute',
                  width: '320px',
                  backgroundColor: 'rgba(44, 62, 80, 0.97)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  top: '40px',
                  left: hotspot.tooltipPosition === 'right' ? '40px' : hotspot.tooltipPosition === 'left' ? '-350px' : '-160px',
                  zIndex: 20,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                  animation: 'fadeIn 0.3s ease-out',
                  maxHeight: '85vh',
                  overflowY: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4 style={{ 
                  margin: '0 0 1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  paddingBottom: '0.5rem',
                  color: '#2ecc71',
                  fontSize: '1.2rem'
                }}>
                  {hotspot.title}
                </h4>
                <p style={{ 
                  margin: '0 0 1rem 0', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  letterSpacing: '0.01em'
                }}>
                  {hotspot.description}
                </p>
                {hotspot.safetyNote && (
                  <div style={{
                    marginTop: '1rem', 
                    padding: '0.8rem 1rem',
                    backgroundColor: 'rgba(231, 76, 60, 0.3)',
                    borderLeft: '3px solid #e74c3c',
                    borderRadius: '4px'
                  }}>
                    <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Safety Note:</strong> 
                    <span style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{hotspot.safetyNote}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="diagram-controls" style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: 'rgba(44, 62, 80, 0.05)',
        borderRadius: '5px'
      }}>
        <div className="diagram-caption" style={{ 
          textAlign: 'left', 
          fontSize: '1rem', 
          color: '#2c3e50',
          flex: 1 
        }}>
          <strong>{alt}</strong><br />
          <span style={{ fontSize: '0.9rem' }}>Click on numbered points for more information</span>
        </div>
        
        <button
          onClick={() => setShowHelp(true)}
          style={{
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            border: '1px solid rgba(52, 152, 219, 0.3)',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            color: '#3498db',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <span>ℹ️</span> Help
        </button>
      </div>

      <style jsx>{`
        .hotspot:hover {
          background-color: rgba(52, 152, 219, 1);
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
        }
        
        /* Enhance diagram text readability */
        :global(text) {
          font-family: Arial, sans-serif !important;
          font-weight: 500 !important;
          letter-spacing: 0.01em !important;
          filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.4));
        }
        
        :global(.diagram-text), :global(text:not([class])) {
          font-size: 12px !important;
          fill: #444 !important;
          background-color: rgba(255, 255, 255, 0.7) !important;
          padding: 3px !important;
          border-radius: 3px !important;
        }
        
        :global(.diagram-label) {
          font-weight: 600 !important;
          fill: #333 !important;
        }
        
        :global(.safety-text) {
          fill: #e74c3c !important;
          font-weight: bold !important;
        }
        
        :global(.info-box) {
          fill: rgba(255, 255, 255, 0.85) !important;
          stroke: #bbb !important;
          stroke-width: 1px !important;
          rx: 5px !important;
          ry: 5px !important;
        }
        
        :global(.info-box-title) {
          font-weight: bold !important;
          fill: #2c3e50 !important;
          font-size: 14px !important;
        }
        
        :global(.info-box-text) {
          fill: #444 !important;
          font-size: 12px !important;
        }
      `}</style>
    </div>
  );
};

export default InteractiveDiagram;
