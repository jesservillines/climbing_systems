import React from 'react';

const EssentialGear = () => {
  return (
    <section className="card">
      <h2 id="essential-gear">Essential Gear and Principles of Lead Solo Systems</h2>
      <p>
        Before examining specific setups, it's useful to understand some core gear and principles 
        that apply to all lead rope solo systems:
      </p>

      <h3>Primary Solo Device</h3>
      <p>
        This is the device or knot system that arrests your fall. It must allow rope to feed as you climb 
        but then lock immediately under shock load. Common options include modified belay devices (e.g. Petzl GriGri), 
        mechanical ascenders/progress-capture pulleys (e.g. Petzl Micro Traxion, Edelrid Spoc), or dedicated 
        solo devices (e.g. the discontinued Rock Exotica Silent Partner). We compare these in detail later.
      </p>

      <h3>Back-up Belay</h3>
      <p>
        Redundancy is a fundamental safety principle. Petzl "recommends the use of two systems" for solo belay, 
        meaning you should have a backup in case the primary device or anchor fails. This backup can be a second 
        device on a separate rope, a second device on the same rope, or simply knots tied in the rope as you climb 
        (which will catch you if you pass them). We'll discuss pros/cons of each backup method.
      </p>

      <h3>Multidirectional Anchor</h3>
      <p>
        As noted, your starting anchor (and any subsequent belay anchors on multi-pitch) must be absolutely reliable 
        and able to hold force in any direction. Build anchors with solid gear or bolts, and equalize them if using 
        multiple pieces. Many soloists tie the rope directly into the master point with a figure-8 or clove hitch on 
        a locking carabiner. It's also common to add an upward pull piece tied off short, so the anchor doesn't budge 
        when the rope is weighted from below.
      </p>

      <h3>Chest Harness for Device Orientation</h3>
      <p>
        Lead soloists often use a simple chest harness (even an improvised sling can work) to hold the primary device 
        in an upright position on the chest. This keeps the device oriented correctly so it feeds rope more easily and 
        will lock at the proper angle in a fall. The chest harness is not load-bearing in a fall (the force still goes 
        on your waist harness), but it stabilizes the device's position. For example, a GriGri attached at your waist 
        tends to flop downward; a chest tether holds it upright and aligned, greatly improving its self-feeding.
      </p>

      <h3>Rope Type and Length</h3>
      <p>
        Dynamic single ropes are used for lead soloing (just as in normal lead climbing). Many soloists favor a slightly 
        thicker rope for added security against cutting and to ensure the device will lock reliably. Conversely, on big 
        walls or alpine solos where weight is a concern, climbers may use thinner ropes (within device specifications) – 
        but thin ropes can slip more easily in certain devices (or lock too slowly). It's important to use a rope that 
        your device's manufacturer recommends (e.g. ~9–10.5mm for a GriGri).
      </p>
      <p>
        Always tie a stopper knot in the free end of your rope so you cannot rap or feed off the end by accident. And 
        ensure the rope is long enough for your pitch (especially if you plan to lower-off or rappel – you might need 
        the rope doubled).
      </p>

      <h3>Personal Gear</h3>
      <p>
        In addition to the solo belay devices, you'll carry the usual climbing gear – harness, helmet, protection 
        (cams, nuts, quickdraws), personal anchor system (PAS or slings), rappel device (ATC/figure-8 for descending), 
        ascenders or prusiks for ascending the rope, and so on. A pair of prusik cords or a mechanical ascender is 
        essential in case you need to ascend the rope (for example, if you can't climb a section and need to retreat or 
        if you have to jumar back up after rappelling to clean gear). Petzl specifically notes to "always carry a 
        descender (GRIGRI) and a foot loop/ascender combo" for any solo climb, as you may need them for self-rescue.
      </p>
    </section>
  );
};

export default EssentialGear;
