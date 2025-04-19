import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import KnowledgeLevelToggle from '../components/shared/KnowledgeLevelToggle';
import TabNavigator from '../components/shared/TabNavigator';

// Import components
import Introduction from '../components/rope-soloing/Introduction';
import EssentialGear from '../components/rope-soloing/EssentialGear';
import SinglePitch from '../components/rope-soloing/SinglePitch';
import MultiPitch from '../components/rope-soloing/MultiPitch';
import AlpineSoloing from '../components/rope-soloing/AlpineSoloing';
import DeviceComparison from '../components/rope-soloing/DeviceComparison';
import SafetyRisks from '../components/rope-soloing/SafetyRisks';
import ExpertInsights from '../components/rope-soloing/ExpertInsights';
import LeadRopeSoloDiagram from '../components/rope-soloing/LeadRopeSoloDiagram';
import GriGriSetupGuide from '../components/rope-soloing/GriGriSetupGuide';

// Import new enhanced components
import SystemSetupWizard from '../components/rope-soloing/SystemSetupWizard';
import TroubleshootingGuide from '../components/rope-soloing/TroubleshootingGuide';
import VideoTutorials from '../components/rope-soloing/VideoTutorials';
import CaseStudies from '../components/rope-soloing/CaseStudies';

export default function RopeSoloing() {
  const [knowledgeLevel, setKnowledgeLevel] = useState('intermediate');
  
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
            <LeadRopeSoloDiagram />
          </div>
        )
      },
      {
        id: 'gear',
        label: 'Essential Gear',
        content: <EssentialGear />
      },
      {
        id: 'setup',
        label: 'Setup Guide',
        content: <GriGriSetupGuide knowledgeLevel={knowledgeLevel} />
      },
      {
        id: 'device-comparison',
        label: 'Device Comparison',
        content: <DeviceComparison />
      }
    ],
    'techniques': [
      {
        id: 'single-pitch',
        label: 'Single Pitch',
        content: <SinglePitch />
      },
      {
        id: 'multi-pitch',
        label: 'Multi-Pitch',
        content: <MultiPitch />
      },
      {
        id: 'alpine',
        label: 'Alpine Soloing',
        content: <AlpineSoloing />
      }
    ],
    'safety': [
      {
        id: 'risks',
        label: 'Safety Risks',
        content: <SafetyRisks />
      },
      {
        id: 'expert-insights',
        label: 'Expert Insights',
        content: <ExpertInsights />
      },
      {
        id: 'troubleshooting',
        label: 'Troubleshooting',
        content: <TroubleshootingGuide />
      }
    ],
    'learning': [
      {
        id: 'setup-wizard',
        label: 'Interactive Setup Wizard',
        content: <SystemSetupWizard />
      },
      {
        id: 'videos',
        label: 'Video Tutorials',
        content: <VideoTutorials />
      },
      {
        id: 'case-studies',
        label: 'Real-World Examples',
        content: <CaseStudies />
      }
    ]
  };

  return (
    <div>
      <Head>
        <title>Lead Rope Soloing | AlpinistHub</title>
        <meta name="description" content="Comprehensive guide to lead rope soloing systems, techniques, and safety" />
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
            <Link href="/">
              <img src="/icons/mountain.png" alt="" className="nav-icon" width={20} height={20} />
              Home
            </Link>
          </li>
          <li>
            <Link href="/rope-soloing" className="active">
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
      </nav>

      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="page-header" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <img src="/icons/carabiner.png" alt="Carabiner icon" width={40} height={40} style={{ objectFit: 'contain' }} />
            <h1 style={{ margin: 0 }}>Lead Rope Soloing: Systems, Techniques, and Safety Guide</h1>
          </div>
          <p className="lead" style={{ fontSize: '1.1rem', fontWeight: 'normal', marginBottom: '1.5rem' }}>
            A comprehensive resource on lead rope soloing - climbing and belaying yourself on lead without a partner.
            This guide covers essential techniques, systems for different climbing scenarios, equipment comparisons, 
            and crucial safety considerations.
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
              <h4>Warning: Advanced Technique</h4>
              <p>
                Lead rope soloing is an advanced climbing technique that carries inherent risks. The information 
                provided here is for educational purposes only. Always seek proper training from qualified 
                instructors before attempting to rope solo.
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
