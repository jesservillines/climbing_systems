import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Sorry, something went wrong. Please try again or return to the homepage.
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
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
