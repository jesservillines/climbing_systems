import React from 'react';

const SinglePitch = () => {
  return (
    <section className="card">
      <h2 id="single-pitch">Single-Pitch Lead Rope Solo Systems</h2>
      <p>
        Single-pitch lead soloing is often the entry point for climbers transitioning from top-rope soloing. 
        In a single-pitch scenario, you typically start at ground level (or the base of the climb), build an 
        anchor, and lead up to the anchors at the top of that pitch. This could be a sport route with bolted 
        anchors, or a trad route where you'll build an anchor at the end.
      </p>
      
      <h3>Common Systems for Single-Pitch</h3>
      <p>
        Two of the most common approaches are:
      </p>
      <ol>
        <li>Using an assisted-braking belay device (like a GriGri) as the primary self-belay with backup knots</li>
        <li>Using a progress-capture pulley (PCP) device (like a Micro Traxion or Spoc) attached to your harness for nearly hands-free feeding, usually backed up by knots or another device</li>
      </ol>
      <p>
        We'll outline a typical setup using a GriGri (since it's widely used and instructive), and then note how 
        a Micro Traxion system would differ.
      </p>
      
      <h3>Step-by-Step Setup (Single-Pitch using GriGri & Knots)</h3>
      <ol>
        <li>
          <h4>Build and Tie into the Anchor</h4>
          <p>
            Construct a bomber anchor at the base of the climb. If bolts are available, equalize them; if using 
            trad gear, place multiple pieces that can hold an upward pull. Tie one end of your rope to the anchor 
            (e.g. a figure-8 on a bight clipped into the master point with a locking carabiner, or tie directly in 
            with a figure-8 follow-through). This will be your rope's fixed point. The anchor must be solid – it 
            will hold the initial impact of any fall before you get higher protection. As a precaution, you can tie 
            the rope again to a higher piece with a clove hitch to ensure the anchor knot stays tight and in position 
            (this prevents the master point from shifting).
          </p>
        </li>
        <li>
          <h4>Attach Your Belay Device to Harness</h4>
          <p>
            Put your GriGri on your harness belay loop (or tie-in points) with a locking carabiner. Orient the GriGri 
            for soloing: This is critical – you must rig it such that the rope coming from the anchor goes into the 
            device's "climber side" (the side that would normally go to a climber when belaying). In practice, this 
            means the GriGri is often flipped upside-down compared to normal use. The "brake hand" side of the GriGri 
            will then feed out toward your free rope end.
          </p>
          <p>
            Use a chest sling to hold the GriGri upright on your torso so it can self-feed. (Some soloists also modify 
            the GriGri with a small keeper cord or zip-tie to keep it in position – the idea is to have it hang properly 
            but still allow it to move if you invert in a fall.)
          </p>
          <p>
            Lock your carabiner and double-check the device is threaded correctly – an incorrectly threaded GriGri will 
            not catch a fall.
          </p>
        </li>
        <li>
          <h4>Stack or Bag the Rope</h4>
          <p>
            You need the rope to play out smoothly as you climb. Flake the remaining free end of the rope into a rope 
            bag or backpack, or in a neat pile on the ground. Some climbers prefer to flake the rope into a small 
            backpack and climb with it on their back – this keeps the rope from tangling on the ground and adds a slight 
            downward tension to help with feeding. Others will leave the rope stacked at the base and perhaps add a small 
            weight (like a water bottle or pack) a few meters from the end to create gentle tension.
          </p>
          <p>
            In any case, ensure the rope is cleanly stacked so it won't snag. You'll be feeding rope from the anchor side 
            and the free end simultaneously, so remember that rope will feed roughly twice as fast from the anchor side 
            (since that's the side you're effectively pulling from as you climb).
          </p>
        </li>
        <li>
          <h4>Backup Knots</h4>
          <p>
            This is a crucial safety step. Tie a series of backup knots in the rope that will serve as stoppers if the 
            device somehow fails or lets rope slip. A common method is to tie an overhand knot on a bight (or figure-8 
            on a bight) every ~5–10 meters on the brake strand of the rope and clip those knots to your harness gear 
            loops with a carabiner (or even to gear on your harness).
          </p>
          <p>
            These loops should be short enough that if the GriGri slipped, the knot would jam in it or against the device, 
            arresting your fall. Each time you pass a knot while climbing, you'll need to reach down and undo it (one-handed) 
            or unclip it – so tie knots you can manage one-handed (overhands or slip knots work).
          </p>
          <p>
            Do not skip the backups: as one guide cautions, a GriGri is "unreliable" for soloing unless "backed up with 
            the technique described here" (i.e. backup knots). If using a chest-mounted device that feeds extremely well 
            (like a Micro Traxion), some advanced climbers choose to solo without tying backups frequently for convenience – 
            but this is risky and not recommended for free climbing; Petzl explicitly warns that relying on a single ascender 
            without redundancy has led to accidents. Always have a backup until you are truly expert and consciously accept 
            the risk.
          </p>
        </li>
      </ol>

      <div className="alert alert-danger">
        <h4>SAFETY CRITICAL</h4>
        <p>
          Always do a dry run close to the ground to verify your setup is catching properly before committing to a real lead solo.
          If you rig your belay device wrong, it will not stop a fall and you could be seriously injured or killed.
        </p>
      </div>
      
      <h3>Managing the Climb</h3>
      <p>
        Once your setup is complete and tested, you can begin climbing. Here are key considerations while on the wall:
      </p>
      <ul>
        <li>
          <strong>Managing Slack:</strong> Start climbing upward. As you climb, you need to manage the rope slack. With the 
          GriGri method, the device will not feed perfectly on its own – you'll periodically have to pull rope through it to 
          give yourself slack to make the next moves. Typically, you climb a short section (a few moves), then reach down and 
          manually pull up rope through the GriGri as if taking in slack (actually giving slack to yourself).
        </li>
        <li>
          <strong>Avoid Back-Clipping and Rope Malposition:</strong> Pay attention to how you clip the rope into carabiners 
          on the protection. Back-clipping is dangerous in normal lead climbing and equally so in soloing. Additionally, 
          ensure it's always the load strand (anchor side strand) that runs through your gear, not the brake strand.
        </li>
        <li>
          <strong>During a Fall:</strong> If you fall, the system should catch you automatically. With a GriGri oriented 
          properly, a fall will jerk the rope on the cam and lock it. Expect to drop twice the slack you had out (just like 
          normal leading). The anchor will feel an upward pull. As soon as you come to a stop, act as your own belayer: get 
          your hands back on the brake strand to control any bounce or slippage.
        </li>
        <li>
          <strong>Reaching the Top:</strong> Once you successfully climb to the top anchors of the pitch, clip yourself in 
          with a sling/PAS for security. Now you must transition to coming back down and cleaning the route (unless you fixed 
          gear to lower from, like draws on a sport route).
        </li>
        <li>
          <strong>Lowering or Rappelling:</strong> You have options for descending - either lowering if the pitch is short 
          and you have plenty of rope, or rappelling (more common). Be sure to have a clear plan for how you'll descend before 
          starting the climb.
        </li>
        <li>
          <strong>Cleaning and Resetting:</strong> As you descend or lower, clean the protection from the route. Once you're 
          back at the base, coil your rope and untie from the anchor – you've completed the lead solo pitch.
        </li>
      </ul>

      <h3>Using a Micro Traxion/Progress-Capture Pulley System</h3>
      <p>
        An alternative single-pitch method is often used by climbers attempting hard free routes solo (for example, when 
        redpointing a project alone). This involves attaching a compact progress-capture pulley (PCP) device like the Petzl 
        Micro Traxion, Edelrid Spoc, or CT RollNLock to your harness as the primary belay.
      </p>
      <p>
        These devices are essentially one-way locking pulleys: they allow rope to move through in one direction (feeding out 
        as you climb) but lock if pulled in the opposite direction (when you fall). The Micro Traxion and similar tools are 
        prized for their smooth feeding – "they self feed so you can just focus on climbing".
      </p>
      <p>
        <strong>Key considerations:</strong>
      </p>
      <ul>
        <li>
          <strong>Backup Requirement:</strong> If using a single progress-capture device like this, you must have a backup, 
          because these pulleys are not certified for dynamic belaying of a person.
        </li>
        <li>
          <strong>Shock Absorption:</strong> Unlike a GriGri, which slips a bit under heavy load (limiting peak force), a 
          Micro Traxion locks very tightly with minimal slip. This means falls can generate higher forces on your gear and anchor.
        </li>
        <li>
          <strong>Device Handling:</strong> If you need to rest or downclimb, a Micro Traxion is not as convenient as a GriGri. 
          Lowering mid-pitch is tricky.
        </li>
        <li>
          <strong>Rope Compatibility:</strong> Devices like the Spoc and RollNLock have specific rope diameter requirements and 
          even carabiner compatibility issues.
        </li>
      </ul>
    </section>
  );
};

export default SinglePitch;
