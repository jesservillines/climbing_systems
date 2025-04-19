import React, { useState } from 'react';

const SystemSetupWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      title: "Anchor Setup",
      description: "Setting up a bomber anchor is the first critical step in rope soloing.",
      instructions: [
        "Choose a solid anchor point with multiple pieces if possible",
        "Ensure your anchor is multi-directional and equalized if using multiple pieces",
        "Always back up your primary anchors",
        "Consider using a cordelette or quad anchor for clean multi-piece anchors"
      ],
      tips: "For a lead rope solo setup, your anchor should be able to handle forces in multiple directions, as you'll be pulling on it from below while climbing and potentially loading it in a fall."
    },
    {
      title: "Device Preparation",
      description: "Preparing your self-belay device correctly is essential for safe rope soloing.",
      instructions: [
        "Inspect your device for any damage or excessive wear",
        "If using a GriGri, ensure the cam moves freely and springs back properly",
        "Check for any debris in the device that could affect function",
        "Verify the device is appropriate for your rope diameter"
      ],
      tips: "Many rope solo accidents happen due to improper device setup or orientation. Always double-check manufacturer instructions for your specific device."
    },
    {
      title: "Rope Management",
      description: "Proper rope management is crucial to prevent tangles and ensure the system functions correctly.",
      instructions: [
        "Flake your rope carefully, ensuring it's free of twists and knots",
        "Consider using a rope bag or tarp at the base to keep the rope clean and tangle-free",
        "Prepare the rope with appropriate backup knots if your system requires them",
        "Ensure your rope is of appropriate length for the route plus extra for anchor systems"
      ],
      tips: "For routes longer than half your rope length, you'll need a special strategy for rope management. Consider pre-placing interim anchors or bringing a second rope."
    },
    {
      title: "Harness Setup",
      description: "Your harness configuration is critical for rope soloing safety and efficiency.",
      instructions: [
        "Position your belay device on your belay loop according to the manufacturer's recommendation",
        "Verify all carabiners are locked and properly oriented",
        "Organize gear on your harness for easy access while climbing",
        "Add any required tethers or safety backups to your harness"
      ],
      tips: "Keep your harness setup clean and minimal. Excess gear can interfere with your self-belay device or make movement more difficult."
    },
    {
      title: "Backup Systems",
      description: "Backup systems are essential when rope soloing because you don't have a partner checking your work.",
      instructions: [
        "Add backup knots at appropriate intervals in your braking strand",
        "Consider using a backup ascender or prusik as an additional safety measure",
        "Always have a way to escape the system if something goes wrong",
        "Test all backup systems before leaving the ground"
      ],
      tips: "The frequency of backup knots depends on the terrain - more frequent on lower-angle terrain where rope slippage is more likely, less frequent on steeper terrain."
    },
    {
      title: "Pre-Climb Safety Check",
      description: "Before leaving the ground, perform a comprehensive safety check of your entire system.",
      instructions: [
        "Verify device orientation and locking",
        "Test the system under body weight close to the ground",
        "Check that all carabiners are locked",
        "Ensure your rope is feeding smoothly through the system",
        "Double-check that your backup systems are functional"
      ],
      tips: "Consider taking a photo of your setup with your phone before leaving the ground. You can reference this if you're unsure about something while on the route."
    }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumpToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const currentStepData = steps[currentStep];

  return (
    <div id="system-setup-wizard" style={{ marginBottom: '3rem' }}>
      <h2>Interactive Rope Soloing Setup Wizard</h2>
      <p>
        Follow this step-by-step guide to properly set up your rope soloing system. Each step includes critical
        safety information and setup tips.
      </p>

      {/* Progress indicator */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        margin: '2rem 0', 
        position: 'relative' 
      }}>
        {/* Progress line */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '0', 
          right: '0', 
          height: '2px', 
          backgroundColor: '#e0e0e0', 
          zIndex: 0 
        }}></div>
        
        {/* Highlight completed portion */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '0', 
          width: `${(currentStep / (steps.length - 1)) * 100}%`, 
          height: '2px', 
          backgroundColor: 'var(--primary-color)', 
          zIndex: 1,
          transition: 'width 0.3s ease' 
        }}></div>
        
        {/* Step circles */}
        {steps.map((step, index) => (
          <div 
            key={index}
            onClick={() => jumpToStep(index)}
            style={{ 
              width: '30px', 
              height: '30px', 
              borderRadius: '50%', 
              backgroundColor: index <= currentStep ? 'var(--primary-color)' : 'white', 
              border: `2px solid ${index <= currentStep ? 'var(--primary-color)' : '#e0e0e0'}`,
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: index <= currentStep ? 'white' : '#757575',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 2,
              position: 'relative'
            }}
          >
            {index + 1}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              fontSize: '0.8rem', 
              whiteSpace: 'nowrap',
              fontWeight: index === currentStep ? 'bold' : 'normal',
              color: index === currentStep ? 'var(--primary-color)' : '#757575',
            }}>
              {step.title}
            </div>
          </div>
        ))}
      </div>

      {/* Current step content */}
      <div className="card" style={{ padding: '2rem', marginTop: '3rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>
          Step {currentStep + 1}: {currentStepData.title}
        </h3>
        
        <p style={{ fontSize: '1.1rem' }}>{currentStepData.description}</p>
        
        <div style={{ 
          backgroundColor: 'rgba(52, 152, 219, 0.1)', 
          padding: '1.5rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem' 
        }}>
          <h4 style={{ marginTop: 0 }}>Instructions:</h4>
          <ul>
            {currentStepData.instructions.map((instruction, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{instruction}</li>
            ))}
          </ul>
        </div>
        
        <div style={{ 
          backgroundColor: 'rgba(241, 196, 15, 0.1)', 
          padding: '1.5rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          borderLeft: '4px solid #f1c40f' 
        }}>
          <h4 style={{ marginTop: 0 }}>💡 Pro Tip:</h4>
          <p style={{ marginBottom: 0 }}>{currentStepData.tips}</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <button 
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: currentStep === 0 ? '#e0e0e0' : 'white',
              color: currentStep === 0 ? '#757575' : 'var(--primary-color)',
              border: '1px solid var(--primary-color)',
              borderRadius: '4px',
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
              fontWeight: '500'
            }}
          >
            Previous Step
          </button>
          
          <button 
            onClick={handleNextStep}
            disabled={currentStep === steps.length - 1}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: currentStep === steps.length - 1 ? '#e0e0e0' : 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer',
              fontWeight: '500'
            }}
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSetupWizard;
