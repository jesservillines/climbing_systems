import React from 'react';
import InteractiveDiagram from '../shared/InteractiveDiagram';

const LeadRopeSoloDiagram = () => {
  // Define enhanced hotspots for the interactive diagram with more detailed educational content
  const hotspots = [
    {
      x: 50,
      y: 92, // Ground anchor position
      title: "Multi-Directional Anchor",
      description: "The starting anchor must be able to hold forces in ALL directions, especially upward pull during a lead fall. Use at least two solid pieces or bolts, and add a piece specifically for upward pull. This is different from top-rope soloing where the anchor primarily holds downward force.",
      safetyNote: "A poorly built anchor is the most common point of catastrophic failure in rope soloing systems. Always test the anchor by pulling hard in all directions before leaving the ground.",
      tooltipPosition: "right"
    },
    {
      x: 45, 
      y: 70, // Grigri position
      title: "GriGri Orientation (Critical)",
      description: "The GriGri must be oriented with the 'climber side' receiving the rope from the anchor - this is typically upside-down compared to normal belaying. The chest harness holds it in proper position. This orientation allows the cam to engage when weighted in a fall.",
      safetyNote: "Incorrect orientation WILL NOT catch a fall and is the most common fatal error. Always test under controlled conditions before committing.",
      tooltipPosition: "left"
    },
    {
      x: 55, 
      y: 80, // Backup knot position
      title: "Backup Knots System",
      description: "Tie backup knots (figure-8 on a bight or overhand on a bight) every 5-10 meters on the brake strand. Clip these to separate gear loops on your harness. If your device fails or slips, these knots will jam against it and arrest your fall.",
      safetyNote: "A GriGri alone is not reliable for self-belaying without backup knots. Remember to untie each backup knot as you climb past it.",
      tooltipPosition: "right"
    },
    {
      x: 45, 
      y: 60, // Load strand path
      title: "Load Strand (Green)",
      description: "This is the critical rope path that runs from the anchor, through each protection piece, to your device's 'climber side'. This strand holds your weight in a fall, and it's crucial that the rope runs along this exact path through your protection.",
      safetyNote: "Never clip the brake strand (red) through protection by mistake - this bypasses your belay device and would result in free-fall.",
      tooltipPosition: "left"
    },
    {
      x: 58, 
      y: 65, // Jesus piece position
      title: "First Protection ('Jesus Piece')",
      description: "The first piece of protection should be placed as soon as possible. This critical piece reduces the impact of a potential factor 2 fall (falling directly onto the anchor), which generates extreme forces that could damage equipment or the anchor itself.",
      safetyNote: "Without this piece, a fall near the start would generate a factor-2 fall - the most dangerous fall possible in climbing.",
      tooltipPosition: "right"
    },
    {
      x: 38,
      y: 55, // Chest harness position
      title: "Chest Harness/Tether",
      description: "A simple chest harness or tether holds the GriGri in the correct orientation on your torso. This serves two crucial functions: it improves rope feeding while climbing and ensures the device maintains proper locking angle during a fall.",
      safetyNote: "The chest harness is not load-bearing but orienting. It should hold the device firmly but allow it to rotate if you invert during a fall.",
      tooltipPosition: "left"
    },
    {
      x: 50, 
      y: 42, // Higher position pieces - centered with other hotspots
      title: "Protection Placement Strategy",
      description: "Place protection regularly to reduce fall distances and create a clean rope path. Consider how the rope will run through your gear - each piece should minimize rope drag while maintaining a direct path back to you. This becomes especially important on traversing terrain.",
      safetyNote: "Also consider how you'll clean the gear on rappel - traversing sections can be particularly challenging when cleaning solo.",
      tooltipPosition: "right"
    },
    {
      x: 75, 
      y: 36, // Fall scenario box - centered above the box
      title: "Fall Management Protocol",
      description: "When you fall, the GriGri should lock automatically. Immediately get your hand on the brake strand and consider tying off the system before continuing. Assess your gear placement and situation carefully before resuming climbing.",
      safetyNote: "Unlike with a partner belay, you may experience more sudden, harder catches since the GriGri has no dynamic belayer movement to soften the impact.",
      tooltipPosition: "left"
    },
    {
      x: 25, 
      y: 36, // Multi-pitch transition - centered above the box
      title: "Multi-Pitch Transition Sequence",
      description: "After leading a pitch: 1) Fix the rope to the top anchor (redundantly), 2) Switch to rappel mode, 3) Descend while cleaning protection, 4) Return to the bottom, 5) Switch to ascender mode and jumar back up. This means each pitch is effectively climbed three times.",
      safetyNote: "Having clear transitions between systems (lead → rappel → ascend) is critical. Many accidents happen during these transitions.",
      tooltipPosition: "right"
    }
  ];

  return (
    <div className="card">
      <h2>Interactive Lead Rope Soloing Diagram</h2>
      <p>
        This comprehensive diagram shows the complete lead rope soloing system using a GriGri. 
        The diagram illustrates proper rope path, device orientation, backup systems, and the 
        overall process from start to finish. Click on the numbered points to learn detailed information 
        about each component of the system.
      </p>
      <InteractiveDiagram 
        src="/images/diagrams/lead-rope-soloing-diagram-enhanced-v3.svg"
        alt="Lead Rope Soloing System Diagram showing proper setup with GriGri and backup systems"
        hotspots={hotspots}
      />
      <div className="diagram-legend" style={{ 
        marginTop: '1rem', 
        backgroundColor: 'rgba(0,0,0,0.03)', 
        padding: '1rem', 
        borderRadius: '8px' 
      }}>
        <h3>Legend</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '30px', 
              height: '10px', 
              background: 'linear-gradient(to right, #27ae60, #2ecc71)', 
              marginRight: '8px',
              borderRadius: '2px' 
            }}></span>
            <span><strong>Load Strand</strong> - from anchor through protection to device</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '30px', 
              height: '10px', 
              background: 'linear-gradient(to right, #c0392b, #e74c3c)',
              marginRight: '8px',
              borderRadius: '2px' 
            }}></span>
            <span><strong>Brake Strand</strong> - free end from device with backup knots</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '20px', 
              height: '20px', 
              backgroundColor: '#f1c40f',
              marginRight: '8px',
              borderRadius: '50%',
              border: '1px solid #f39c12'
            }}></span>
            <span><strong>Protection Pieces</strong> - cams, nuts, bolts, etc.</span>
          </div>
        </div>
      </div>
      
      <div className="safety-note" style={{
        margin: '1.5rem 0',
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        borderLeft: '4px solid #e74c3c',
        borderRadius: '4px'
      }}>
        <h4 style={{ color: '#c0392b', margin: '0 0 0.5rem 0' }}>Important Safety Note</h4>
        <p style={{ margin: '0', lineHeight: '1.5' }}>
          This diagram is for educational purposes only. Lead rope soloing is an advanced technique with 
          serious risks. Improper setup can result in equipment failure, injury, or death. Always seek 
          proper instruction from qualified professionals and practice extensively in controlled environments 
          before attempting these techniques in the field.
        </p>
      </div>
    </div>
  );
};

export default LeadRopeSoloDiagram;
