import React from 'react';

const Hauling = () => {
  return (
    <div className="section">
      <h2>Hauling and Belay Management</h2>
      
      <p>
        One hallmark of big wall climbing is hauling – bringing up the heavy haul bag with all your supplies after the leader and second have completed a pitch. Hauling is usually done by the second (after cleaning the pitch) or sometimes by the leader if blocks of leads are being done.
      </p>

      <div className="image-container" style={{ marginBottom: '1.5rem' }}>
        <img 
          src="/images/hauling-system.jpg" 
          alt="A typical big wall hauling setup with a progress-capture pulley" 
          className="full-width-image"
          style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <p className="image-caption">
          Diagram of a typical big wall belay setup, with a portaledge (red) hung from one anchor bolt and a heavy haul bag (yellow) hung from another. The anchor is organized so that both the ledge and the bag are secure and accessible.
        </p>
      </div>

      <div className="hauling-section">
        <h3>Haul Setup</h3>
        <p>
          The haul rope (static line) is typically fixed to the bags at the lower belay and runs through a pulley at the upper belay. Once the leader is off-belay and the anchor above is ready, the haul bag is released from the lower anchor (often hanging free). The second climber (or leader, depending on strategy) then uses mechanical advantage to haul the bag up.
        </p>
        <p>
          A common simple system is a 1:1 haul with a progress-capture pulley like the Pro Traxion – the hauler pulls directly on the haul line; each pull lifts the bag a bit, and the cam in the pulley prevents it from sliding back. The hauler might sit in their harness and yard on the rope hand-over-hand, or even stand on the portaledge or a foothold if available to use body weight.
        </p>
        <p>
          Heavy loads can be exhausting to haul 1:1; in such cases, climbers use a 2:1 "counterweight" haul or far-end haul trick: by redirecting the rope through an ascender on the bag and pulling down on the rope's free end, you effectively haul the bag with mechanical advantage (at the cost of pulling more rope through).
        </p>
      </div>

      <div className="hauling-section">
        <h3>Docking and Belay Changeovers</h3>
        <p>
          When the bag reaches the new belay, it needs to be secured (docked) to the anchor. Big wall climbers commonly use a docking tether – e.g., a length of cordelette with a munter-mule knot – to tie off the haul bag when it arrives. This allows them to transfer the weight off the haul system gradually and tie off the bag.
        </p>
        <p>
          Organizing the belay is an art: a typical crowded big wall belay might have two climbers, a haul bag or two, perhaps a portaledge, and an assortment of gear clusters. Keeping the anchor area neat and hanging items in an order (for example, haul bag on one bolt, climbers on central anchor point, portaledge on another bolt, etc.) prevents tangles.
        </p>
        <p>
          Leaders often think ahead while building anchors to place gear in such a way that there's room for the portaledge next to the haul bag, etc.
        </p>
      </div>

      <div className="hauling-section">
        <h3>Common Hauling Problems and Solutions</h3>
        
        <h4>Problem: Bag Getting Stuck</h4>
        <p>
          <strong>Cause:</strong> Haul bag catching on features or in cracks during hauling.
        </p>
        <p>
          <strong>Solution:</strong> Use a tagline attached to the bottom of the haul bag to pull it away from the wall. The second can also use a long stick to push the bag away from obstacles. In severe cases, someone may need to rappel down to free the bag.
        </p>
        
        <h4>Problem: Inefficient Hauling</h4>
        <p>
          <strong>Cause:</strong> Using only arm strength or poor body positioning.
        </p>
        <p>
          <strong>Solution:</strong> Use your body weight rather than arm strength when possible. Position yourself so you can pull down using gravity. For heavy loads, switch to a 2:1 mechanical advantage system.
        </p>
        
        <h4>Problem: Rope Twisting</h4>
        <p>
          <strong>Cause:</strong> Haul bag spinning during ascent.
        </p>
        <p>
          <strong>Solution:</strong> Periodically stop and untwist the rope. Use an anti-spin leash on the haul bag, or clip the haul bag to the wall with a quickdraw to prevent rotation.
        </p>
      </div>

      <div className="hauling-section">
        <h3>Advanced Hauling Strategies</h3>
        
        <h4>Piggyback Hauling</h4>
        <p>
          For extremely heavy loads or when hauling multiple bags, some teams use piggyback hauling – stacking bags and hauling them together. This requires robust anchor systems and strong haulers, but can save time compared to multiple separate hauls.
        </p>
        
        <h4>Counterweight Hauling</h4>
        <p>
          In this system, the hauler attaches themselves to the free end of the rope after it passes through the progress-capture pulley, then uses their body weight to counterhaul by simply descending on the rope. This is especially useful for solo climbers or when the haul bag is significantly heavier than the hauler.
        </p>
        
        <h4>Mechanical Advantage Systems</h4>
        <p>
          For the heaviest loads, climbers can set up more complex 3:1 or even 5:1 mechanical advantage systems using multiple pulleys. While these systems require more setup time and rope, they can make hauling extremely heavy loads possible for smaller climbers.
        </p>
      </div>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Hauling Efficiency Tips</h4>
        <ul>
          <li>Use a static rope for hauling to prevent energy loss through rope stretch</li>
          <li>Protect the rope from sharp edges using edge protectors or padding</li>
          <li>Pack the haul bag properly with heavier items at the bottom to prevent flipping</li>
          <li>Secure all items inside the haul bag - anything loose can be lost during hauling</li>
          <li>Consider using a lower-out line to keep the haul bag from swinging away from the wall</li>
          <li>Have the leader pre-rig the haul system while building the anchor to save time</li>
        </ul>
      </div>
    </div>
  );
};

export default Hauling;
