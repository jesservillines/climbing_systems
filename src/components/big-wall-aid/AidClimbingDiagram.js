import React from 'react';

const AidClimbingDiagram = () => {
  return (
    <div className="section">
      <h2>Aid Climbing Systems and Techniques Visualization</h2>
      
      <div className="diagram-container" style={{ 
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginTop: '1rem',
        marginBottom: '2rem',
        backgroundColor: 'rgba(var(--light-bg-color-rgb), 0.3)'
      }}>
        <h3>Basic Aid Climbing Progression</h3>
        <div className="aid-diagram">
          <div className="diagram-image" style={{ textAlign: 'center' }}>
            <img 
              src="/images/aid-climbing-sequence.jpg" 
              alt="Diagram showing the sequence of aid climbing movements" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <p className="image-caption">
              Aid climbing progression showing the step-by-step sequence: 1) Place gear, 2) Test placement, 3) Weight gear and clip aider, 
              4) Step up as high as possible, 5) Place next piece, and 6) Progress upward.
            </p>
          </div>
          
          <div className="diagram-explanation">
            <ol>
              <li><strong>Place Protection:</strong> Leader places a piece of gear (cam, nut, hook, etc.) as high as possible</li>
              <li><strong>Test the Piece:</strong> Carefully test the gear to ensure it will hold body weight</li>
              <li><strong>Clip and Weight:</strong> Attach aider (etrier) and daisy chain to the piece, then transfer weight onto it</li>
              <li><strong>Step Up:</strong> Climb up the aider steps, getting as high as possible (often "top-stepping")</li>
              <li><strong>Secure Position:</strong> Use a fifi hook to maintain position while placing the next piece</li>
              <li><strong>Clip Rope:</strong> Once secure on the new placement, clip the rope to the previous piece</li>
              <li><strong>Repeat:</strong> Continue the sequence to progress up the wall</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="diagram-container" style={{ 
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'rgba(var(--light-bg-color-rgb), 0.3)'
      }}>
        <h3>The Second's System: Jumaring and Cleaning</h3>
        <div className="jumar-diagram">
          <div className="diagram-image" style={{ textAlign: 'center' }}>
            <img 
              src="/images/jumar-cleaning-system.jpg" 
              alt="Diagram showing a climber using ascenders to clean a pitch" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <p className="image-caption">
              The second climber's setup showing the dual ascender system with proper backup. The climber ascends the fixed rope while removing protection.
            </p>
          </div>
          
          <div className="diagram-explanation">
            <ol>
              <li><strong>Top Ascender:</strong> Connected to harness with adjustable tether and positioned above</li>
              <li><strong>Bottom Ascender:</strong> Connected to foot loop/aider for standing and pushing up</li>
              <li><strong>Safety Backup:</strong> Periodic backup knots or third device (GriGri) connected below</li>
              <li><strong>Cleaning Process:</strong> At each piece, unclip rope, remove gear, and continue ascending</li>
              <li><strong>Traverse Technique:</strong> For horizontal sections, use lower-out techniques to manage swing</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="diagram-container" style={{ 
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'rgba(var(--light-bg-color-rgb), 0.3)'
      }}>
        <h3>Hauling Systems</h3>
        <div className="hauling-diagram">
          <div className="diagram-image" style={{ textAlign: 'center' }}>
            <img 
              src="/images/hauling-system-diagram.jpg" 
              alt="Diagram showing both 1:1 and 2:1 hauling systems" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <p className="image-caption">
              Comparison of 1:1 direct hauling (left) and 2:1 mechanical advantage hauling system (right) for lifting heavy loads up a big wall.
            </p>
          </div>
          
          <div className="diagram-explanation">
            <h4>1:1 Direct Hauling</h4>
            <ul>
              <li>Progress capture pulley attached to anchor</li>
              <li>Static haul line running from haul bag through pulley</li>
              <li>Hauler pulls directly on rope</li>
              <li>Simple but requires more strength</li>
            </ul>
            
            <h4>2:1 Mechanical Advantage</h4>
            <ul>
              <li>Pulley attached to haul bag</li>
              <li>Rope redirected through pulley back to anchor</li>
              <li>Climber pulls down, creating mechanical advantage</li>
              <li>Moves half the distance but requires half the force</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="diagram-container" style={{ 
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '1.5rem',
        backgroundColor: 'rgba(var(--light-bg-color-rgb), 0.3)'
      }}>
        <h3>Portaledge Setup</h3>
        <div className="portaledge-diagram">
          <div className="diagram-image" style={{ textAlign: 'center' }}>
            <img 
              src="/images/portaledge-setup.webp" 
              alt="Diagram showing proper portaledge setup and anchor configuration" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <p className="image-caption">
              Proper portaledge deployment showing main suspension point, frame assembly, and fly configuration for weather protection.
            </p>
          </div>
          
          <div className="diagram-explanation">
            <h4>Key Components:</h4>
            <ul>
              <li><strong>Main Suspension:</strong> Single-point or multi-point hanging system</li>
              <li><strong>Frame Structure:</strong> Interlocking tubes that create a rigid platform</li>
              <li><strong>Bed Platform:</strong> Tensioned fabric that creates sleeping surface</li>
              <li><strong>Weather Fly:</strong> Waterproof cover that protects from elements</li>
              <li><strong>Anchor Distribution:</strong> Proper placement of portaledge, haul bags, and climbers at belay</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="note" style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
        Note: The diagrams represent general techniques. Specific equipment setups may vary based on manufacturer recommendations and personal preferences. 
        Always practice these systems in a safe environment before attempting on a big wall.
      </p>
    </div>
  );
};

export default AidClimbingDiagram;
