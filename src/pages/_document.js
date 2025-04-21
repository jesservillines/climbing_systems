import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Google Analytics 4 measurement ID
  const GA_MEASUREMENT_ID = 'G-8KRH61B0X0';
  
  // Google AdSense client ID
  const ADSENSE_CLIENT_ID = 'ca-pub-9987696895438929';

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A comprehensive guide to climbing systems and techniques" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        
        {/* Google AdSense */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                cookie_domain: 'none',
                debug_mode: true,
                send_page_view: true,
                // Enable tracking on localhost
                cookieDomain: 'none',
                transport_type: 'beacon'
              });
              console.log('Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
