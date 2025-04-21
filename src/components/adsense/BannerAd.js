import React from 'react';
import AdUnit from './AdUnit';

/**
 * Horizontal banner advertisement, ideal for page headers or footers
 */
const BannerAd = () => {
  // Your actual AdSense client ID
  const client = 'ca-pub-9987696895438929';
  // You'll need to create ad units in AdSense and replace this with your slot ID
  const slot = 'xxxxxxxxxx';
  
  return (
    <div className="banner-ad-container">
      <AdUnit 
        client={client}
        slot={slot}
        format="horizontal"
        responsive={true}
        style={{ 
          margin: '20px auto',
          maxWidth: '100%', 
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default BannerAd;
