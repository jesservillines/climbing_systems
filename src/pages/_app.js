import '../styles/globals.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useRouter } from 'next/router';

// Google Analytics 4 measurement ID
const GA_MEASUREMENT_ID = 'G-8KRH61B0X0'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics with options to allow localhost tracking
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        debug_mode: true,
        cookieDomain: 'none'
      },
      testMode: process.env.NODE_ENV !== 'production',
    });
    
    // Track initial page view
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      transport: 'beacon'
    });
    
    // Track page views on route changes
    const handleRouteChange = (url) => {
      ReactGA.send({
        hitType: 'pageview',
        page: url,
        transport: 'beacon'
      });
    };
    
    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Unsubscribe when component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
