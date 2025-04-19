import React from 'react';

const SafetyRisks = () => {
  return (
    <section className="card">
      <h2 id="safety-risks">Safety Risks and Risk Mitigation</h2>
      <p>
        Lead rope soloing inherently carries more risk than climbing with a partner. To practice it as safely 
        as possible, one must be proactive about managing those risks. Here we summarize the key safety 
        considerations and how to mitigate them:
      </p>

      <h3>Anchor Failure</h3>
      <p>
        Since you're often effectively on a solo top-rope from your last anchor or piece, anchor failure is catastrophic.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Build redundancy into every anchor</li>
        <li>Follow the principle of SERENE (Solid, Equalized, Redundant, No Extension)</li>
        <li>Use at least two solid points (e.g., two bolts or two pieces of gear – three if pieces are marginal)</li>
        <li>Consider placing a "Jesus piece" (a piece right off the belay) to reduce load in case of a factor 2 fall</li>
        <li>Some soloists pre-rig a screamer (shock absorber) on the anchor or first piece to reduce force in a factor-2 fall scenario</li>
      </ul>

      <h3>Gear Failure / High Fall Factors</h3>
      <p>
        Climbing alone, if a piece pulls, you have no belayer to quickly arrest extra slack – you will just fall 
        farther until something catches. Fall factors can actually exceed 2 in rare cases.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Place gear early and often, especially on the first portion of a pitch</li>
        <li>Use dynamic rope, and ensure your lanyards or slings in the system (if any) are dynamic or have some give</li>
        <li>Avoid clove-hitching yourself tightly to the anchor while leading – it may feel safer initially, but if you climb up and forget to untie, a fall can rip the anchor with a huge shock</li>
        <li>Always untie backup knots promptly after passing them to avoid weird fall scenarios</li>
        <li>If you're concerned about a piece failing leading to a big fall, one technique is to temporarily tie off the rope to a solid piece below you (as a pseudo-anchor)</li>
      </ul>

      <h3>Rope Cut / Abrasion</h3>
      <p>
        With no partner monitoring the rope, the rope can run over edges or loose rock and get damaged without 
        you noticing until it's too late.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Use rope protectors or even just a jacket wrapped around rope at sharp edges</li>
        <li>Pad edges at the anchor if the rope will run over</li>
        <li>Try to extend pieces to guide the rope's path away from rough rock</li>
        <li>Use a slightly thicker rope for added margin of safety against cuts</li>
        <li>Some soloists carry a thin tagline that could serve as a backup rappel line if the main rope gets severed</li>
        <li>Continuously inspect your rope whenever you're at a belay, running it through your hands to feel for core shots or abrasion</li>
        <li>Replace your rope more frequently if you rope solo a lot – it takes a beating</li>
      </ul>

      <h3>Device Misuse or Malfunction</h3>
      <p>
        Your life depends on a mechanical device working properly (or your knot system holding). Human error is a 
        leading cause of accidents – e.g., rigging the device backwards, forgetting to lock a carabiner, not engaging a cam.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Practice with your device extensively on lower ground</li>
        <li>Do short test falls to verify it grabs</li>
        <li>Use a backup on principle – assume any single device can fail</li>
        <li>Follow a routine every time you leave the ground: e.g. "Anchor – Device – Carabiner locked – Chest harness – Backup knots ready – Knot in rope end"</li>
        <li>Some soloists have a written checklist in their pocket</li>
      </ul>

      <div className="alert alert-danger">
        <h4>Warning!</h4>
        <p>If modifying devices (drilling holes, etc.), know that you are taking on risk – test them in a controlled way.</p>
      </div>

      <h3>Inversion and Harness Issues</h3>
      <p>
        Climbing alone, if you flip upside down (perhaps your foot caught behind the rope during a fall), certain 
        devices might not catch. Also, if you're not tied in properly, you could fall out of your harness.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Always wear your harness correctly (doubled back, all buckles secure)</li>
        <li>Many rope soloists tie their harness leg loops to their waist belt with a small cord or use a full-body harness to avoid separation</li>
        <li>The chest harness not only holds the device but effectively acts like a makeshift full-body harness if you invert</li>
        <li>If using a device like the Soloist which won't lock inverted, a chest harness is mandatory</li>
        <li>Manage the rope so it's unlikely to trip you – keep it between your legs or to the side, never behind your leg as you climb</li>
        <li>Climb smoothly to reduce the chance of flipping</li>
      </ul>

      <h3>Communication and Rescue</h3>
      <p>
        By definition, soloing has no partner to call for help. If you get injured and can't move, it could be fatal.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Carry a communication device if in remote areas – nowadays a satellite messenger (Garmin InReach or similar) is a wise choice</li>
        <li>Always let a friend or family know your exact route plan and expected return time</li>
        <li>Some soloists wear a whistle around their neck</li>
        <li>Master self-rescue skills: be able to ascend the rope with prusiks if you fall and are left hanging, know how to escape your system if it gets jammed, etc.</li>
      </ul>

      <h3>Fatigue and Mental State</h3>
      <p>
        Soloing can exhaust you more due to the extra work. Fatigue can lead to mistakes. Also, being alone can 
        affect judgment – some days you might get over-confident, other days too anxious.
      </p>
      <p><strong>Mitigation:</strong></p>
      <ul>
        <li>Plan conservatively with time and energy</li>
        <li>It often takes 2–3 times longer to rope solo a pitch than to lead it with a partner; plan your day accordingly</li>
        <li>Take breaks, eat, hydrate</li>
        <li>Be willing to back off if things aren't going well</li>
        <li>Keep an eye on weather; an approaching storm when you're halfway up alone is far more serious than with a partner</li>
        <li>Treat each action (knot, clip, device setup) with the same care a belayer would</li>
        <li>Some climbers narrate steps out loud to not skip anything</li>
      </ul>

      <div className="alert">
        <p>
          <strong>Summary:</strong> Safety in lead rope soloing boils down to redundancy, careful planning, and 
          disciplined execution. As Petzl's tech tip emphasizes, "error is always possible" and ascenders aren't 
          designed for this, so build redundancy to cover your mistakes. If done methodically, lead rope soloing 
          can be a reasonable extension for an experienced climber – but one should approach it with humility and 
          extensive preparation.
        </p>
      </div>
    </section>
  );
};

export default SafetyRisks;
