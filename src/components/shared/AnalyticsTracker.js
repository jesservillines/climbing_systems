import ReactGA from 'react-ga4';

/**
 * Track user events on the AlpinistHub website
 * 
 * @param {string} category - Event category (e.g., 'Shop', 'Navigation', 'Resources')
 * @param {string} action - Event action (e.g., 'Click', 'Download', 'View')
 * @param {string} label - Event label (e.g., 'Shop Button', 'Big Wall Guide')
 * @param {object} additionalParams - Any additional parameters to track
 */
export const trackEvent = (category, action, label, additionalParams = {}) => {
  ReactGA.event({
    category,
    action,
    label,
    ...additionalParams
  });
};

/**
 * Track shop interactions
 */
export const trackShopClick = (itemName) => {
  trackEvent('Shop', 'Click', itemName);
};

/**
 * Track resource downloads
 */
export const trackResourceDownload = (resourceName) => {
  trackEvent('Resources', 'Download', resourceName);
};

/**
 * Track navigation interactions
 */
export const trackNavigation = (destination) => {
  trackEvent('Navigation', 'Click', destination);
};

/**
 * Track time spent on guides or resources
 */
export const trackTimeSpent = (section, timeInSeconds) => {
  trackEvent('Engagement', 'Time Spent', section, { value: timeInSeconds });
};

export default {
  trackEvent,
  trackShopClick,
  trackResourceDownload,
  trackNavigation,
  trackTimeSpent
};
