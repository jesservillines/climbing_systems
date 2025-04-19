import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import KnowledgeLevelToggle from '../components/shared/KnowledgeLevelToggle';
import TabNavigator from '../components/shared/TabNavigator';
import HamburgerMenu from '../components/shared/HamburgerMenu';

// Import components
import Introduction from '../components/big-wall-aid/Introduction';
import EssentialGear from '../components/big-wall-aid/EssentialGear';
import CleanAid from '../components/big-wall-aid/CleanAid';
import NailingTechniques from '../components/big-wall-aid/NailingTechniques';
import Hauling from '../components/big-wall-aid/Hauling';
import BigWallTechniques from '../components/big-wall-aid/BigWallTechniques';
import SafetyRisks from '../components/big-wall-aid/SafetyRisks';
import ExpertInsights from '../components/big-wall-aid/ExpertInsights';
import HistoryMilestones from '../components/big-wall-aid/HistoryMilestones';
import PortaledgeLiving from '../components/big-wall-aid/PortaledgeLiving';
import ModernInnovations from '../components/big-wall-aid/ModernInnovations';
import AidClimbingDiagram from '../components/big-wall-aid/AidClimbingDiagram';

export default function BigWallAid() {
  const [knowledgeLevel, setKnowledgeLevel] = useState('intermediate');
  
  // Define navigation items for both desktop and mobile menus
  const navItems = [
    { href: '/', label: 'Home', icon: '/icons/mountain.png' },
    { href: '/big-wall-aid', label: 'Big Wall & Aid', icon: '/icons/mountain_destination.png' },
    { href: '/rope-soloing', label: 'Rope Soloing', icon: '/icons/carabiner.png' },
    { href: '/learn', label: 'Learn', icon: '/icons/helmet.png' },
    { href: '/shop', label: 'Shop', icon: '/icons/mountain_destination.png' },
  ];
  
  // Store knowledge level preference in localStorage
  useEffect(() => {
    // Try to get saved preference, otherwise use default
    const savedLevel = localStorage.getItem('knowledgeLevel');
    if (savedLevel) {
      setKnowledgeLevel(savedLevel);
    }
  }, []);
  
  // Update localStorage when knowledge level changes
  useEffect(() => {
    localStorage.setItem('knowledgeLevel', knowledgeLevel);
  }, [knowledgeLevel]);

  // Define the tab groups and their content
  const tabGroups = {
    'fundamentals': [
      {
        id: 'introduction',
        label: 'Introduction',
        content: (
          <div>
            <Introduction />
            <AidClimbingDiagram />
          </div>
        )
      },
      {
        id: 'gear',
        label: 'Essential Gear',
        content: <EssentialGear />
      },
      {
        id: 'history',
        label: 'History & Milestones',
        content: <HistoryMilestones />
      },
      {
        id: 'innovations',
        label: 'Modern Innovations',
        content: <ModernInnovations />
      }
    ],
    'techniques': [
      {
        id: 'big-wall',
        label: 'Big Wall Techniques',
        content: <BigWallTechniques />
      },
      {
        id: 'clean-aid',
        label: 'Clean Aid',
        content: <CleanAid />
      },
      {
        id: 'nailing',
        label: 'Nailing Techniques',
        content: <NailingTechniques />
      },
      {
        id: 'hauling',
        label: 'Hauling & Logistics',
        content: <Hauling />
      }
    ],
    'living': [
      {
        id: 'portaledge',
        label: 'Portaledge Living',
        content: <PortaledgeLiving />
      },
      {
        id: 'safety',
        label: 'Safety Considerations',
        content: <SafetyRisks />
      },
      {
        id: 'expert-insights',
        label: 'Expert Insights',
        content: <ExpertInsights />
      }
    ]
  };

  return (
    <div>
      <Head>
        <title>Big Wall & Aid Climbing | AlpinistHub</title>
        <meta name="description" content="Comprehensive guide to big wall and aid climbing techniques, gear, and best practices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo-container">
          <Link href="/">
            <img src="/images/alpinisthub.png" alt="AlpinistHub Logo" className="site-logo" />
          </Link>
        </div>
        <ul className="desktop-nav nav-links">
          <li>
            <Link href="/">
              <img src="/icons/mountain.png" alt="" className="nav-icon" width={20} height={20} />
              Home
            </Link>
          </li>
          <li>
            <Link href="/big-wall-aid">
              <img src="/icons/mountain_destination.png" alt="" className="nav-icon" width={20} height={20} />
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
              <img src="/icons/mountain_destination.png" alt="" className="nav-icon" width={20} height={20} />
              Shop
            </Link>
          </li>
        </ul>
        
        {/* Mobile Hamburger Menu */}
        <HamburgerMenu navItems={navItems} />
      </nav>

      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="page-header" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <img src="/icons/mountain_destination.png" alt="Big wall icon" width={40} height={40} style={{ objectFit: 'contain' }} />
            <h1 style={{ margin: 0 }}>Big Wall and Aid Climbing: Techniques, Gear, and Best Practices</h1>
          </div>
          <p className="lead" style={{ fontSize: '1.1rem', fontWeight: 'normal', marginBottom: '1.5rem' }}>
            A comprehensive guide to the vertical world of big wall and aid climbing. Learn essential techniques, 
            specialized gear requirements, historical context, and safety considerations for tackling multi-day 
            ascents on the world's largest rock faces.
          </p>
          
          <div className="knowledge-level-container" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '1.5rem' 
          }}>
            <div style={{ fontWeight: 'bold' }}>Knowledge Level:</div>
            <KnowledgeLevelToggle level={knowledgeLevel} setLevel={setKnowledgeLevel} />
          </div>

          <div className="alert alert-warning" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <img src="/icons/helmet.png" width={30} height={30} alt="Safety warning" style={{ marginTop: '0.25rem' }} />
            <div>
              <h4>Warning: Advanced Climbing Techniques</h4>
              <p>
                Big wall and aid climbing require specialized knowledge, skills, and extensive gear management.
                The information provided here is for educational purposes only. Always seek proper training from 
                qualified instructors before attempting these advanced climbing techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation System */}
        <TabNavigator 
          tabGroups={tabGroups} 
          defaultActiveGroup="fundamentals"
          defaultActiveTab="introduction" 
        />
      </div>

      <footer className="container" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', gap: '1.5rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/mountain.png" width={20} height={20} alt="Home" />
            Home
          </Link>
          <Link href="/big-wall-aid" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/icons/mountain_destination.png" width={20} height={20} alt="Big Wall & Aid" />
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
            <img src="/icons/mountain_destination.png" width={20} height={20} alt="Shop" />
            Shop
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
