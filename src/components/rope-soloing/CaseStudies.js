import React, { useState } from 'react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'half-dome',
      title: 'Half Dome: A Solo Ascent',
      location: 'Yosemite National Park, USA',
      climber: 'Alex Johnson',
      difficulty: '5.12a, Grade V',
      system: 'GriGri-based lead rope solo system',
      description: 'Alex completed a solo ascent of the Regular Northwest Face of Half Dome, tackling 23 pitches over two days. This case study examines the specialized multi-pitch systems and logistics required for a route of this magnitude.',
      keyLearnings: [
        'Strategic rope management for extremely long routes',
        'Specialized hauling systems for overnight gear',
        'Efficient pitch-by-pitch transitions to save energy',
        'Sleep system that maintained safety while bivouacking'
      ],
      challenges: [
        'Rope management across 23 pitches',
        'Hauling camping equipment while soloing',
        'Transitioning between pitches efficiently',
        'Managing fatigue during a 2-day ascent'
      ],
      image: '/images/case-studies/half-dome.jpg'
    },
    {
      id: 'desert-towers',
      title: 'Desert Tower Circuit',
      location: 'Moab, Utah, USA',
      climber: 'Sarah Martinez',
      difficulty: '5.11+, several towers',
      system: 'Silent Partner with backup prusik',
      description: 'Sarah completed solo ascents of five desert towers in a single week, using a mechanical self-belay device. This case study explores the adaptations needed for crack climbing and offwidth techniques while soloing.',
      keyLearnings: [
        'Device positioning for wide crack climbing',
        'Specialized crack protection while soloing',
        'System adaptations for routes with traverses',
        'Efficiency tricks for similar-style routes'
      ],
      challenges: [
        'Protecting wide cracks while soloing',
        'Rope management in windy desert conditions',
        'Adapting the system for routes with significant traverses',
        'Recovery between consecutive challenging climbs'
      ],
      image: '/images/case-studies/desert-towers.jpg'
    },
    {
      id: 'alpine-ridge',
      title: 'Alpine Ridge Traverse',
      location: 'Mont Blanc Massif, France',
      climber: 'Thomas Laurent',
      difficulty: '5.10b, Alpine Grade D+',
      system: 'Micro Traxion combined system',
      description: 'Thomas completed a solo traverse of the Aiguilles ridge in alpine conditions, combining free soloing easier sections with rope soloing the crux pitches. This case study examines decision-making for when to rope up versus when to free solo.',
      keyLearnings: [
        'Hybrid approaches to alpine soloing',
        'Quick transition between roped and unroped climbing',
        'Lightweight system adaptations for alpine terrain',
        'Weather contingency planning for remote environments'
      ],
      challenges: [
        'Transitioning between free soloing and rope soloing efficiently',
        'Minimizing weight while maintaining adequate safety systems',
        'Managing rope and gear in snowy/icy conditions',
        'Route finding across complex alpine terrain'
      ],
      image: '/images/case-studies/alpine-ridge.jpg'
    },
    {
      id: 'big-wall-solo',
      title: 'El Capitan: Solo in a Day',
      location: 'Yosemite National Park, USA',
      climber: 'Michael Wei',
      difficulty: '5.13a, Grade VI',
      system: 'GriGri with specialized backup system',
      description: 'Michael completed a solo ascent of Freerider on El Capitan in a single push of 23 hours. This case study focuses on the speed techniques and specialized systems needed for extremely efficient big wall soloing.',
      keyLearnings: [
        'Ultra-light adaptation of traditional solo systems',
        'Speed techniques for the most efficient climbing',
        'Pre-planning every aspect of the route and system',
        'Recovery strategies during brief rests'
      ],
      challenges: [
        'Maintaining safety while prioritizing speed',
        'Managing fatigue during a 23-hour continuous effort',
        'Rope management for 3,000 feet of climbing',
        'Crux pitch strategy with minimal recovery time'
      ],
      image: '/images/case-studies/el-capitan.jpg'
    }
  ];

  return (
    <div id="case-studies" style={{ marginBottom: '3rem' }}>
      <h2>Rope Soloing Case Studies</h2>
      <p>
        These real-world examples showcase how experienced climbers have applied rope soloing techniques
        in various climbing scenarios. Each case provides valuable insights into system adaptation and 
        problem-solving in the field.
      </p>

      {/* Case navigation */}
      <div style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        gap: '1rem', 
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin'
      }}>
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            onClick={() => setActiveCase(index)}
            style={{
              minWidth: '200px',
              padding: '1rem',
              backgroundColor: activeCase === index ? 'var(--primary-color)' : 'white',
              color: activeCase === index ? 'white' : 'inherit',
              border: `1px solid ${activeCase === index ? 'var(--primary-color)' : '#e0e0e0'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{caseStudy.title}</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>{caseStudy.location}</p>
          </div>
        ))}
      </div>

      {/* Active case study */}
      <div className="card" style={{ 
        padding: 0, 
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* Using a placeholder image since we don't have actual images */}
        <div style={{ 
          height: '250px', 
          backgroundColor: '#e9ecef',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{caseStudies[activeCase].title}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{caseStudies[activeCase].location}</p>
          </div>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            marginBottom: '1.5rem' 
          }}>
            <div style={{ 
              flex: '1', 
              minWidth: '150px', 
              padding: '1rem', 
              backgroundColor: 'rgba(52, 152, 219, 0.1)', 
              borderRadius: '4px' 
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>Climber</h4>
              <p style={{ margin: 0, fontWeight: '500' }}>{caseStudies[activeCase].climber}</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '150px', 
              padding: '1rem', 
              backgroundColor: 'rgba(52, 152, 219, 0.1)', 
              borderRadius: '4px' 
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>Difficulty</h4>
              <p style={{ margin: 0, fontWeight: '500' }}>{caseStudies[activeCase].difficulty}</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '150px', 
              padding: '1rem', 
              backgroundColor: 'rgba(52, 152, 219, 0.1)', 
              borderRadius: '4px' 
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>System Used</h4>
              <p style={{ margin: 0, fontWeight: '500' }}>{caseStudies[activeCase].system}</p>
            </div>
          </div>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{caseStudies[activeCase].description}</p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '2rem', 
            marginTop: '2rem' 
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h4 style={{ borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem' }}>Key Learnings</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {caseStudies[activeCase].keyLearnings.map((learning, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>{learning}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h4 style={{ borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem' }}>Challenges Overcome</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {caseStudies[activeCase].challenges.map((challenge, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            backgroundColor: 'rgba(52, 152, 219, 0.05)', 
            borderRadius: '4px',
            borderLeft: '4px solid var(--primary-color)' 
          }}>
            <h4 style={{ margin: '0 0 1rem 0' }}>What This Means For Your Soloing:</h4>
            <p style={{ margin: 0 }}>
              This case demonstrates important adaptations to consider when facing similar challenges. 
              The system adjustments and problem-solving approaches are applicable to a wide range of
              scenarios you might encounter in your own rope soloing adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
