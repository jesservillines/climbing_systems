import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenu from '../components/shared/HamburgerMenu';
import StructuredData from '../components/shared/StructuredData';

export default function Home() {
  // Define navigation items for both desktop and mobile menus
  const navItems = [
    { href: '/', label: 'Home', icon: '/icons/mountain.png' },
    { href: '/big-wall-aid', label: 'Big Wall & Aid', icon: '/icons/shop.png' },
    { href: '/rope-soloing', label: 'Rope Soloing', icon: '/icons/carabiner.png' },
    { href: '/learn', label: 'Learn', icon: '/icons/helmet.png' },
    { href: '/shop', label: 'Shop', icon: '/icons/shop.png' },
  ];
  return (
    <div>
      <Head>
        <title>AlpinistHub | Expert Climbing Systems & Techniques Guide</title>
        <meta name="description" content="Comprehensive resource for climbing systems, techniques, and safety guides. Learn about big wall climbing, aid climbing, rope soloing, and more." />
        <meta name="keywords" content="climbing systems, aid climbing, big wall, rope soloing, climbing techniques, climbing safety, alpinist, climbing gear" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AlpinistHub | Expert Climbing Systems & Techniques" />
        <meta property="og:description" content="Comprehensive resource for climbing systems, techniques, and safety guides. Learn about big wall climbing, aid climbing, rope soloing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alpinisthub.com" />
        <meta property="og:image" content="/images/alpinisthub.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlpinistHub | Expert Climbing Systems & Techniques" />
        <meta name="twitter:description" content="Your comprehensive resource for climbing systems, techniques, and safety guides." />
        <meta name="twitter:image" content="/images/alpinisthub.png" />
        <link rel="canonical" href="https://alpinisthub.com" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AlpinistHub",
          "url": "https://alpinisthub.com",
          "description": "Comprehensive resource for climbing systems, techniques, and safety guides.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://alpinisthub.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }} />
      </Head>

      <nav className="navbar">
        <div className="logo-container">
          <Link href="/">
            <img src="/images/alpinisthub.png" alt="AlpinistHub Logo" className="site-logo" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <li>
            <Link href="/" className="active">
              <img src="/icons/mountain.png" alt="" className="nav-icon" width={20} height={20} />
              Home
            </Link>
          </li>
          <li>
            <Link href="/big-wall-aid">
              <img src="/icons/shop.png" alt="" className="nav-icon" width={20} height={20} />
              Big Wall & Aid
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
            <Link href="/shop">
              <img src="/icons/shop.png" alt="" className="nav-icon" width={20} height={20} />
              Shop
            </Link>
          </li>
        </ul>
        
        {/* Mobile Hamburger Menu */}
        <HamburgerMenu navItems={navItems} />
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
          opacity: '0.08',
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
          <h1>Welcome to <span style={{ color: 'var(--primary-color)' }}>Alpinist</span><span style={{ color: '#444444' }}>Hub</span></h1>
          <p>
            Your comprehensive resource for understanding, setting up, and safely using
            various climbing systems and techniques.
          </p>
          <p>
            Explore our guides to learn about different climbing methods, equipment recommendations,
            and best practices for staying safe while climbing.
          </p>
        </header>
        


        {/* Shop Promotion Section */}
        <div className="new-feature-highlight" style={{ 
          padding: '1.5rem', 
          backgroundColor: 'rgba(28, 110, 164, 0.1)', 
          borderRadius: '5px',
          marginBottom: '2rem',
          border: '1px solid var(--primary-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ marginTop: 0 }}><span style={{ color: 'var(--primary-color)' }}>Alpinist</span><span style={{ color: '#444444' }}>Hub</span> Stickers Now Available!</h2>
              <p>
                Show your climbing passion with our exclusive collection of climbing-themed stickers. 
                From "Beta Spray" to "Send Train", express your climbing identity with our high-quality, 
                weather-resistant designs.
              </p>
              <Link href="/shop" className="btn btn-shop">
                <span className="btn-icon-wrapper">
                  <img src="/icons/shop.png" alt="" className="btn-icon" />
                </span>
                Check Out The Shop
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
              <span className="btn-icon-wrapper">
                <img src="/icons/mountain_destination.png" alt="" className="btn-icon" />
              </span>
              Explore Techniques
            </Link>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/icons/shop.png" alt="Big Wall & Aid icon" width={30} height={30} style={{ objectFit: 'contain' }} />
              <h2 style={{ margin: 0 }}>Big Wall & Aid Climbing</h2>
            </div>
            <p>
              Discover the world of big wall and aid climbing. Explore multi-day ascents, specialized gear, advanced techniques, and safety practices for tackling the largest rock faces.
            </p>
            <Link href="/big-wall-aid" className="btn">
              <span className="btn-icon-wrapper">
                <img src="/icons/shop.png" alt="" className="btn-icon" />
              </span>
              Explore Big Wall & Aid
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
              <span className="btn-icon-wrapper">
                <img src="/icons/axe_comment.png" alt="" className="btn-icon" />
              </span>
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
          <Link href="/big-wall-aid" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/shop.png" width={20} height={20} alt="Big Wall & Aid" />
            Big Wall & Aid
          </Link>
          <Link href="/rope-soloing" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/carabiner.png" width={20} height={20} alt="Rope Soloing" />
            Rope Soloing
          </Link>
          <Link href="/learn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/helmet.png" width={20} height={20} alt="Learn" />
            Learn
          </Link>
          <Link href="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/shop.png" width={20} height={20} alt="Shop" />
            Shop
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
