import React from 'react';

const ExpertInsights = () => {
  return (
    <div className="section">
      <h2>Expert Insights: Wisdom from Veteran Big Wall Climbers</h2>
      
      <p>
        Learning from those who have spent decades on big walls provides invaluable perspective. Here, we share advice and insights from experienced big wall climbers.
      </p>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Preparation and Mindset</h3>
          <p className="expert-name">— John Middendorf, Big Wall Pioneer and Portaledge Designer</p>
        </div>
        <blockquote>
          "The key to big wall success is thoroughness of preparation. Know your systems before you leave the ground. Practice hauling, practice anchor setups, practice portaledge deployment.
          A big wall is both a physical and psychological challenge - mentally breaking the wall into small, manageable sections helps maintain focus and prevent being overwhelmed by the scale."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Clean Aid Techniques</h3>
          <p className="expert-name">— Yvon Chouinard, Clean Climbing Advocate</p>
        </div>
        <blockquote>
          "The evolution in hardware has been toward smaller, lighter pieces that don't harm the rock... We came to realize that an expanded range of chocks used with just the right touch would protect nearly any route with far less damage than pitons."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Efficiency</h3>
          <p className="expert-name">— Tommy Caldwell, Elite Big Wall Free Climber</p>
        </div>
        <blockquote>
          "Big wall climbing is about systems and organization. The fastest climbers aren't necessarily the strongest - they're the ones who've mastered efficient rope management, streamlined transitions, and effective communication. Every minute saved at belays adds up to hours or even days on a big route."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Partner Selection</h3>
          <p className="expert-name">— Lynn Hill, First to Free Climb The Nose</p>
        </div>
        <blockquote>
          "Choose your big wall partner carefully. You want someone who complements your skills, maintains a positive attitude under stress, and shares your risk tolerance. On a wall, small irritations can become major conflicts. The best partners aren't just strong climbers - they're people who can problem-solve creatively and maintain good humor through challenging situations."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Leading Hard Aid</h3>
          <p className="expert-name">— Charlie Porter, Solo First Ascensionist</p>
        </div>
        <blockquote>
          "When the going gets marginal, slow down. Place more gear if you can. Test everything carefully. Make small, controlled movements. On dangerous aid, you should feel like you're climbing through a minefield - with deliberate, careful steps. That's when you're doing it right."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Wall Psychology</h3>
          <p className="expert-name">— Kate Rutherford, Modern Big Wall Free Climber</p>
        </div>
        <blockquote>
          "On day three of a week-long wall, there's often a psychological low point. You're tired, but still have so far to go. This is where mental training pays off. Break the day into pitch-by-pitch goals. Celebrate small victories. Focus on the process rather than the summit. And remember why you're there - to experience the vertical world in its most immersive form."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Staying Safe</h3>
          <p className="expert-name">— Conrad Anker, Expedition Climber</p>
        </div>
        <blockquote>
          "The margin for error on big walls is slim. Develop redundant systems and backup checks. Always have a descent plan. Know when to bail - the mountain will always be there, but you might not be if you push too far. Even on well-traveled routes like El Cap, self-sufficiency is key. Assume rescue would be complicated and act accordingly."
        </blockquote>
      </div>

      <div className="expert-quote">
        <div className="quote-header">
          <h3>On Evolving Techniques</h3>
          <p className="expert-name">— Alex Honnold, Speed Climber</p>
        </div>
        <blockquote>
          "Big wall techniques continue to evolve. What used to take a week can now be done in a day with modern strategies. But speed comes from mastery, not shortcuts on safety. Learn the traditional methods first, understand why they work, then you can intelligently adapt them to your own climbing."
        </blockquote>
      </div>

      <div className="tips-section">
        <h3>Common Themes from the Experts</h3>
        <ul>
          <li><strong>Practice is essential:</strong> Rehearse all systems before committing to a big wall</li>
          <li><strong>Organization matters:</strong> Have systems for gear management, communication, and transitions</li>
          <li><strong>Mental preparation:</strong> Psychological readiness is as important as physical strength</li>
          <li><strong>Adaptability:</strong> Be prepared to modify plans based on conditions, energy levels, and unexpected challenges</li>
          <li><strong>Patience is key:</strong> Moving methodically and carefully prevents mistakes</li>
          <li><strong>Safety first:</strong> Maintain redundancy in critical systems and know when to retreat</li>
        </ul>
      </div>

      <div className="knowledge-box" style={{ 
        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
        padding: '1rem', 
        borderRadius: '5px',
        marginTop: '1.5rem',
        border: '1px solid var(--primary-color)'
      }}>
        <h4>Path to Mastery</h4>
        <p>The experts agree on a progression for aspiring big wall climbers:</p>
        <ol>
          <li>Master traditional multi-pitch climbing and rope management</li>
          <li>Learn basic aid climbing techniques on single pitches</li>
          <li>Practice hauling and rope systems on the ground</li>
          <li>Attempt shorter big walls (2-3 pitches) with minimal bivy gear</li>
          <li>Gradually increase commitment level with longer routes</li>
          <li>Build experience in different conditions and rock types</li>
          <li>Continuously refine and streamline your systems</li>
        </ol>
      </div>
    </div>
  );
};

export default ExpertInsights;
