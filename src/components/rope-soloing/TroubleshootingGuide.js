import React, { useState } from 'react';

const TroubleshootingGuide = () => {
  const [activeIssue, setActiveIssue] = useState(null);

  const issues = [
    {
      id: 'rope-feed',
      title: 'Rope Feeding Issues',
      problem: "Device locks up or rope doesn't feed smoothly while climbing",
      causes: [
        'Incorrect device orientation',
        'Rope too thick or thin for device',
        'Rope path obstruction (dirt or debris in device)',
        'Excessive drag from protection placements',
        'Improper weighting of device'
      ],
      solutions: [
        'Double-check device orientation according to manufacturer instructions',
        'Use a rope diameter appropriate for your device (typically 8.9-10.5mm)',
        'Clean your device regularly and inspect before each use',
        'Use longer slings on protection to reduce rope drag',
        'Ensure device is properly weighted by your body position'
      ],
      risksIfNotSolved: 'Inability to make upward progress, excessive fatigue, or dangerous situations where you need to feed slack but cannot.'
    },
    {
      id: 'backup-knots',
      title: 'Backup Knot Issues',
      problem: 'Backup knots jamming in device or causing rope management difficulties',
      causes: [
        'Knots tied too large or bulky',
        'Incorrect spacing between knots',
        'Wrong type of knot for the system',
        'Too many backup knots creating rope management issues'
      ],
      solutions: [
        'Use simple overhand knots or figure eights on a bight (clip these to harness)',
        'Space knots appropriately: 1-2m for steep terrain, 3-5m for less steep',
        'Practice your system on the ground to find optimal knot spacing',
        'Consider alternative backup methods like prusiks for certain situations'
      ],
      risksIfNotSolved: 'In case of device failure, falling much further than anticipated, or being unable to re-ascend the rope if needed.'
    },
    {
      id: 'device-locking',
      title: 'Device Not Locking in a Fall',
      problem: 'Self-belay device not engaging properly during a fall',
      causes: [
        'Device not oriented correctly',
        'Rope diameter incompatible with device',
        'Cam mechanism obstructed or damaged',
        'User error in device setup',
        'Dynamic rope stretch reducing cam engagement force'
      ],
      solutions: [
        'Verify device orientation before leaving the ground',
        'Test the device by weighting it close to the ground',
        "Ensure you're using a rope within the manufacturer's specifications",
        "Check the device's cam spring and movement before each use",
        'Consider using a more static rope for certain soloing applications'
      ],
      risksIfNotSolved: 'Catastrophic failure of the safety system, potentially resulting in ground fall.'
    },
    {
      id: 'rope-drag',
      title: 'Excessive Rope Drag',
      problem: 'Difficulty making upward progress due to excessive rope drag',
      causes: [
        'Protection placed in zigzag pattern',
        'Not using long enough slings or draws',
        'Complex route with many directional changes',
        'Rope running over rough surfaces',
        'Too much rope in the system'
      ],
      solutions: [
        'Use alpine draws or longer slings at directional changes',
        'Plan protection placements to create as straight a rope path as possible',
        'Consider placing less protection where safe to do so',
        'For multi-pitch, consider managing the system in shorter sections',
        'Use a thinner diameter rope if appropriate for your device'
      ],
      risksIfNotSolved: 'Inability to complete the route, excessive fatigue, or dangerous situations where you cannot clip the next piece.'
    },
    {
      id: 'ascending',
      title: 'Difficulty Re-ascending the Rope',
      problem: 'Unable to effectively re-ascend the rope after falling or resting',
      causes: [
        'Lack of proper ascending tools',
        'Inefficient ascending technique',
        'System configuration makes ascending difficult',
        'Excessive rope stretch making progress difficult',
        'Exhaustion or insufficient strength'
      ],
      solutions: [
        'Always carry at least two friction hitches or mechanical ascenders',
        'Practice rope ascending techniques before soloing',
        'Consider using a more static rope for less stretch',
        'Develop a specific plan for ascending in your system',
        'Regular training in rope ascending techniques and strength building'
      ],
      risksIfNotSolved: 'Being stranded on the rope, unable to continue climbing or descend safely.'
    },
    {
      id: 'rope-management',
      title: 'Complex Rope Management',
      problem: 'Dealing with excess rope, tangles, or rope bags while soloing',
      causes: [
        'Improper initial rope flaking',
        'Inadequate rope bag or container',
        'Wind or environmental factors affecting rope',
        'Complex terrain interfering with rope management',
        'Lack of practice with the system'
      ],
      solutions: [
        'Carefully flake rope into a rope bag with a clean feed from the bottom',
        'Consider specially designed rope bags with clean feeding systems',
        'Secure the rope bag to prevent movement and tangles',
        'For windy conditions, use heavier rope bags or secure them better',
        'Practice your rope management system extensively before soloing'
      ],
      risksIfNotSolved: 'Tangles leading to inability to feed rope, dangerous climbing situations, or forced retreat.'
    }
  ];

  return (
    <div id="troubleshooting-guide" style={{ marginBottom: '3rem' }}>
      <h2>Rope Soloing Troubleshooting Guide</h2>
      <p>
        Even with proper preparation, issues can arise while rope soloing. This guide helps you identify,
        diagnose, and solve common problems you might encounter.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        {issues.map(issue => (
          <button
            key={issue.id}
            onClick={() => setActiveIssue(activeIssue === issue.id ? null : issue.id)}
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: activeIssue === issue.id ? 'var(--primary-color)' : 'white',
              color: activeIssue === issue.id ? 'white' : 'var(--primary-color)',
              border: '1px solid var(--primary-color)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: activeIssue === issue.id ? 'bold' : 'normal',
              transition: 'all 0.2s ease',
              flexGrow: 1,
              minWidth: '200px',
              textAlign: 'center'
            }}
          >
            {issue.title}
          </button>
        ))}
      </div>

      {activeIssue && (
        <div className="card" style={{ 
          padding: '2rem',
          transition: 'all 0.3s ease',
          animation: 'fadeIn 0.3s ease'
        }}>
          {issues.filter(issue => issue.id === activeIssue).map(issue => (
            <div key={issue.id}>
              <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>
                {issue.title}
              </h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Problem:</h4>
                <p style={{ fontSize: '1.1rem', marginTop: 0 }}>{issue.problem}</p>
              </div>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '2rem', 
                marginBottom: '1.5rem' 
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Potential Causes:</h4>
                  <ul style={{ marginTop: 0 }}>
                    {issue.causes.map((cause, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>{cause}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Solutions:</h4>
                  <ul style={{ marginTop: 0 }}>
                    {issue.solutions.map((solution, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(231, 76, 60, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '4px',
                borderLeft: '4px solid #e74c3c' 
              }}>
                <h4 style={{ marginTop: 0, color: '#e74c3c' }}>⚠️ Risk If Not Addressed:</h4>
                <p style={{ marginBottom: 0 }}>{issue.risksIfNotSolved}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TroubleshootingGuide;
