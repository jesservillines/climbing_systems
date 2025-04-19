import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AlpinistHub | Home</title>
        <meta name="description" content="Expert information about climbing systems, techniques, and safety guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo-container">
          <img src="/images/alpinisthub-logo.svg" alt="AlpinistHub Logo" className="site-logo" />
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rope-soloing">Rope Soloing</Link>
          </li>
          <li>
            <Link href="/learn">Learn</Link>
          </li>
        </ul>
      </nav>

      <main className="container">
        <header className="hero">
          <h1>Welcome to AlpinistHub</h1>
          <p>
            Your comprehensive resource for understanding, setting up, and safely using
            various climbing systems and techniques.
          </p>
          <p>
            Explore our guides to learn about different climbing methods, equipment recommendations,
            and best practices for staying safe while climbing.
          </p>
        </header>
        
        {/* New Featured Section - Educational Resources */}
        <div className="new-feature-highlight" style={{ 
          margin: '2rem 0', 
          padding: '1.5rem', 
          backgroundColor: '#e3f2fd', 
          borderRadius: '8px',
          border: '2px solid #bbdefb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ flex: '3', minWidth: '300px' }}>
            <h2 style={{ marginTop: 0, color: '#1565c0' }}>🆕 New Educational Resources Available!</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Explore our new interactive learning tools, including a comprehensive climbing glossary, 
              knowledge quizzes, and visual guides to avoid common mistakes.
            </p>
            <Link href="/learn" style={{ 
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1565c0',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginTop: '0.5rem'
            }}>Explore Educational Resources</Link>
          </div>
          <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <div style={{ 
              fontSize: '4rem', 
              padding: '1rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              width: '100px',
              height: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>📚</div>
          </div>
        </div>

        <section className="grid">
          <div className="card">
            <h2>Lead Rope Soloing</h2>
            <p>
              Learn about the practice of climbing and belaying yourself on lead,
              without a partner. Understand the systems, techniques, and safety considerations.
              Includes equipment guides and safety information.
            </p>
            <Link href="/rope-soloing" className="btn">
              Explore Techniques
            </Link>
          </div>
          
          <div className="card">
            <h2>Educational Resources</h2>
            <p>
              Interactive learning tools including a climbing glossary, knowledge quizzes, 
              and visual guides to avoid common climbing mistakes.
            </p>
            <Link href="/learn" className="btn">
              Start Learning
            </Link>
          </div>
        </section>
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} Climbing Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
