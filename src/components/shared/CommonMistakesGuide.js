import React, { useState } from 'react';

const CommonMistakesGuide = ({ system = 'rope-soloing' }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Define common mistakes based on the climbing system
  const mistakesData = {
    'rope-soloing': [
      {
        title: "Incorrect GriGri Orientation",
        imageURL: "/images/mistakes/grigri-orientation-wrong.svg",
        correctImageURL: "/images/mistakes/grigri-orientation-correct.svg",
        description: "One of the most dangerous mistakes in rope soloing is orienting the GriGri incorrectly. When the device is upside-down compared to normal belaying, the cam will not engage properly in a fall.",
        solution: "Always double-check your GriGri orientation before leaving the ground. The rope should run from the anchor, through the device with the climber side label facing toward the anchor, and the brake strand should exit toward your brake hand. Test the system under controlled conditions by weighting it close to the ground.",
        severity: "Critical",
        consequences: "Device will not catch a fall, resulting in ground fall and potential serious injury or death."
      },
      {
        title: "Missing Backup Knots",
        imageURL: "/images/mistakes/missing-backup-knots.svg",
        correctImageURL: "/images/mistakes/proper-backup-knots.svg",
        description: "Failing to tie backup knots in the brake strand while lead rope soloing removes a critical safety redundancy from your system.",
        solution: "Tie backup knots (figure-8 or overhand on a bight) every 5-10 meters on the brake strand and clip each to separate gear loops on your harness. Remember to untie them as you climb past them.",
        severity: "High",
        consequences: "Without backup knots, device malfunction or rope slippage could result in catastrophic system failure."
      },
      {
        title: "Inadequate Anchor Construction",
        imageURL: "/images/mistakes/poor-anchor.svg",
        correctImageURL: "/images/mistakes/solid-anchor.svg",
        description: "Building an anchor that is not strong enough to withstand upward pull is dangerous in rope soloing, as a factor 2 fall directly onto the anchor is possible.",
        solution: "Build a bombproof multi-directional anchor using at least 3 solid protection pieces, with special attention to pieces that can hold upward pull. Test the anchor thoroughly before committing.",
        severity: "High",
        consequences: "Anchor failure during a fall would result in ground fall with no backup."
      },
      {
        title: "Clipping Brake Strand Through Protection",
        imageURL: "/images/mistakes/wrong-strand-clipped.svg",
        correctImageURL: "/images/mistakes/correct-strand-clipped.svg",
        description: "Accidentally clipping the brake strand (instead of the load strand) through protection pieces creates a dangerous situation where the rope bypasses your belay device.",
        solution: "Always visually confirm you're clipping the correct strand of rope - the load strand (usually coming from the anchor side) should go through all protection pieces. Color-coded ropes can help prevent this error.",
        severity: "Critical",
        consequences: "In a fall, the rope would pull directly from the anchor, bypassing your belay device completely, resulting in a full ground fall."
      },
      {
        title: "Forgetting the First Protection ('Jesus Piece')",
        imageURL: "/images/mistakes/missing-jesus-piece.svg",
        correctImageURL: "/images/mistakes/proper-jesus-piece.svg",
        description: "Not placing protection immediately after leaving the ground exposes you to a dangerous factor 2 fall directly onto your anchor.",
        solution: "Always place your first piece of protection ('Jesus piece') as soon as possible after leaving the ground - ideally within the first 1-2 meters of climbing.",
        severity: "High",
        consequences: "A factor 2 fall generates extreme forces that could damage equipment, break your anchor, or cause serious injuries."
      },
      {
        title: "Improper Chest Harness/Tether Setup",
        imageURL: "/images/mistakes/wrong-chest-harness.svg",
        correctImageURL: "/images/mistakes/correct-chest-harness.svg",
        description: "Using no chest harness or an improperly positioned tether can cause the belay device to sit at the wrong angle, affecting its ability to lock properly in a fall.",
        solution: "Use a proper chest harness or tether that holds the belay device in the correct orientation on your torso. It should be snug but not restrictive, and positioned so the device sits comfortably at chest height.",
        severity: "Medium",
        consequences: "The device may not feed rope smoothly or lock as effectively in a fall, potentially resulting in longer falls or harder catches."
      },
      {
        title: "System Transition Errors",
        imageURL: "/images/mistakes/transition-error.svg",
        correctImageURL: "/images/mistakes/proper-transition.svg",
        description: "Making errors during transitions between climbing, rappelling, and ascending in multi-pitch scenarios is a common cause of accidents.",
        solution: "Create and follow a methodical checklist for each transition. Always maintain redundancy during transitions, and never completely dismantle one system before establishing the next.",
        severity: "High",
        consequences: "Errors during transitions can lead to equipment drops, being stranded mid-route, or complete system failure."
      }
    ]
  };
  
  // Get mistakes data for the specified system
  const mistakes = mistakesData[system] || [];
  
  // If no data is available for the system
  if (mistakes.length === 0) {
    return (
      <div className="card">
        <h2>Common Mistakes Guide</h2>
        <p>No data available for this system yet.</p>
      </div>
    );
  }
  
  return (
    <div className="card" id="common-mistakes-guide">
      <h2>Common Mistakes and How to Avoid Them</h2>
      <p>Below are the most common errors climbers make when setting up {system.split('-').join(' ')} systems. Understanding these mistakes is crucial for your safety.</p>
      
      {/* Severity legend */}
      <div className="severity-legend" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#e74c3c', borderRadius: '50%' }}></span>
          <span>Critical Risk</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#f39c12', borderRadius: '50%' }}></span>
          <span>High Risk</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#3498db', borderRadius: '50%' }}></span>
          <span>Medium Risk</span>
        </div>
      </div>
      
      {/* Tabs navigation */}
      <div className="tabs-navigation" style={{ borderBottom: '1px solid #ddd', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {mistakes.map((mistake, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === index ? '#f5f5f5' : 'transparent',
                border: 'none',
                borderBottom: activeTab === index ? '3px solid #3498db' : '3px solid transparent',
                borderRadius: '4px 4px 0 0',
                cursor: 'pointer',
                fontWeight: activeTab === index ? 'bold' : 'normal',
                color: activeTab === index ? '#3498db' : '#333',
                position: 'relative'
              }}
            >
              {mistake.title}
              <span 
                style={{ 
                  position: 'absolute', 
                  top: '8px', 
                  right: '8px', 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 
                    mistake.severity === 'Critical' ? '#e74c3c' : 
                    mistake.severity === 'High' ? '#f39c12' : 
                    '#3498db'
                }}
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Active tab content */}
      <div className="tab-content">
        <div className="mistake-detail" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            className="mistake-header"
            style={{ 
              padding: '1rem',
              backgroundColor: 
                mistakes[activeTab].severity === 'Critical' ? 'rgba(231, 76, 60, 0.1)' : 
                mistakes[activeTab].severity === 'High' ? 'rgba(243, 156, 18, 0.1)' : 
                'rgba(52, 152, 219, 0.1)',
              borderLeft: 
                mistakes[activeTab].severity === 'Critical' ? '4px solid #e74c3c' : 
                mistakes[activeTab].severity === 'High' ? '4px solid #f39c12' : 
                '4px solid #3498db',
              borderRadius: '4px'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
              {mistakes[activeTab].title}
              <span 
                style={{ 
                  marginLeft: '1rem',
                  fontSize: '0.9rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: 
                    mistakes[activeTab].severity === 'Critical' ? '#e74c3c' : 
                    mistakes[activeTab].severity === 'High' ? '#f39c12' : 
                    '#3498db',
                  color: 'white'
                }}
              >
                {mistakes[activeTab].severity} Risk
              </span>
            </h3>
            <p style={{ margin: 0 }}>{mistakes[activeTab].description}</p>
          </div>
          
          <div className="comparison-images" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            <div className="wrong-setup" style={{ textAlign: 'center', flex: '1', minWidth: '300px' }}>
              <h4 style={{ color: '#e74c3c' }}>INCORRECT SETUP</h4>
              <div 
                style={{ 
                  padding: '1rem', 
                  border: '2px solid #e74c3c', 
                  borderRadius: '4px',
                  backgroundColor: 'rgba(231, 76, 60, 0.05)',
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={mistakes[activeTab].imageURL} 
                  alt={`Incorrect ${mistakes[activeTab].title}`} 
                  style={{ maxWidth: '100%', maxHeight: '250px' }}
                />
              </div>
              <p style={{ color: '#e74c3c', fontWeight: 'bold', marginTop: '0.5rem' }}>Potential Consequences:</p>
              <p>{mistakes[activeTab].consequences}</p>
            </div>
            
            <div className="correct-setup" style={{ textAlign: 'center', flex: '1', minWidth: '300px' }}>
              <h4 style={{ color: '#27ae60' }}>CORRECT SETUP</h4>
              <div 
                style={{ 
                  padding: '1rem', 
                  border: '2px solid #27ae60', 
                  borderRadius: '4px',
                  backgroundColor: 'rgba(39, 174, 96, 0.05)',
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={mistakes[activeTab].correctImageURL} 
                  alt={`Correct ${mistakes[activeTab].title}`} 
                  style={{ maxWidth: '100%', maxHeight: '250px' }}
                />
              </div>
              <p style={{ color: '#27ae60', fontWeight: 'bold', marginTop: '0.5rem' }}>Proper Solution:</p>
              <p>{mistakes[activeTab].solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonMistakesGuide;
