import React from 'react';

const DeviceComparison = () => {
  return (
    <section className="card">
      <h2 id="device-comparison">Comparison of Common Rope Solo Devices and Systems</h2>
      <p>
        A variety of devices and tools have been used for lead rope soloing. Here we compare the most popular ones – 
        their intended usage, advantages, and drawbacks – so you can understand how each fits into a solo system.
      </p>

      <h3>1. Progress-Capture Pulleys (PCPs)</h3>
      <p>
        Examples: Petzl Micro Traxion, Edelrid Spoc, CT RollNLock, Wild Country Ropeman (similar concept). These are 
        essentially mechanical ascenders with pulley capability. They are not originally designed as belay devices – 
        they're meant for hauling or crevasse rescue – yet climbers repurpose them for self-belaying because of their 
        smooth rope travel.
      </p>

      <h4>Petzl Micro Traxion</h4>
      <p>
        A high-efficiency pulley with a toothed cam that locks the rope in one direction. It's very compact (85g) and 
        can accept ropes ~8–11mm. It also has a feature to lock the cam open (for use as a normal pulley). The Micro 
        Traxion is famously beloved for top-rope soloing because "it feeds incredibly smoothly" – you can climb without 
        feeling tethered. In lead solo, people use it in the continuous-feed method described earlier.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Lightweight</li> 
        <li>Low friction when feeding</li>
        <li>Strong locking ability (holds ~4 kN or more without slipping once engaged)</li>
        <li>Multi-use (hauling, ascending)</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>The cam has sharp teeth that can damage a rope if shock-loaded with slack</li>
        <li>Petzl themselves caution that ascenders like this are not made for self-belaying, and only suggest their use for experts with backups</li>
        <li>Releasing it under load is non-trivial; you have to unweight it</li>
      </ul>

      <h4>Edelrid Spoc</h4>
      <p>
        This device is very similar to the Micro Traxion (same principle: pulley with toothed cam). It's a bit lighter (60g) 
        and has a large attachment hole. The Spoc is perfectly fine for top-rope solo or hauling when used correctly.
      </p>
      <p>
        However, it gained notoriety due to a particular failure mode: if a locker carabiner's screwgate presses the cam just 
        right, it can pry it open. Edelrid responded by advising use of specific oval-shaped biners that don't interfere.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Very smooth feeding (like Micro Traxion)</li>
        <li>Slightly cheaper than Petzl's</li>
        <li>Can work on webbing 8–13mm (Petzl's won't)</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>The cam hinge is known to be a bit weaker</li>
        <li>Potential carabiner compatibility issues</li>
      </ul>

      <h4>Climbing Technology RollNLock</h4>
      <p>
        A unique hybrid device (80g) that can serve as a progress capture pulley or ascender. It has a toothless cam (uses a 
        knurled cam surface rather than aggressive teeth) and a little lever that allows you to disable the cam for use as a pulley.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>The toothless cam is gentler on ropes</li>
        <li>Might slip slightly in a high impact, potentially reducing peak force</li>
        <li>Versatile – mountaineers like it for crevasse rescue</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Doesn't bite as strongly as a Micro Traxion</li>
        <li>If the rope is wet or icy, it could slip more</li>
        <li>Some users note it "flips orientation each time it catches"</li>
      </ul>

      <div className="alert">
        <p>
          <strong>PCPs Summary:</strong> Progress-Capture Pulleys shine for their hands-free feed. They make soloing feel more 
          like normal climbing – you can focus on moves, not the rope. They are very popular for working hard routes (free climbing) 
          because catching frequent falls is trivial for them. The major caveat is safety in a big fall: always have a backup, and 
          be aware that these devices will impart a more static catch (higher force) than something like a GriGri which slips a bit.
        </p>
      </div>

      <h3>2. Assisted-Braking Belay Devices</h3>
      <p>
        Examples: Petzl GriGri (1,2,+), Petzl Reverso in auto-block mode (improvised), Trango Cinch, Mad Rock Lifeguard, 
        Edelrid Eddy, Wild Country Revo. These are devices originally made for belaying a partner, but adapted for self-belay.
      </p>

      <h4>Petzl GriGri</h4>
      <p>
        An assisted braking cam device.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Strong, handles dynamic loads well (the cam will slip slightly under ~4kN of force, reducing peak forces – effectively giving a dynamic catch)</li>
        <li>Ubiquitous, meaning many climbers already have one and are familiar with its operation</li>
        <li>Doubles as a descent device: you can rappel or lower yourself easily</li>
        <li>Metal and tough, can take the wear of rope soloing on abrasive rock</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Does not feed rope out automatically in its normal orientation – must be oriented "upside-down and backwards" on your harness</li>
        <li>Even with correct orientation, expect to manually feed slack fairly often on lead</li>
        <li>Petzl absolutely does not certify or endorse the GriGri for self-belay</li>
        <li>If the device is not kept upright, it might not lock when you let go</li>
      </ul>

      <h4>Wild Country Revo</h4>
      <p>
        Released a few years ago, the Revo is an assisted device that has a spinning wheel and locking mechanism that triggers 
        only at high speed. It's symmetric (no "up" or "down" side), so it doesn't matter which way you load it – theoretically 
        great for soloing because you can't rig it backwards.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Feeds extremely well – almost no friction until it locks</li>
        <li>Has no teeth and won't abrade the rope</li>
        <li>Cannot be rigged backwards</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>The lock mechanism allows a bit of slippage before it catches</li>
        <li>You still need to improvise a chest harness to keep it from just dangling</li>
        <li>Lacks a lowering lever; to rappel or lower, you must add friction with a separate device</li>
      </ul>

      <h4>Silent Partner (discontinued)</h4>
      <p>
        Worth mentioning although discontinued: it's in this category of "assisted braking" but uses a clove hitch around a drum.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Catches falls in any orientation, even upside down</li>
        <li>Dynamic catch</li>
        <li>Feeds quite well</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Heavy (~500g)</li>
        <li>Expensive (collector's item now ~$1000 on resale)</li>
        <li>Clove hitches can be tedious to manage</li>
      </ul>

      <h3>3. Compact Ascenders (rope clamps)</h3>
      <p>
        Examples: Kong Duck, Petzl Tibloc, Wild Country Ropeman, Camp Lift. These are small devices meant for ascending 
        a rope or emergency use. Some climbers incorporate them as backup devices or even primaries in special cases.
      </p>

      <h4>Kong Duck</h4>
      <p>
        A tiny camming clamp that works on ropes 8–13mm and even slings. It's spring-loaded and bites down when weighted. 
        It has a toothless cam (actually more like little ridges, not sharp spikes).
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Very lightweight (70g)</li>
        <li>Slides smoothly on rope</li>
        <li>Gentler on rope than a Micro Traxion might be</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Rated to hold a static load of 300 kg and a short fall, but not tested for big lead falls</li>
        <li>Tends to flip upside down under load if not kept upright</li>
        <li>Should not be used as a primary device without backup</li>
      </ul>

      <h4>Petzl Tibloc</h4>
      <p>
        The Tibloc is a tiny toothy clamp. The old design would notoriously gnaw your rope if used incorrectly. Petzl updated 
        it with a spring in 2019 to mitigate that. Still, Petzl specifically says do not use Tibloc for solo belay, as it 
        "can shred ropes" under shock.
      </p>

      <h3>4. Back-Up Knots and Homemade Solutions</h3>
      <p>
        It may seem low-tech, but some climbers simply rely on knots as their belay in a pinch. For instance, tying a series 
        of clove hitches on your harness carabiner and feeding them out one by one can belay you. This is very slow, but 
        essentially fail-proof as long as you keep tying in.
      </p>

      <h3>Device Selection Guide</h3>
      <ul>
        <li>
          <strong>For single-pitch free climbing at your limit:</strong> A Micro Traxion or similar PCP with a backup is 
          often the choice for smooth operation.
        </li>
        <li>
          <strong>For multi-pitch or big wall:</strong> A GriGri is a solid all-around choice due to its versatility and 
          good catch characteristics. It might slow you down in free climbing a bit, but for mixed free/aid it's excellent.
        </li>
        <li>
          <strong>For alpine climbing:</strong> Lightweight options like an ATC in guide mode or a duck with backups might 
          be chosen to save weight.
        </li>
      </ul>

      <div className="alert alert-warning">
        <p>
          <strong>Device Care:</strong> Remember that any device used in a lead solo system is seeing more wear and tear 
          (lots of rope running). Inspect them regularly for sharp edges, fatigue, etc. Carabiners used with toothed devices 
          can get grooves – retire any biner that is grooved as it can cause dangerous stress concentrations or snag the rope.
        </p>
      </div>
    </section>
  );
};

export default DeviceComparison;
