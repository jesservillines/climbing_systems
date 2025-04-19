import React from 'react';

const NailingTechniques = () => {
  return (
    <div className="section">
      <h2>Nailing (Hammered Aid) Techniques</h2>
      
      <p>
        While clean aid climbing is the preferred modern approach, understanding "nailing" or hammered aid techniques remains important for certain routes and historical context. Nailing should be considered a last resort on established routes.
      </p>

      <div className="nailing-section">
        <h3>What is Nailing?</h3>
        <p>
          Nailing refers to using a hammer to pound in protection – pitons, blades, angles, copperheads (which are literally hammered into tiny seams), and even drilling anchors if needed. This was the original aid method in the golden age of big walls (1950s-60s): climbers carried a rack of pitons and a hammer and nailed their way up, piece by piece.
        </p>
        <p>
          Nailing is slow and labor-intensive – each piece must be pounded in and often arduously removed (sometimes left fixed). It also causes physical damage to the rock, widening cracks and leaving pin scars. Because of this, nailing is now typically a last resort.
        </p>
      </div>

      <div className="nailing-section">
        <h3>When Nailing is Still Used</h3>
        <p>
          Most modern climbers will only place pitons or heads if no other clean gear will work. On some extremely hard aid lines (A4 or A5 grade), clean placements might simply not exist, and nailing may be unavoidable – these routes retain the "A" (for "artificial") rating.
        </p>
        <p>
          Many formerly A4/A5 routes have been downgraded to C4/C5 as gear improved and climbers found ways to do them clean. That said, big wall climbers sometimes still carry a hammer on a clean climb "just in case" – if a crucial cam gets stuck, a hammer tap might free it; or if an essential fixed piece has fallen out, they can hammer in something to get through.
        </p>
      </div>

      <div className="nailing-section">
        <h3>Types of Hammered Protection</h3>
        
        <h4>Pitons</h4>
        <p>
          Pitons are metal spikes that are hammered into cracks. Common types include:
        </p>
        <ul>
          <li><strong>Knife Blades:</strong> Thin, narrow pitons for very small cracks</li>
          <li><strong>Lost Arrows:</strong> Versatile, medium-sized pitons</li>
          <li><strong>Angles:</strong> L-shaped pitons for larger cracks</li>
          <li><strong>Rurps (Realized Ultimate Reality Pitons):</strong> Extremely thin pitons for hairline cracks</li>
          <li><strong>Beaks/Peckers:</strong> Modern evolution of pitons with thinner profiles</li>
        </ul>
        
        <h4>Copperheads</h4>
        <p>
          Copperheads are small, soft metal blobs on the end of a cable. They are hammered into small features until the soft metal conforms to the rock. These are essentially single-use and must be abandoned, though they're often left in place on established aid lines.
        </p>
        
        <h4>Bolts</h4>
        <p>
          In extreme cases where no natural features exist, climbers historically drilled holes and placed expansion bolts. Modern ethics strongly discourage placing new bolts on established routes, and many areas have explicit regulations around bolting.
        </p>
      </div>

      <div className="nailing-section">
        <h3>Nailing Techniques</h3>
        
        <h4>Proper Hammering</h4>
        <p>
          Placing pitons effectively requires technique:
        </p>
        <ul>
          <li>Hold the piton by pinching the eye between thumb and forefinger</li>
          <li>Tap lightly at first to set the piton</li>
          <li>Listen for the sound change from a "ping" to a "thunk" indicating solid placement</li>
          <li>Avoid over-driving pitons, which makes them harder to remove</li>
        </ul>
        
        <h4>Removing Pitons</h4>
        <p>
          Extracting pitons can be challenging:
        </p>
        <ul>
          <li>Tap from alternating sides to loosen</li>
          <li>Use a hammer claw or dedicated piton removal tool</li>
          <li>For stubborn pitons, try inserting a nut tool underneath and tapping upward</li>
          <li>Sometimes leaving a piece fixed is necessary if it cannot be removed without causing more damage</li>
        </ul>
        
        <h4>Copperhead Placement</h4>
        <p>
          Placing copperheads is an art form:
        </p>
        <ul>
          <li>Find a small dimple or feature that can accept the soft metal</li>
          <li>Place the copperhead and tap gently, allowing the metal to mold to the feature</li>
          <li>Drive more firmly once the head begins to conform</li>
          <li>Test cautiously - copperheads are often body-weight only</li>
        </ul>
      </div>

      <div className="nailing-section">
        <h3>The "A" Rating System</h3>
        <p>
          Traditional aid climbing is rated on the "A" scale:
        </p>
        <ul>
          <li><strong>A1:</strong> All placements are bombproof and easy to place</li>
          <li><strong>A2:</strong> Good placements, but some might only hold body weight</li>
          <li><strong>A3:</strong> Many marginal placements that could rip out if weighted dynamically</li>
          <li><strong>A4:</strong> Consecutive marginal placements where failure could result in lengthy falls</li>
          <li><strong>A5:</strong> Extreme danger with multiple body-weight placements in sequence where failure would likely result in a fatal fall</li>
        </ul>
        <p>
          The distinction between "A" and "C" ratings indicates whether hammered gear is required (A) or if the route can go entirely clean (C).
        </p>
      </div>

      <div className="knowledge-box alert-warning" style={{ 
        backgroundColor: 'rgba(var(--warning-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--warning-color)'
      }}>
        <h4>Ethical Considerations</h4>
        <p>
          The decision to nail has a serious ethical dimension: adding new piton scars or fixed heads can permanently alter a route. The prevailing ethic is:
        </p>
        <ul>
          <li>Climb clean whenever humanly possible</li>
          <li>Only resort to hammered gear on established routes when absolutely necessary</li>
          <li>Respect local regulations and ethics regarding hammered gear</li>
          <li>Avoid placing new fixed gear on established routes</li>
          <li>Consider whether hammering is truly needed or if it's merely convenient</li>
        </ul>
        <p>
          Using modern gear creatively is seen as a mark of skill, whereas resorting to the hammer is a last ditch effort. Many climbing areas have explicit regulations regarding hammered gear - be sure to know and follow local ethics.
        </p>
      </div>
    </div>
  );
};

export default NailingTechniques;
