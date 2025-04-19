import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page Not Found | AlpinistHub</title>
        <meta name="description" content="The page you are looking for does not exist" />
      </Head>

      <main style={{ 
        textAlign: 'center', 
        padding: '100px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#f39c12' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
        
        <div style={{ margin: '2rem 0' }}>
          <img 
            src="/images/alpinisthub.png" 
            alt="AlpinistHub Logo" 
            style={{ maxWidth: '200px', margin: '0 auto' }}
          />
        </div>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        
        <Link href="/" style={{
          display: 'inline-block',
          background: '#f39c12',
          color: 'black',
          padding: '12px 24px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Return to Homepage
        </Link>
      </main>
    </div>
  );
}
