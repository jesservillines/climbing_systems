import React from 'react';
import AdUnit from './AdUnit';

/**
 * In-article advertisement, designed to be placed within content
 */
const InArticleAd = () => {
  // Your actual AdSense client ID
  const client = 'ca-pub-9987696895438929';
  // You'll need to create ad units in AdSense and replace this with your slot ID
  const slot = 'xxxxxxxxxx';
  
  return (
    <div className="in-article-ad-container">
      <AdUnit 
        client={client}
        slot={slot}
        format="fluid"
        responsive={true}
        style={{ 
          margin: '30px auto',
          textAlign: 'center',
          maxWidth: '100%'
        }}
      />
    </div>
  );
};

export default InArticleAd;
