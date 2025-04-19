import React from 'react';

const AlpineSoloing = () => {
  return (
    <section className="card">
      <h2 id="alpine-soloing">Alpine Rope Soloing Considerations</h2>
      <p>
        Soloing in an alpine environment (mountaineering routes, long alpine rock faces, mixed terrain) introduces additional 
        challenges: remoteness, harsh conditions, and the need for speed. Often, an alpine soloist will free-solo easier 
        sections and only rope up (lead solo) for the hardest pitches or to rappel – unlike on a big wall, you typically 
        aren't roping for every pitch unless the entire route is consistently difficult.
      </p>

      <h3>Key Alpine Considerations</h3>
      <ul>
        <li>
          <h4>Weight and Simplicity</h4>
          <p>
            In the alpine, lightweight gear and minimalism can be critical. You may opt for a thinner rope (or even half-rope) 
            to save weight, and you probably won't carry heavy devices like a Silent Partner. Many alpine soloists use just a 
            modified ATC-guide or a Munter hitch for self-belay in a pinch.
          </p>
          <p>
            For example, there's a known technique of using an ATC in "guide mode" attached to your chest as a self-belay 
            device (the rope runs upward through it, and it locks like it would belaying a follower). This kind of system 
            eliminates the need for heavy devices – it's just a belay plate and sling – but it can be finicky (hard to feed 
            rope, and hard to disengage for lowering).
          </p>
          <p>
            Another lightweight option is using a Kong Duck or Tibloc as a primary device: these tiny ascenders weigh under 
            70g and can catch a fall. But using them as sole protection is risky because they're meant as emergency clamps, 
            not belay devices.
          </p>
        </li>
        
        <li>
          <h4>Cold and Icy Ropes</h4>
          <p>
            In alpine settings, ropes may become wet or icy, which can dramatically affect device performance. A toothed cam 
            device (Micro Traxion, Duck) might not grip an icy rope well, or might not pivot freely if frozen. A GriGri's cam 
            could stick.
          </p>
          <p>
            Guides in cold environments often rely on the tried-and-true Munter hitch as a backup belay method because it works 
            on wet or icy ropes and doesn't rely on complex parts. If you expect icy conditions, test your device with that rope.
          </p>
        </li>
        
        <li>
          <h4>Terrain and Strategy</h4>
          <p>
            Alpine climbs often involve a mix of easier and harder sections. A soloist might free-solo (unroped) the easy parts 
            to save time, then stop below a crux, build an anchor and rope-solo that pitch, then possibly unrope again.
          </p>
          <p>
            Setting up a rope solo mid-route can be time-consuming; one must judge if the difficulty warrants it (remember, if 
            you fall unroped that's fatal). Some notable alpine solo achievements (like certain routes in the Alps or Patagonia) 
            have involved strategic rope soloing of only the most technical pitches.
          </p>
        </li>
        
        <li>
          <h4>Speed vs. Safety Trade-off</h4>
          <p>
            In alpine soloing, there is often a conscious decision to sacrifice some redundancy for speed. For example, an 
            alpine soloist might decide not to use a backup device or knots on a certain pitch because the climbing is well 
            within their ability and they want to move faster to beat a storm.
          </p>
          <p>
            This is a personal risk assessment. The Petzl principle of redundancy still stands – you should back yourself up – 
            but real-world practitioners sometimes accept a higher risk when the alternative is being benighted in a storm 
            (which could be worse).
          </p>
          <p>
            Rope soloing inherently is slow, so when speed is life (e.g. avalanche or storm exposure), soloists often end up 
            free-soloing instead to move quickly. It's a delicate judgment call how often to rope up.
          </p>
        </li>
        
        <li>
          <h4>Edge Management</h4>
          <p>
            Alpine rock can be very coarse or sharp. If you're rope soloing and the rope runs over an edge, without a partner 
            to manage it or yell at, you might not notice damage until too late. Use rope protectors (even a piece of old 
            garden hose or a folded canvas) if you anticipate rope-over-edge on a belay.
          </p>
          <p>
            Also, try to place gear to redirect the rope away from dangerous edges. This is an area where rope soloing is less 
            safe than having a partner – a belayer might dynamically adjust or cushion a rope on an edge, but you as a climber 
            may not even see it.
          </p>
        </li>
        
        <li>
          <h4>Self-Rescue</h4>
          <p>
            Alpine solo implies you are far from help. Every rope soloist must be competent in self-rescue (ascend/descend, 
            passing knots, escaping the system). In alpine terrain, add skills like crevasse rescue if on glaciers, or being 
            able to prusik out of a bergschrund.
          </p>
          <p>
            Always leave a game plan with someone – soloing in isolated areas is risky because if you get injured, there's no 
            immediate help. Petzl's guidance reminds: "If an accident results in unconsciousness… rescue will be difficult. Do 
            not climb solo without informing someone of your itinerary."
          </p>
        </li>
      </ul>

      <div className="alert alert-warning">
        <p>
          <strong>Alpine Summary:</strong> Alpine lead rope soloing uses the same toolset but with an emphasis on weight-saving 
          and adaptability. A climber might alternate between unroped climbing, lead soloing, and even short-fixing rope to 
          self-belay a tricky move or two. There's no single "system" that fits all alpine scenarios – it's often a mix-and-match 
          of techniques. You choose when to rope up and when not to, constantly evaluating the terrain, weather, and your condition.
        </p>
      </div>
    </section>
  );
};

export default AlpineSoloing;
