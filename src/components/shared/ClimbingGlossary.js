import React, { useState } from 'react';

const ClimbingGlossary = () => {
  const [filter, setFilter] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);
  
  const glossaryTerms = [
    { term: 'Anchor', definition: 'A point of attachment to the rock, ice, or snow for safety in climbing.', category: 'equipment' },
    { term: 'Belay', definition: 'The technique of controlling the rope to protect a falling climber or lower a climber down.', category: 'technique' },
    { term: 'Belay Device', definition: 'A mechanical device used to control the rope when belaying.', category: 'equipment' },
    { term: 'Beta', definition: 'Information about a climb, often detailing specific moves or sequences.', category: 'general' },
    { term: 'Bomber', definition: 'Extremely solid and trustworthy, usually referring to protection placements or holds.', category: 'general' },
    { term: 'Cam', definition: 'A spring-loaded device that expands to fill cracks, creating a secure anchor point.', category: 'equipment' },
    { term: 'Carabiner', definition: 'A metal loop with a spring-loaded gate, used to connect components in the safety chain.', category: 'equipment' },
    { term: 'Crimper', definition: 'A small edge that can only be grasped with fingertips.', category: 'technique' },
    { term: 'Crux', definition: 'The most difficult move or sequence on a climb.', category: 'general' },
    { term: 'Deadpoint', definition: 'A dynamic climbing move where the climber is momentarily in balance at the apex of movement.', category: 'technique' },
    { term: 'Dynamic Rope', definition: 'An elastic climbing rope designed to stretch under load to absorb the energy of a fall.', category: 'equipment' },
    { term: 'Factor 2 Fall', definition: 'The most severe fall scenario where the fall distance is twice the length of rope between climber and belayer.', category: 'safety' },
    { term: 'Figure-8', definition: 'A knot commonly used to tie a climber into the rope, or to create loops for anchors.', category: 'technique' },
    { term: 'GriGri', definition: 'A proprietary assisted-braking belay device manufactured by Petzl.', category: 'equipment' },
    { term: 'Harness', definition: 'Equipment worn around the waist and legs to connect a climber to the rope system.', category: 'equipment' },
    { term: 'Jesus Piece', definition: 'In rope soloing, the crucial first piece of protection placed to prevent a factor 2 fall onto the anchor.', category: 'equipment' },
    { term: 'Jug', definition: 'A large, easily graspable hold.', category: 'general' },
    { term: 'Jumar', definition: 'To ascend a fixed rope using mechanical ascenders.', category: 'technique' },
    { term: 'Lead Climbing', definition: 'Climbing with the rope below you, clipping protection points as you ascend.', category: 'technique' },
    { term: 'Multi-Pitch', definition: 'A climb that is longer than one rope length, requiring multiple belay positions.', category: 'general' },
    { term: 'Nut', definition: 'A passive protection device wedged into cracks to provide anchoring.', category: 'equipment' },
    { term: 'On-sight', definition: 'To successfully climb a route on the first attempt without prior knowledge.', category: 'general' },
    { term: 'Protection', definition: 'Removable or fixed equipment placed to prevent a climber from falling too far.', category: 'equipment' },
    { term: 'Quickdraw', definition: 'Two carabiners connected by a short, sewn sling, used to clip the rope to protection.', category: 'equipment' },
    { term: 'Rappel', definition: 'A controlled descent down a rope.', category: 'technique' },
    { term: 'Redpoint', definition: 'To successfully climb a route after previous attempts or practice.', category: 'general' },
    { term: 'Rock Shoe', definition: 'Specialized footwear with sticky rubber soles designed for rock climbing.', category: 'equipment' },
    { term: 'Rope Soloing', definition: 'Climbing alone while using a rope system for protection.', category: 'technique' },
    { term: 'SERENE/ERNEST', definition: 'Acronyms for anchor building principles (Solid, Equalized, Redundant, Efficient, No Extension/Timely).', category: 'safety' },
    { term: 'Single Pitch', definition: 'A climb that can be completed with one rope length.', category: 'general' },
    { term: 'Static Rope', definition: 'A non-elastic rope primarily used for rappelling, hauling, or fixing lines.', category: 'equipment' },
    { term: 'Toprope', definition: 'Climbing with the rope always above you, anchored at the top of the route.', category: 'technique' },
    { term: 'Trad Climbing', definition: 'Traditional climbing where the climber places all protection during the ascent and removes it afterward.', category: 'technique' },
    { term: 'Z-clip', definition: 'A dangerous clipping error where the rope runs incorrectly through protection points.', category: 'safety' }
  ];
  
  // Alphabetical navigation
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  
  // Filter terms based on search input and selected letter
  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(filter.toLowerCase()) || 
                         item.definition.toLowerCase().includes(filter.toLowerCase());
    const matchesLetter = selectedLetter ? item.term.toUpperCase().startsWith(selectedLetter) : true;
    return matchesSearch && matchesLetter;
  });
  
  // Sort terms alphabetically
  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));
  
  // Group terms by category for display
  const getTermsByCategory = (category) => {
    return sortedTerms.filter(item => item.category === category);
  };
  
  const resetFilters = () => {
    setFilter('');
    setSelectedLetter(null);
  };
  
  return (
    <div className="card" id="climbing-glossary">
      <h2>Climbing Terminology Glossary</h2>
      <p>Reference guide to common climbing terms and jargon. Use the filters below to find specific terms.</p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search terms or definitions..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '0.5rem',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div className="alphabet-nav" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: selectedLetter === letter ? '2px solid #3498db' : '1px solid #ddd',
              borderRadius: '4px',
              background: selectedLetter === letter ? '#ebf5fd' : 'white',
              cursor: 'pointer',
              fontWeight: selectedLetter === letter ? 'bold' : 'normal'
            }}
          >
            {letter}
          </button>
        ))}
        <button
          onClick={resetFilters}
          style={{
            padding: '0 0.75rem',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e74c3c',
            borderRadius: '4px',
            background: 'white',
            color: '#e74c3c',
            cursor: 'pointer',
            marginLeft: '0.5rem'
          }}
        >
          Reset
        </button>
      </div>
      
      {sortedTerms.length === 0 ? (
        <div className="no-results" style={{ padding: '2rem 0', textAlign: 'center', color: '#777' }}>
          <p>No matching terms found. Try a different search or filter.</p>
        </div>
      ) : (
        <div className="glossary-content">
          {/* Equipment Terms */}
          {getTermsByCategory('equipment').length > 0 && (
            <div className="glossary-category">
              <h3 style={{ color: '#3498db', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem', marginTop: '1.5rem' }}>
                Equipment & Gear
              </h3>
              <dl style={{ marginTop: '1rem' }}>
                {getTermsByCategory('equipment').map(item => (
                  <div key={item.term} style={{ marginBottom: '1.25rem' }}>
                    <dt style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.term}</dt>
                    <dd style={{ marginLeft: '1rem', lineHeight: '1.5' }}>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          
          {/* Technique Terms */}
          {getTermsByCategory('technique').length > 0 && (
            <div className="glossary-category">
              <h3 style={{ color: '#27ae60', borderBottom: '2px solid #27ae60', paddingBottom: '0.5rem', marginTop: '1.5rem' }}>
                Techniques & Methods
              </h3>
              <dl style={{ marginTop: '1rem' }}>
                {getTermsByCategory('technique').map(item => (
                  <div key={item.term} style={{ marginBottom: '1.25rem' }}>
                    <dt style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.term}</dt>
                    <dd style={{ marginLeft: '1rem', lineHeight: '1.5' }}>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          
          {/* Safety Terms */}
          {getTermsByCategory('safety').length > 0 && (
            <div className="glossary-category">
              <h3 style={{ color: '#e74c3c', borderBottom: '2px solid #e74c3c', paddingBottom: '0.5rem', marginTop: '1.5rem' }}>
                Safety & Protection
              </h3>
              <dl style={{ marginTop: '1rem' }}>
                {getTermsByCategory('safety').map(item => (
                  <div key={item.term} style={{ marginBottom: '1.25rem' }}>
                    <dt style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.term}</dt>
                    <dd style={{ marginLeft: '1rem', lineHeight: '1.5' }}>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          
          {/* General Terms */}
          {getTermsByCategory('general').length > 0 && (
            <div className="glossary-category">
              <h3 style={{ color: '#f39c12', borderBottom: '2px solid #f39c12', paddingBottom: '0.5rem', marginTop: '1.5rem' }}>
                General Climbing Terms
              </h3>
              <dl style={{ marginTop: '1rem' }}>
                {getTermsByCategory('general').map(item => (
                  <div key={item.term} style={{ marginBottom: '1.25rem' }}>
                    <dt style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.term}</dt>
                    <dd style={{ marginLeft: '1rem', lineHeight: '1.5' }}>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClimbingGlossary;
