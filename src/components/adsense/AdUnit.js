import React, { useEffect } from 'react';

/**
 * Google AdSense Advertisement Unit
 * 
 * @param {Object} props Component properties
 * @param {string} props.client Your AdSense client ID
 * @param {string} props.slot The ad unit slot ID
 * @param {string} props.format Ad format (e.g., 'auto', 'rectangle', etc.)
 * @param {string} props.responsive Whether the ad should be responsive (true/false)
 * @param {Object} props.style Additional styles for the ad container
 */
const AdUnit = ({ client, slot, format = 'auto', responsive = true, style = {} }) => {
  useEffect(() => {
    // Try to load ads when the component mounts
    try {
      // This condition helps prevent errors during development
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: 'center', margin: '20px 0', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdUnit;
