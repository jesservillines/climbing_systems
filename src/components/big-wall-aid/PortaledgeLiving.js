import React from 'react';

const PortaledgeLiving = () => {
  return (
    <div className="section">
      <h2>Portaledge Living: Multi-Day Wall Tactics</h2>
      
      <p>
        On multi-day big wall climbs, the portaledge becomes both your refuge and your home. Learning to live efficiently on the wall is as important as mastering aid climbing techniques.
      </p>

      <div className="portaledge-section">
        <h3>Setting Up a Portaledge</h3>
        <p>
          The portaledge setup process requires practice to master, especially in challenging conditions:
        </p>
        <ol>
          <li><strong>Establish a solid anchor:</strong> Make sure your anchor has redundant points and is bombproof</li>
          <li><strong>Attach the portaledge:</strong> Connect the main suspension point to your anchor with a locking carabiner</li>
          <li><strong>Unfold the frame:</strong> While the ledge hangs, unfold and lock the tubular frame into position</li>
          <li><strong>Insert spreader bars:</strong> These critical components maintain tension and prevent the ledge from collapsing</li>
          <li><strong>Tighten the bed fabric:</strong> Pull the fabric taut and secure all corners</li>
          <li><strong>Check all connections:</strong> Double-check all frame connections and carabiners</li>
          <li><strong>Add fly if needed:</strong> In case of precipitation or strong winds, attach the fly over the ledge</li>
        </ol>
        <p>
          Most portaledges have specific setup sequences that become more intuitive with practice. Setting up in calm conditions at a ground-based practice area before attempting on a wall is strongly recommended.
        </p>
      </div>

      <div className="portaledge-section">
        <h3>Sleep Systems on the Wall</h3>
        <p>
          Getting good rest is crucial for multi-day performance:
        </p>
        
        <h4>Sleeping Pads</h4>
        <p>
          Most climbers use custom-cut foam pads that exactly fit the portaledge dimensions. Inflatable pads can work but risk punctures. Many big wall veterans prefer closed-cell foam pads for their reliability. For maximum comfort, some climbers bring both a thin closed-cell pad as a base layer and a thicker foam pad on top.
        </p>
        
        <h4>Sleeping Bags</h4>
        <p>
          Temperature-appropriate sleeping bags are essential. Many climbers opt for lightweight down bags with water-resistant shells for the best warmth-to-weight ratio. Always clip your sleeping bag to the portaledge so it can't accidentally fall off the edge.
        </p>
        
        <h4>Safety While Sleeping</h4>
        <p>
          Always remain tied in while sleeping on a portaledge. The standard practice is to:
        </p>
        <ul>
          <li>Keep your harness on while sleeping</li>
          <li>Use a dedicated sleep tether to connect your harness to the anchor</li>
          <li>Some climbers also tie into the climbing rope as a redundant backup</li>
        </ul>
      </div>

      <div className="portaledge-section">
        <h3>Food and Water Management</h3>
        
        <h4>Water Logistics</h4>
        <p>
          Water is the heaviest item you'll carry. Plan for:
        </p>
        <ul>
          <li>Minimum 2-3 liters per person per day</li>
          <li>Additional water for cooking dehydrated meals</li>
          <li>Water bottles with secure lids (avoid hydration bladders which can fail)</li>
        </ul>
        <p>
          On walls with forest bases (like Yosemite), some climbers will fix ropes to the ground and rappel down to refill water, then jumar back up - saving significant weight.
        </p>
        
        <h4>Food Planning</h4>
        <p>
          Efficient food is:
        </p>
        <ul>
          <li>High calorie-to-weight ratio</li>
          <li>Requiring minimal preparation</li>
          <li>Generating minimal waste</li>
          <li>Stable in varying temperatures</li>
        </ul>
        <p>
          Popular big wall foods include: dehydrated meals, nuts, jerky, cheese, tortillas, energy bars, and chocolate. Bring extra food for weather delays, and plan meals that can be eaten cold if necessary.
        </p>
      </div>

      <div className="portaledge-section">
        <h3>Waste Management</h3>
        <p>
          Proper waste management is essential from both an ethical and practical perspective:
        </p>
        
        <h4>Human Waste</h4>
        <p>
          The standard method is using a "poop tube" - a PVC tube with caps at both ends. Line the tube with a plastic bag, use it, then seal and store the waste until you descend. In many climbing areas, proper human waste disposal is mandatory.
        </p>
        
        <h4>Other Trash</h4>
        <p>
          Use a dedicated waste bag for all other trash. Pre-removing excess packaging before the climb reduces what you'll need to pack out. Never drop anything from the wall - even biodegradable items.
        </p>
      </div>

      <div className="portaledge-section">
        <h3>Weather Management</h3>
        <p>
          Being prepared for unexpected weather events is critical for safety and comfort:
        </p>
        
        <h4>Storm Tactics</h4>
        <p>
          When bad weather hits:
        </p>
        <ul>
          <li>Set up the portaledge fly completely, ensuring it channels water away</li>
          <li>Secure all loose items to prevent them from blowing away</li>
          <li>Wear appropriate layers to manage temperature</li>
          <li>Keep critical items (headlamp, communication device) accessible</li>
          <li>Establish a lightning position if electrical storms are possible</li>
        </ul>
        
        <h4>Wind Management</h4>
        <p>
          High winds are common on big walls. To cope:
        </p>
        <ul>
          <li>Position the portaledge to minimize wind exposure if possible</li>
          <li>Use guy lines on the fly to prevent flapping</li>
          <li>Organize gear so nothing can blow away</li>
          <li>Be prepared for significant noise that may disrupt sleep</li>
        </ul>
      </div>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Portaledge Living Tips from Veterans</h4>
        <ul>
          <li><strong>Be meticulous with organization:</strong> Have a specific place for every item</li>
          <li><strong>Establish a routine:</strong> Create morning and evening procedures for efficiency</li>
          <li><strong>Conserve energy:</strong> Minimize unnecessary movement on the wall</li>
          <li><strong>Practice at home:</strong> Set up your portaledge multiple times before the real climb</li>
          <li><strong>Comfort items matter:</strong> A small pillow, extra socks, or even a book can boost morale</li>
          <li><strong>Timing is everything:</strong> Start setting up camp well before dark</li>
          <li><strong>Communication system:</strong> Establish clear signals with your partner for night needs</li>
        </ul>
      </div>
    </div>
  );
};

export default PortaledgeLiving;
