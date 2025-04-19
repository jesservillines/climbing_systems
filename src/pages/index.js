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
          <Link href="/">
            <img src="/images/alpinisthub.png" alt="AlpinistHub Logo" className="site-logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/" className="active">
              <img src="/icons/mountain.png" alt="" className="nav-icon" width={20} height={20} />
              Home
            </Link>
          </li>
          <li>
            <Link href="/rope-soloing">
              <img src="/icons/carabiner.png" alt="" className="nav-icon" width={20} height={20} />
              Rope Soloing
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <img src="/icons/helmet.png" alt="" className="nav-icon" width={20} height={20} />
              Learn
            </Link>
          </li>
          <li>
            <Link href="/design-system">
              <img src="/icons/image.png" alt="" className="nav-icon" width={20} height={20} />
              Design
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container" style={{ position: 'relative' }}>
        {/* Large transparent background logo */}
        <div style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          opacity: '0.05',
          zIndex: '-1',
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src="/images/alpinisthub.png" 
            alt="" 
            style={{ 
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
        
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
          padding: '1.5rem', 
          backgroundColor: 'rgba(243, 156, 18, 0.1)', 
          borderRadius: '5px',
          marginBottom: '2rem',
          border: '1px solid var(--primary-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ 
              backgroundColor: 'var(--primary-color)', 
              color: 'black', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '4px', 
              fontSize: '0.8rem',
              fontWeight: 'bold',
              marginRight: '1rem',
              marginTop: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <img src="/icons/join_now.png" width={16} height={16} alt="" />
              NEW
            </div>
            <div>
              <h2 style={{ marginTop: 0 }}>New Educational Resources Available!</h2>
              <p>
                Explore our new interactive learning tools, including a comprehensive
                climbing glossary, knowledge quizzes, and visual guides to avoid common
                mistakes.
              </p>
              <Link href="/learn" className="btn">
                <img src="/icons/helmet.png" width={20} height={20} alt="" style={{ marginRight: '8px' }} />
                Explore Educational Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/icons/carabiner.png" alt="Carabiner icon" width={30} height={30} style={{ objectFit: 'contain' }} />
              <h2 style={{ margin: 0 }}>Lead Rope Soloing</h2>
            </div>
            <p>
              Learn about the practice of climbing and belaying yourself on lead,
              without a partner. Understand the systems, techniques, and safety considerations.
              Includes equipment guides and safety information.
            </p>
            <Link href="/rope-soloing" className="btn">
              <img src="/icons/mountain_destination.png" alt="" width={20} height={20} style={{ marginRight: '8px' }} />
              Explore Techniques
            </Link>
          </div>
          
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/icons/helmet.png" alt="Helmet icon" width={30} height={30} style={{ objectFit: 'contain' }} />
              <h2 style={{ margin: 0 }}>Educational Resources</h2>
            </div>
            <p>
              Interactive learning tools including a climbing glossary, knowledge quizzes, 
              and visual guides to avoid common climbing mistakes.
            </p>
            <Link href="/learn" className="btn">
              <img src="/icons/axe_comment.png" alt="" width={20} height={20} style={{ marginRight: '8px' }} />
              Start Learning
            </Link>
          </div>
        </div>
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', gap: '1.5rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/mountain.png" width={20} height={20} alt="Home" />
            Home
          </Link>
          <Link href="/rope-soloing" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/carabiner.png" width={20} height={20} alt="Rope Soloing" />
            Rope Soloing
          </Link>
          <Link href="/learn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/helmet.png" width={20} height={20} alt="Learn" />
            Learn
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
