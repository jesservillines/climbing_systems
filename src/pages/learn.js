import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import KnowledgeLevelToggle from '../components/shared/KnowledgeLevelToggle';
import ClimbingGlossary from '../components/shared/ClimbingGlossary';
import ClimbingQuiz from '../components/shared/ClimbingQuiz';
import CommonMistakesGuide from '../components/shared/CommonMistakesGuide';

export default function Learn() {
  const [activeSection, setActiveSection] = useState('glossary');
  const [knowledgeLevel, setKnowledgeLevel] = useState('intermediate');
  const [quizScore, setQuizScore] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleQuizComplete = (score, total) => {
    setQuizScore({ score, total });
  };

  return (
    <div>
      <Head>
        <title>Educational Resources | AlpinistHub</title>
        <meta name="description" content="Educational resources, glossary, quizzes, and common mistakes for climbing and alpine techniques" />
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

      <div className="container" style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        {/* Table of Contents Sidebar */}
        <aside style={{ width: '250px', position: 'sticky', top: '100px', alignSelf: 'flex-start', marginTop: '2rem' }}>
          <div className="card">
            <h3>Educational Resources</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <a 
                  href="#glossary" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('glossary'); }}
                  className={activeSection === 'glossary' ? 'active' : ''}
                  style={{ display: 'block', padding: '0.5rem 0', color: activeSection === 'glossary' ? 'var(--primary-color)' : 'inherit' }}
                >
                  Climbing Glossary
                </a>
              </li>
              <li>
                <a 
                  href="#common-mistakes" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('common-mistakes'); }}
                  className={activeSection === 'common-mistakes' ? 'active' : ''}
                  style={{ display: 'block', padding: '0.5rem 0', color: activeSection === 'common-mistakes' ? 'var(--primary-color)' : 'inherit' }}
                >
                  Common Mistakes Guide
                </a>
              </li>
              <li>
                <a 
                  href="#knowledge-quiz" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('knowledge-quiz'); }}
                  className={activeSection === 'knowledge-quiz' ? 'active' : ''}
                  style={{ display: 'block', padding: '0.5rem 0', color: activeSection === 'knowledge-quiz' ? 'var(--primary-color)' : 'inherit' }}
                >
                  Knowledge Quiz
                </a>
              </li>
            </ul>
          </div>
          
          {/* Knowledge Level Toggle */}
          <div className="card" style={{ marginTop: '1rem' }}>
            <h3>Settings</h3>
            <KnowledgeLevelToggle level={knowledgeLevel} setLevel={setKnowledgeLevel} />
            
            {quizScore && (
              <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: quizScore.score / quizScore.total >= 0.7 ? '#d4edda' : '#f8d7da', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Last Quiz Score: {quizScore.score}/{quizScore.total}</p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, marginTop: '2rem' }}>
          <h1>Educational Resources</h1>
          <p className="lead" style={{ fontSize: '1.1rem', fontWeight: 'normal', marginBottom: '1rem' }}>
            Comprehensive educational resources to enhance your understanding of climbing systems and techniques.
            Use these tools to expand your knowledge, test your understanding, and learn to avoid common mistakes.
          </p>
          
          <div className="alert alert-info">
            <h4>Learning Resources</h4>
            <p>
              These educational tools are designed to supplement hands-on training, not replace it. 
              Always seek proper instruction from qualified professionals before implementing any techniques
              described in this application.
            </p>
          </div>

          {/* Climbing Glossary Section */}
          <section id="glossary" style={{ scrollMarginTop: '100px', marginBottom: '3rem' }}>
            <ClimbingGlossary />
          </section>
          
          {/* Common Mistakes Guide Section */}
          <section id="common-mistakes" style={{ scrollMarginTop: '100px', marginBottom: '3rem' }}>
            <CommonMistakesGuide system="rope-soloing" />
          </section>
          
          {/* Knowledge Quiz Section */}
          <section id="knowledge-quiz" style={{ scrollMarginTop: '100px', marginBottom: '3rem' }}>
            <ClimbingQuiz 
              topic="rope-soloing" 
              knowledgeLevel={knowledgeLevel} 
              onComplete={handleQuizComplete} 
            />
          </section>
        </main>
      </div>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .active {
          font-weight: bold;
        }
        aside ul li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
