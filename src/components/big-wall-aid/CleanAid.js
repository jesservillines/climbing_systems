import React from 'react';

const CleanAid = () => {
  return (
    <div className="section">
      <h2>Clean Aid Climbing</h2>
      
      <p>
        As gear and ethics have evolved, a major distinction in aid climbing is "clean" aid versus "nailing". Clean aid has become the preferred style on almost all established routes today because it minimizes impact on the rock.
      </p>

      <div className="clean-aid-section">
        <h3>What is Clean Aid?</h3>
        <p>
          Clean aid means ascending using gear that does not damage the rock – no hammering of pitons or copperheads, and no drilling of holes. Instead, climbers use removable protection like nuts, cams, cam hooks, and hand-placed piton variants, relying on natural features.
        </p>
        <p>
          It's essentially aid climbing without bolts, pitons or any gear that scars the rock or remains fixed. For example, instead of hammering a piton into a crack, a clean aid climber might place an offset micro-cam or a tiny nut in the same spot.
        </p>
        <p>
          The Yosemite climbing community in the 1970s pioneered this clean climbing ethic: climbers like Royal Robbins and Yvon Chouinard advocated leaving no trace (Chouinard famously introduced aluminum chockstones to replace pitons). Guidebooks use the rating "C" (C1, C2, etc.) to indicate clean-possible aid grades. Climbing a pitch at C2 means it can be done clean at that difficulty.
        </p>
      </div>

      <div className="clean-aid-section">
        <h3>Modern Gear for Clean Aid</h3>
        <p>
          The push for clean climbing has driven innovation in gear. For example:
        </p>
        <ul>
          <li><strong>Offset micro nuts and brass nuts:</strong> Can fit piton scars without further widening them</li>
          <li><strong>Totem Cams:</strong> Unique loading that allows placement in shallow or flared pockets</li>
          <li><strong>Cam hooks:</strong> Allow progress up thin cracks by camming against the walls without hammering</li>
          <li><strong>Large cams and Big Bros:</strong> For larger cracks, avoiding the need for big angle pitons</li>
          <li><strong>Removable rivet hangers:</strong> Cleaner alternatives to fixed rivets or machine heads</li>
          <li><strong>Beak-like pitons used passively:</strong> Placed by hand rather than hammered</li>
        </ul>
        <p>
          All these tools mean that nail-ups are rarer, and most classic routes go clean. In fact, many areas (like Zion National Park or Arches in the U.S.) explicitly require clean techniques – their sandstone is soft, and regulations forbid piton use except in emergencies.
        </p>
      </div>

      <div className="clean-aid-section">
        <h3>Clean Aid Techniques</h3>
        
        <h4>Finding Natural Placements</h4>
        <p>
          Clean aid requires a careful eye for identifying natural features that can accept protection. This means looking for:
        </p>
        <ul>
          <li>Small edges or flakes for hooks</li>
          <li>Thin cracks for offset nuts and micro cams</li>
          <li>Shallow pockets for camming units</li>
          <li>Flared seams for specialized offset cams</li>
        </ul>
        
        <h4>Stacking and Opposition</h4>
        <p>
          Sometimes a single piece isn't secure enough. Clean aid climbers will often "stack" pieces - placing multiple pieces in the same area that work together. For example, placing two offset nuts that oppose each other in a flaring crack can create a more secure placement than either piece alone.
        </p>
        
        <h4>Bounce Testing Safely</h4>
        <p>
          Testing clean placements is crucial but requires care. The climber must be prepared to catch themselves on their previous piece if the tested piece fails. This typically means:
        </p>
        <ul>
          <li>Keeping a hand on the previous aider or piece</li>
          <li>Testing with increasing force incrementally</li>
          <li>Backing up marginal placements with additional pieces when possible</li>
        </ul>
      </div>

      <div className="clean-aid-section">
        <h3>Clean Aid Rating System</h3>
        <p>
          Clean aid is rated using the "C" scale:
        </p>
        <ul>
          <li><strong>C1:</strong> Straightforward aid on bomber gear – typically cams and nuts that are obvious and solid</li>
          <li><strong>C2:</strong> Moderate aid with generally good placements, but may involve some body-weight-only gear or hooks</li>
          <li><strong>C3:</strong> Hard aid with marginal placements that might only hold body weight, often with complex setups</li>
          <li><strong>C4:</strong> Difficult aid with many consecutive marginal placements that could rip out</li>
          <li><strong>C5:</strong> Extremely difficult and dangerous – multiple body-weight-only placements in sequence, where each must hold or a serious fall could result</li>
        </ul>
        <p>
          This is in contrast to the traditional "A" rating system, which assumes hammered protection might be used. Many formerly A4/A5 routes have been downgraded to C4/C5 as gear improved and climbers found ways to do them clean.
        </p>
      </div>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Clean Aid Climbing Benefits</h4>
        <ul>
          <li><strong>Environmental Impact:</strong> Preserves the rock for future generations</li>
          <li><strong>Efficiency:</strong> Often faster than nailing (no hammering or removing stuck pitons)</li>
          <li><strong>Weight Savings:</strong> No need to carry heavy hammer and pitons</li>
          <li><strong>Stealth:</strong> Quieter climbing without hammer noise (important in some areas)</li>
          <li><strong>Advanced Technique:</strong> Requires and develops more refined placement skills</li>
          <li><strong>Ethics:</strong> Aligns with modern "leave no trace" outdoor ethics</li>
        </ul>
      </div>
    </div>
  );
};

export default CleanAid;
