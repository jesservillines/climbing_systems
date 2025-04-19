import React from 'react';

const ExpertInsights = () => {
  return (
    <section className="card">
      <h2 id="expert-insights">Insights from Experienced Soloists and Guides</h2>
      <p>
        To provide deeper perspective, it's worth hearing from those who have significant rope solo experience:
      </p>

      <h3>On the Experience and Challenge</h3>
      <blockquote className="blockquote">
        <p>
          "With no partner to fall back on, or to swap leads, there is also no bigger reward than standing on top 
          of a mighty wall knowing every inch has been climbed alone."
        </p>
        <footer className="blockquote-footer">Andy Kirkpatrick</footer>
      </blockquote>
      <p>
        This sums up why people do it – the self-reliance is the reward. But Kirkpatrick also warns it's perhaps 
        the greatest test in climbing, requiring mastery of many skills. Pete Whittaker, after rope-soloing El Cap 
        free in a day, essentially said the same: only a small cadre of climbers understand how much work and skill 
        it takes. Rope soloing is an accomplishment in logistics as much as performance.
      </p>

      <h3>On Refining Systems</h3>
      <p>
        Stéphane Perron, who rope-soloed Freerider over 7 days, emphasized refining his system was key to climbing 
        hard while solo. This suggests that success in hard rope solo climbs comes from meticulous tweaking and 
        practicing of one's setup – it's not just about climbing talent. Take the time to refine your system in 
        less serious contexts before applying it to a big objective.
      </p>

      <h3>Guides' Advice</h3>
      <p>
        Professional guides often incorporate rope soloing in self-rescue courses. Neil Chelton (author at VDiff) 
        suggests that if you have no specialized device, using a GriGri "to some extent" works but must be backed up 
        with knots. This aligns with everything above: never trust a single point of failure.
      </p>
      <p>
        AMGA guides often preach redundancy and also remind that soloing is not for casual use – it's something you 
        do when needed (like rescuing a partner) or as a personal project, but not a shortcut to climb dangerous 
        stuff casually. In other words, treat it with respect.
      </p>

      <h3>Common Mistakes</h3>
      <p>
        Experienced soloists mention errors like:
      </p>
      <ul>
        <li>
          <strong>Forgetting to clip the rope into a piece</strong> (climbing above gear with the rope unclipped – 
          effectively free soloing unintentionally)
        </li>
        <li>
          <strong>Feeding out way too much slack</strong> and taking unnecessarily big falls
        </li>
        <li>
          <strong>Letting knots snag</strong> such that they can't be untied easily mid-pitch
        </li>
      </ul>
      <p>
        The solutions are procedural: create habits to mitigate these. For instance, one habit is to always look at 
        each protection point twice: once to ensure it's good, and once that the rope is properly clipped through it 
        (and not the wrong strand). Another is to tie stopper knots such that their tails are long enough to grab 
        (for untangling) but not so long they tangle in anything.
      </p>

      <h3>Redundancy vs. Speed</h3>
      <p>
        Some seasoned rope soloists make case-by-case decisions about backups. With time, you may identify certain 
        scenarios where a minimal setup is acceptable (e.g., you're on a splitter crack with no chance of device 
        interference and you need speed – maybe you rely on just a Micro Traxion and one well-placed backup knot for 
        that 30m lead). But these are judgment calls born from lots of practice and understanding the failure modes.
      </p>

      <h3>Philosophy</h3>
      <blockquote className="blockquote">
        <p>
          "With soloing any climb it truly is a choose your own adventure type of climbing."
        </p>
        <footer className="blockquote-footer">Marc-André Leclerc</footer>
      </blockquote>
      <p>
        There is no single right way, so you have to take responsibility for your system. Leclerc also points out that 
        being independent in learning – figuring things out outside established norms – was key for him. So, expect 
        some trial and error (done safely) as you tailor the techniques to your needs.
      </p>

      <h3>When Not to Solo</h3>
      <p>
        Even the boldest soloists will say – if you can climb with a partner, that is inherently safer and often more enjoyable. 
        Petzl bluntly states "solo climbing is not recommended" and climbing with a partner offers the highest safety. 
        Many rope soloists do it out of necessity (no partner available) or for a specific personal goal.
      </p>
      <p>
        As a solo climber, always check if your motivation is worth the added risk and work. Professional guide books 
        suggest rope-solo as a skill for emergencies (like leader rescue) or for specific use cases, rather than a 
        default way to climb.
      </p>

      <div className="alert">
        <p>
          <strong>Final Thought:</strong> The collective wisdom from experienced practitioners is: be systematic, be cautious, 
          and practice a lot. Rope soloing can unlock amazing possibilities – from climbing a local crag by yourself on a 
          weekday, to scaling big walls alone – but it demands a higher level of responsibility. When done right, it can be 
          safe and deeply fulfilling. When done haphazardly, the consequences can be dire.
        </p>
      </div>
    </section>
  );
};

export default ExpertInsights;
