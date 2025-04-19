import React from 'react';

const EssentialGear = () => {
  return (
    <div className="section">
      <h2>Essential Gear for Big Walls and Aid Climbing</h2>
      
      <p>
        Big wall and aid climbing require extensive gear, far beyond a normal rock climb. "The management of more items than contained in a small mountain shop can be a considerable task in itself," notes legendary big-wall pioneer John Middendorf.
      </p>
      
      <div className="image-container" style={{ marginBottom: '1.5rem' }}>
        <img 
          src="/images/aid-climbing-rack.jpg" 
          alt="A climber's harness loaded with an extensive big wall aid rack" 
          className="full-width-image"
          style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <p className="image-caption">
          A climber's harness loaded with an extensive big wall aid rack, including dozens of carabiners, cam devices, and aid ladders. Big wall climbers carry multiple sets of protection and many specialized items to address varied crack sizes and challenges.
        </p>
      </div>

      <div className="gear-category">
        <h3>Portaledge and Camping Gear</h3>
        <ul>
          <li><strong>Portaledge:</strong> A portable nylon cot with an aluminum frame that hangs from anchors, providing a platform to sleep suspended on the wall</li>
          <li><strong>Rain-fly:</strong> Cover for the portaledge in bad weather</li>
          <li><strong>Haul bag ("pig"):</strong> Heavy-duty waterproof bags designed to withstand abrasion when dragged up walls</li>
          <li><strong>Sleeping system:</strong> Harness-friendly foam pad, warm but compressible sleeping bag</li>
          <li><strong>Headlamps:</strong> For climbing in low-light conditions or night</li>
          <li><strong>Waste management system:</strong> "Poop tube" to pack out human waste on longer climbs</li>
        </ul>
      </div>

      <div className="gear-category">
        <h3>Aid Climbing Rack</h3>
        <ul>
          <li><strong>Cams:</strong> 2–3 sets of camming devices, from tiny micro-cams up to large sizes, often including offset cams for flared cracks</li>
          <li><strong>Nuts and Micro Nuts:</strong> Multiple sets including brass offsets for piton scars</li>
          <li><strong>Carabiners and Quickdraws:</strong> 50–100 carabiners and many quickdraws/sling extenders</li>
          <li><strong>Hooks:</strong> Assortment of specialty hooks (skyhooks, talon hooks) for edges or flakes</li>
          <li><strong>Cam hooks:</strong> Smooth metal hooks that cammingly fit into thin cracks</li>
          <li><strong>Pitons (Optional):</strong> For routes not established as "clean" - knife-blades, angles, Lost Arrows</li>
          <li><strong>Hammer (Optional):</strong> For placing pitons if necessary</li>
          <li><strong>Copperheads (Optional):</strong> Soft metal heads for tenuous placements</li>
          <li><strong>Bolt Kit (Emergency):</strong> Hand drill and a few bolts for emergency situations</li>
        </ul>
      </div>

      <div className="gear-category">
        <h3>Aiders (Etriers) and Daisies</h3>
        <ul>
          <li><strong>Aiders/Etriers:</strong> Webbing ladders with 4-6 steps for standing on gear</li>
          <li><strong>Adjustable Daisy Chains:</strong> Tethers connecting the climber's harness to the piece of gear they're standing on</li>
          <li><strong>Fifi Hook:</strong> T-shaped hook on a short tether for quickly hanging from a piece or ladder</li>
        </ul>
      </div>

      <div className="gear-category">
        <h3>Ropes and Rope Gear</h3>
        <ul>
          <li><strong>Dynamic Lead Rope:</strong> ~60m, used for leading and absorbing falls</li>
          <li><strong>Static Haul Rope:</strong> ~60–70m, thicker and low-stretch, used for hauling bags</li>
          <li><strong>Tag Line (Optional):</strong> Thin cord for tasks like tagging up gear</li>
          <li><strong>Ascenders (Jumars):</strong> Mechanical rope-grabbing devices with handles for rope climbing</li>
          <li><strong>Belay Devices:</strong> Compact device for belaying the leader (often an assisted-braking device)</li>
          <li><strong>Hauling Pulleys:</strong> Progress-capturing pulleys that have built-in cam stops</li>
          <li><strong>Personal Anchor System:</strong> Lanyard or personal tether to secure to anchors</li>
        </ul>
      </div>

      <div className="gear-category">
        <h3>Safety and Personal Gear</h3>
        <ul>
          <li><strong>Harness:</strong> Comfortable full-strength harness with extra padding and multiple gear loops</li>
          <li><strong>Helmet:</strong> Essential for rockfall protection</li>
          <li><strong>Gloves:</strong> Durable fingerless leather gloves for rope handling</li>
          <li><strong>Knee Pads:</strong> To ease knee pressure against rock or in aiders</li>
          <li><strong>Footwear:</strong> Stiff-soled climbing shoes or approach shoes for aid</li>
          <li><strong>Clothing:</strong> Weather-appropriate layers including rain gear</li>
          <li><strong>First Aid Kit:</strong> Basic medical supplies</li>
          <li><strong>Repair Kit:</strong> Tape, cord, patch material for gear repairs</li>
          <li><strong>Water and Food:</strong> Sufficient supplies for the duration of the climb</li>
          <li><strong>Clip-in Loops:</strong> For securing items to prevent dropping</li>
        </ul>
      </div>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Gear Management Tips</h4>
        <ul>
          <li>Color-code gear with tape to quickly identify different sizes</li>
          <li>Use a gear sling to organize and distribute weight across your torso</li>
          <li>Rack gear in consistent positions so you can find items by feel</li>
          <li>Leash critical items (belay device, knife) to prevent dropping</li>
          <li>Consider weight distribution when packing the haul bag</li>
          <li>Keep frequently used items accessible on your harness</li>
        </ul>
      </div>
    </div>
  );
};

export default EssentialGear;
