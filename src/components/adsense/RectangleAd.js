import React from 'react';
import AdUnit from './AdUnit';

/**
 * Rectangle advertisement, ideal for sidebars or within content
 */
const RectangleAd = () => {
  // Your actual AdSense client ID
  const client = 'ca-pub-9987696895438929';
  // You'll need to create ad units in AdSense and replace this with your slot ID
  const slot = 'xxxxxxxxxx';
  
  return (
    <div className="rectangle-ad-container">
      <AdUnit 
        client={client}
        slot={slot}
        format="rectangle"
        responsive={false}
        style={{ 
          margin: '20px auto',
          width: '300px',
          height: '250px',
          maxWidth: '100%'
        }}
      />
    </div>
  );
};

export default RectangleAd;
