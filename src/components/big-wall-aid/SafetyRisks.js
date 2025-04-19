import React from 'react';

const SafetyRisks = () => {
  return (
    <div className="section">
      <h2>Safety Considerations and Risk Management</h2>
      
      <p>
        Big wall and aid climbing involve inherent risks beyond those found in normal rock climbing. Understanding and managing these risks is essential for a successful and safe ascent.
      </p>

      <div className="safety-section">
        <h3>Common Risks in Big Wall Climbing</h3>
        
        <h4>Extended Exposure</h4>
        <p>
          Being on a wall for multiple days increases your vulnerability to environmental hazards:
        </p>
        <ul>
          <li>Dehydration and heat-related illness during hot weather</li>
          <li>Hypothermia during cold or wet conditions</li>
          <li>Sunburn and sun exposure (reflected sunlight from walls can intensify exposure)</li>
          <li>Weather changes that can trap you on the wall</li>
        </ul>
        <p>
          Mitigation: Check detailed weather forecasts before starting, bring appropriate clothing for temperature swings, carry extra water, use sun protection, and have a contingency plan for unexpected storms.
        </p>
        
        <h4>Gear Failure</h4>
        <p>
          The complexity and quantity of gear used in aid climbing increases the risk of equipment problems:
        </p>
        <ul>
          <li>Marginal placements failing under body weight</li>
          <li>Damaged or worn gear from repeated use</li>
          <li>Rope abrasion over sharp edges during hauling</li>
          <li>Anchor failure due to poor construction or rock quality</li>
        </ul>
        <p>
          Mitigation: Inspect all gear thoroughly before the climb, retire worn equipment, place protection conservatively, build redundant anchors, use rope protectors, and backup critical systems.
        </p>
        
        <h4>Fall Dynamics</h4>
        <p>
          Aid climbing falls can be particularly dangerous:
        </p>
        <ul>
          <li>Zipper effect where multiple pieces pull out sequentially</li>
          <li>Falls while standing high in aiders can generate high forces</li>
          <li>Pendulum falls during traverses or when cleaning traversing pitches</li>
          <li>Impact with the wall or features during falls</li>
        </ul>
        <p>
          Mitigation: Place solid protection when possible, avoid bounce testing marginal gear when you're high above your last good piece, use helmets, and maintain awareness of fall zones and potential pendulums.
        </p>
      </div>

      <div className="safety-section">
        <h3>System Safety and Redundancy</h3>
        
        <h4>Anchor Construction</h4>
        <p>
          Big wall anchors need to be exceptionally strong and redundant:
        </p>
        <ul>
          <li>Always use a minimum of three solid points when possible</li>
          <li>Distribute loads across multiple pieces with an equalized cordelette or sliding X</li>
          <li>Assess each component carefully - anchors will hold climbers, haul bags, and possibly a portaledge</li>
          <li>Consider direction of pull, especially when hauling</li>
        </ul>
        
        <h4>Rope Management</h4>
        <p>
          Complex rope systems require careful management:
        </p>
        <ul>
          <li>Keep lead and haul lines organized and separated</li>
          <li>Use edge protection where ropes run over sharp features</li>
          <li>Regularly inspect ropes for damage throughout the climb</li>
          <li>Tie backup knots when jumaring</li>
          <li>Use rope-specific technique for different tasks (dynamic for leading, static for hauling)</li>
        </ul>
        
        <h4>Staying Connected</h4>
        <p>
          Always maintain at least two points of connection to the wall:
        </p>
        <ul>
          <li>When transferring between systems, establish the new connection before releasing the old one</li>
          <li>Use a dedicated personal anchor system in addition to the rope</li>
          <li>At belays, clip directly to the anchor masterpoint in addition to your belay device connection</li>
        </ul>
      </div>

      <div className="safety-section">
        <h3>Emergency Preparedness</h3>
        
        <h4>Self-Rescue Techniques</h4>
        <p>
          Know how to handle common emergency scenarios:
        </p>
        <ul>
          <li>Ascending a rope if you fall while leading</li>
          <li>Rappelling past knots and with injured climbers</li>
          <li>Building 3:1 haul systems for rescue situations</li>
          <li>Escaping the belay if your partner is incapacitated</li>
        </ul>
        
        <h4>Communication and Outside Assistance</h4>
        <p>
          In today's world, technology can provide a safety margin:
        </p>
        <ul>
          <li>Consider carrying a satellite communication device (InReach, SPOT, etc.)</li>
          <li>Establish check-in protocols with people on the ground</li>
          <li>Research local search and rescue capabilities before your climb</li>
          <li>Create a detailed emergency action plan with your partner</li>
        </ul>
        
        <h4>First Aid Considerations</h4>
        <p>
          Tailor your medical kit to big wall-specific concerns:
        </p>
        <ul>
          <li>Hand and finger injuries (tape, bandages, antibiotic ointment)</li>
          <li>Pain management for sleeping on ledges or in harnesses</li>
          <li>Blister care and skin repair products</li>
          <li>Medications for nausea, diarrhea, and altitude issues</li>
          <li>Comprehensive knowledge of how to use everything in your kit</li>
        </ul>
      </div>

      <div className="safety-section">
        <h3>Mental Aspects of Safety</h3>
        
        <h4>Decision Making Under Stress</h4>
        <p>
          The psychological challenges of big walls affect safety:
        </p>
        <ul>
          <li>Fatigue and dehydration impair judgment</li>
          <li>"Summit fever" can lead to poor decisions</li>
          <li>Fear can either paralyze or push climbers to rush</li>
          <li>Group dynamics may lead to risky choices</li>
        </ul>
        <p>
          Mitigation: Establish clear turn-around criteria before starting, make major decisions when rested, constantly reassess risk vs. reward, and practice clear communication with partners.
        </p>
        
        <h4>Team Communication</h4>
        <p>
          Effective communication is critical for safety:
        </p>
        <ul>
          <li>Establish clear, standard climbing calls that work even with wind or distance</li>
          <li>Consider bringing small radios for complex communications</li>
          <li>Discuss potential scenarios and responses before they happen</li>
          <li>Regular check-ins with your partner about physical and mental state</li>
        </ul>
      </div>

      <div className="knowledge-box alert-warning" style={{ 
        backgroundColor: 'rgba(var(--warning-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--warning-color)'
      }}>
        <h4>Critical Safety Reminders</h4>
        <ul>
          <li><strong>Verification is key:</strong> Always double-check critical systems (anchors, rope connections, rappel setups)</li>
          <li><strong>Conservative approach:</strong> Build in safety margins with extra gear, water, and time</li>
          <li><strong>Know when to retreat:</strong> Have clear guidelines for when to bail and the skills to do so safely</li>
          <li><strong>Training matters:</strong> Practice aid techniques, hauling, and self-rescue on smaller walls first</li>
          <li><strong>Partner selection:</strong> Choose partners with complementary skills and compatible risk tolerance</li>
          <li><strong>Prepare for independence:</strong> Assume outside rescue may be delayed or impossible</li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyRisks;
