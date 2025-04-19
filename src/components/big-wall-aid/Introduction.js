import React from 'react';

const Introduction = () => {
  return (
    <div className="section">
      <h2>Overview of Big Wall and Aid Climbing</h2>
      
      <div className="image-container" style={{ marginBottom: '1.5rem' }}>
        <img 
          src="/images/introduction-bigwall.png" 
          alt="A climber carefully inching up an aid pitch on a big wall in Yosemite." 
          className="full-width-image"
          style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <p className="image-caption">
          A climber carefully inching up an aid pitch on a big wall in Yosemite. Big wall routes often involve steep, sustained aid climbing with complex gear systems.
        </p>
      </div>

      <h3>What is Big Wall Climbing?</h3>
      <p>
        Big wall climbing refers to climbing large, long rock faces that typically take multiple days (often involving one or more nights spent on the wall) to complete. 
        These climbs are usually sheer multi-pitch routes hundreds of meters tall, where climbers are exposed on the face for extended periods. Big walls are "walls so big you can't get up it in one push".
        Classic examples include the big granite faces of Yosemite (El Capitan, Half Dome) and remote alpine walls in Patagonia and Baffin Island.
      </p>

      <h3>Aid Climbing vs. Free Climbing</h3>
      <p>
        On big walls, climbers often resort to aid climbing techniques to make upward progress. Aid climbing means using gear placed in the rock to stand on or pull on (via ladders called aiders or etriers) 
        rather than just hands and feet on rock holds. This allows ascending sections of blank or extremely difficult rock that cannot be free-climbed.
      </p>
      <p>
        In the past, big walls were done almost entirely with aid (sometimes involving siege tactics with hundreds of pitons). Modern ethics encourage using aid sparingly – many big wall routes have since been 
        free-climbed by elite climbers, but aid techniques remain essential for most parties tackling these immense climbs.
      </p>

      <h3>The Big Wall Environment</h3>
      <p>
        Big wall ascents present special challenges. Climbers are self-sufficient for days, hauling up food, water, and shelter. They typically sleep on the wall at belay ledges or on portable ledges called portaledges. 
        Weather exposure, rockfall hazard, and sheer exhaustion are part of the game. Strategy and efficiency are critical: teams must manage complex rope systems, heavy haul bags, and tricky logistics at belays high above the ground.
      </p>
      <p>
        Big wall climbing is often done by teams of two in a leader–second format, but unlike standard multi-pitch free climbs, the second usually ascends the rope (jumaring) rather than climbing, to save time and energy. 
        Overall, big wall climbs are an adventure in vertical camping and technical problem-solving as much as pure rock climbing.
      </p>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Key Terminology</h4>
        <ul>
          <li><strong>Aid Climbing:</strong> Using placed gear to make upward progress rather than just rock features</li>
          <li><strong>Aiders/Etriers:</strong> Nylon webbing ladders used to stand on gear placements</li>
          <li><strong>Portaledge:</strong> A portable, hanging tent system for sleeping on vertical walls</li>
          <li><strong>Haul Bag:</strong> Heavy-duty bag used to transport gear, food, and water up the wall</li>
          <li><strong>Jumaring:</strong> Ascending a fixed rope using mechanical rope-grab devices</li>
          <li><strong>Clean Aid:</strong> Aid climbing without damaging the rock (no hammered pitons)</li>
          <li><strong>Grade VI:</strong> Rating for a big wall climb that typically takes multiple days</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
