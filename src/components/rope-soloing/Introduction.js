import React from 'react';

const Introduction = () => {
  return (
    <section className="card">
      <h2 id="introduction">Introduction – What Is Lead Rope Soloing?</h2>
      <p>
        Lead rope soloing is the practice of climbing and belaying yourself on lead, without a partner. 
        Unlike top-rope soloing (TR soloing), where the rope is fixed above you, lead soloing requires 
        managing the rope as you climb upward placing protection. This means you must handle all the 
        duties of both leader and belayer.
      </p>
      <p>
        It's an advanced, niche style of climbing – far fewer climbers know how to lead solo compared 
        to the many who climb with partners. Rope soloing can be done free (climbing with no aid) or 
        as part of aid climbing (using gear to ascend), and it can be applied on single-pitch routes, 
        big walls, or even remote alpine faces.
      </p>

      <h3>Key Differences from Top-Rope Soloing</h3>
      <p>
        In TR soloing, a rope is anchored above the climber; a device travels up the rope and catches 
        immediately in a fall, much like a standard top-rope belay. In lead soloing, you start from the 
        ground or belay anchor and lead upward, carrying the rope with you and clipping it into gear as 
        you go. This introduces several important differences:
      </p>

      <ul>
        <li>
          <strong>Fall Potential & Forces:</strong> Lead falls can be much longer and higher-impact than 
          top-rope falls. At the start of a lead solo (before your first piece of protection), a fall can 
          be directly onto the anchor – a factor 2 fall (worst case scenario in climbing). Managing fall 
          factors is critical in lead soloing, whereas in TR solo the fall distance is minimal by design.
        </li>
        <li>
          <strong>Belay System:</strong> Without a partner feeding or taking rope, the climber must use a 
          device or system that allows rope to feed out while climbing but locks and holds fast during a fall. 
          This is inherently more complex than the self-belay in TR soloing (where devices like ascenders 
          simply trail the fixed rope). Lead solo devices often require careful orientation or manual feeding 
          of slack to accommodate upward movement.
        </li>
        <li>
          <strong>Multi-Stage Process:</strong> Every lead solo pitch typically involves climbing the pitch 
          multiple times. After leading a pitch, you usually have to descend (rappel) to retrieve gear, 
          then ascend the rope back up – meaning each length of rock may be covered three times. Top-rope 
          soloing, by contrast, usually only involves ascending once.
        </li>
        <li>
          <strong>Anchor Requirements:</strong> A lead solo anchor (at the start of a pitch) must be 
          multi-directional, able to hold upward pulls (because your first piece will try to lift the anchor 
          in a fall) as well as downward pulls. In TR solo, the top anchor mainly needs to hold downward force. 
          Additionally, lead solo anchors need redundancy, since your life depends on that single point until 
          you place gear.
        </li>
        <li>
          <strong>Rope Management:</strong> Without a partner to manage slack, the lead soloist must carefully 
          stack or coil the rope, often in a rope bag or backpack, to feed smoothly without tangles. Rope 
          management is more involved than in TR solo, where the rope's free end typically just hangs. Lead 
          soloists must also ensure the rope runs cleanly through gear without snagging or back-clipping.
        </li>
        <li>
          <strong>Mental and Physical Effort:</strong> Lead soloing is slow and labor-intensive. Professional 
          soloist Andy Kirkpatrick notes that rope-soloing a big wall is "both slow and labor-intensive" – a 
          1000m climb might require 3000m of total climbing and rope work when done solo. There is no partner 
          to share duties or lead the next pitch when you're tired, and there is greater mental strain in being 
          solely responsible for every aspect of the climb.
        </li>
      </ul>

      <p>
        Despite these challenges, lead rope soloing appeals to climbers for the freedom and self-reliance it 
        provides. It requires mastery of systems and self-rescue techniques, as well as a mindset that accepts 
        a "choose your own adventure" style of problem-solving.
      </p>
    </section>
  );
};

export default Introduction;
