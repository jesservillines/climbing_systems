import React, { useState } from 'react';

const VideoTutorials = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 'basics',
      title: 'Rope Soloing Basics',
      description: 'An introduction to the fundamental concepts and safety considerations for rope soloing.',
      embedId: 'dv3S9U1D6XU', // Example YouTube video ID
      duration: '12:34',
      topics: ['Basics', 'Safety', 'Introduction']
    },
    {
      id: 'grigri-setup',
      title: 'GriGri Setup for Rope Soloing',
      description: 'Detailed guide on how to properly set up a GriGri for safe and effective rope soloing.',
      embedId: 'SlCr1dQsUvA', // Example YouTube video ID
      duration: '8:27',
      topics: ['Equipment', 'GriGri', 'Setup']
    },
    {
      id: 'backup-systems',
      title: 'Essential Backup Systems',
      description: 'Learn how to implement critical backup systems to maximize safety while rope soloing.',
      embedId: 'PElT_VAC5fk', // Example YouTube video ID
      duration: '15:42',
      topics: ['Safety', 'Techniques', 'Backups']
    },
    {
      id: 'multipitch',
      title: 'Multi-Pitch Rope Soloing',
      description: 'Advanced techniques for tackling multi-pitch routes while rope soloing.',
      embedId: 'nU4X-0_0AtM', // Example YouTube video ID
      duration: '18:51',
      topics: ['Advanced', 'Multi-pitch', 'Techniques']
    }
  ];

  const [filter, setFilter] = useState('All');
  
  const allTopics = ['All', ...new Set(videos.flatMap(video => video.topics))].sort();
  
  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(video => video.topics.includes(filter));

  return (
    <div id="video-tutorials" style={{ marginBottom: '3rem' }}>
      <h2>Video Tutorials</h2>
      <p>
        Watch these expert demonstrations of rope soloing techniques to complement your 
        theoretical knowledge with visual learning.
      </p>

      {/* Topic filters */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {allTopics.map(topic => (
          <button
            key={topic}
            onClick={() => setFilter(topic)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: filter === topic ? 'var(--primary-color)' : 'white',
              color: filter === topic ? 'white' : 'var(--primary-color)',
              border: '1px solid var(--primary-color)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: filter === topic ? 'bold' : 'normal',
              fontSize: '0.9rem'
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Video player */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '4px' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src={`https://www.youtube.com/embed/${filteredVideos[activeVideo]?.embedId}`}
              title={filteredVideos[activeVideo]?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{filteredVideos[activeVideo]?.title}</h3>
            <p>{filteredVideos[activeVideo]?.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {filteredVideos[activeVideo]?.topics.map(topic => (
                <span
                  key={topic}
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    color: 'var(--primary-color)',
                    borderRadius: '50px',
                    fontSize: '0.85rem'
                  }}
                >
                  {topic}
                </span>
              ))}
              <span style={{ 
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(52, 152, 219, 0.05)',
                color: '#666',
                borderRadius: '50px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {filteredVideos[activeVideo]?.duration}
              </span>
            </div>
          </div>
        </div>
        
        {/* Video selection */}
        <div className="video-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(index)}
              style={{
                cursor: 'pointer',
                border: `2px solid ${activeVideo === index ? 'var(--primary-color)' : '#e0e0e0'}`,
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                backgroundColor: activeVideo === index ? 'rgba(52, 152, 219, 0.05)' : 'white'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`}
                  alt={video.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ 
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  fontSize: '0.85rem'
                }}>
                  {video.duration}
                </div>
                {activeVideo === index && (
                  <div style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '15px solid var(--primary-color)', marginLeft: '5px' }}></div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: '0.75rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: activeVideo === index ? 'var(--primary-color)' : 'inherit' }}>{video.title}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <p style={{ margin: 0, color: '#666' }}>No videos found for the selected filter. Please try another category.</p>
          </div>
        )}
      </div>
      
      <div className="disclaimer" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px', fontSize: '0.9rem', color: '#666' }}>
        <p style={{ margin: 0 }}>
          <strong>Note:</strong> Videos are provided for educational purposes. Always practice new techniques in a controlled environment with proper supervision before attempting rope soloing.
        </p>
      </div>
    </div>
  );
};

export default VideoTutorials;
