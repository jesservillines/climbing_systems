import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Icon from '../components/shared/Icon';

export default function DesignSystem() {
  // Icons available in the system
  const icons = [
    { name: 'axe_comment', description: 'Ice axe with comment bubble' },
    { name: 'carabiner', description: 'Climbing carabiner' },
    { name: 'helmet', description: 'Climbing helmet' },
    { name: 'icon', description: 'Generic icon' },
    { name: 'mountain', description: 'Mountain peak' },
    { name: 'mountain_destination', description: 'Mountain with destination marker' },
    { name: 'join_now', description: 'Call to action button' }
  ];

  // Design system color palette
  const colorPalette = [
    { name: 'Primary (Orange)', color: '#f39c12', textColor: 'black' },
    { name: 'Secondary (Off-white)', color: '#f5f5f0', textColor: 'black' },
    { name: 'Dark (Black)', color: '#000000', textColor: 'white' },
    { name: 'Accent 1 (Teal)', color: '#1abc9c', textColor: 'white' },
    { name: 'Accent 2 (Purple)', color: '#9b59b6', textColor: 'white' },
    { name: 'Success', color: '#2ecc71', textColor: 'white' },
    { name: 'Warning', color: '#f39c12', textColor: 'black' },
    { name: 'Danger', color: '#e74c3c', textColor: 'white' },
    { name: 'Info', color: '#3498db', textColor: 'white' }
  ];

  // Typography examples
  const typographyExamples = [
    { element: 'h1', text: 'Heading 1', description: 'For main page titles' },
    { element: 'h2', text: 'Heading 2', description: 'For section titles' },
    { element: 'h3', text: 'Heading 3', description: 'For card titles or subsections' },
    { element: 'h4', text: 'Heading 4', description: 'For smaller section headers' },
    { element: 'p', text: 'Paragraph text', description: 'Regular body text' },
    { element: 'small', text: 'Small text', description: 'For captions and fine print' }
  ];

  return (
    <div>
      <Head>
        <title>Design System | AlpinistHub</title>
        <meta name="description" content="AlpinistHub design system showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo-container">
          <img src="/images/alpinisthub.png" alt="AlpinistHub Logo" className="site-logo" />
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
          <li>
            <Link href="/design-system">Design System</Link>
          </li>
        </ul>
      </nav>

      <main className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <h1>AlpinistHub Design System</h1>
        <p className="lead">
          A comprehensive guide to all design elements used throughout the AlpinistHub platform.
          Use this as a reference when implementing new components.
        </p>

        {/* Icon Showcase */}
        <section id="icons" style={{ marginTop: '3rem' }}>
          <h2>Icons</h2>
          <p>These icons can be used to enhance the user interface and provide visual cues.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            {icons.map((icon) => (
              <div key={icon.name} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <Icon name={icon.name} width={50} height={50} />
                <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{icon.name}</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{icon.description}</p>
                <code style={{ fontSize: '0.8rem', display: 'block', marginTop: '0.5rem', background: '#f8f9fa', padding: '0.5rem', borderRadius: '4px' }}>
                  {`<Icon name="${icon.name}" />`}
                </code>
              </div>
            ))}
          </div>
          
          <div className="card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3>Example Icon Usage</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', marginTop: '1rem' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-color)', color: 'black', border: 'none', padding: '0.75rem 1.25rem', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                <Icon name="mountain" width={20} height={20} />
                Explore Mountains
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="helmet" width={24} height={24} />
                <span>Safety Equipment Required</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f8f9fa', padding: '0.75rem', borderRadius: '4px' }}>
                <Icon name="axe_comment" width={24} height={24} />
                <span>Expert Advice Available</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Icon Recommendations</h3>
            <ul style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <li>Use icons consistently across the platform</li>
              <li>Pair icons with text for better accessibility</li>
              <li>Keep icon size proportional to the surrounding content</li>
              <li>Use the Icon component for consistent rendering</li>
            </ul>
            
            <p>Consider adding additional icons for:</p>
            <ul>
              <li>Navigation elements (home, back, menu)</li>
              <li>Action items (save, favorite, share)</li>
              <li>Equipment categories (ropes, harnesses, anchors)</li>
              <li>Climbing techniques (belaying, rappelling, lead climbing)</li>
              <li>Weather conditions (sun, wind, rain, snow)</li>
            </ul>
          </div>
        </section>

        {/* Color Palette */}
        <section id="colors" style={{ marginTop: '4rem' }}>
          <h2>Color Palette</h2>
          <p>The AlpinistHub color system is designed to create a consistent and accessible experience.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {colorPalette.map((color) => (
              <div key={color.name} style={{ background: color.color, padding: '1.5rem', borderRadius: '4px', color: color.textColor }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{color.name}</h4>
                <code>{color.color}</code>
              </div>
            ))}
          </div>
          
          <div className="card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3>Color Usage Guidelines</h3>
            <ul style={{ marginTop: '1rem' }}>
              <li>Use primary orange for main calls to action and branding elements</li>
              <li>Use the dark background for headers and footers</li>
              <li>Use accent colors sparingly to highlight important information</li>
              <li>Ensure sufficient contrast for accessibility</li>
              <li>Maintain consistent use of colors for specific actions (e.g., danger for warnings)</li>
            </ul>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" style={{ marginTop: '4rem' }}>
          <h2>Typography</h2>
          <p>Consistent typography helps create a clear hierarchy and improves readability.</p>
          
          <div className="card" style={{ marginTop: '1.5rem', padding: '2rem' }}>
            {typographyExamples.map((item) => {
              const Element = item.element;
              return (
                <div key={item.element} style={{ marginBottom: '2rem' }}>
                  <Element>{item.text}</Element>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>{item.description}</p>
                  <hr style={{ margin: '1rem 0', opacity: 0.2 }} />
                </div>
              );
            })}
          </div>
          
          <div className="card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3>Typography Recommendations</h3>
            <ul style={{ marginTop: '1rem' }}>
              <li>Use a consistent type scale throughout the application</li>
              <li>Maintain adequate line height for improved readability</li>
              <li>Use heading levels semantically (H1 for page title, H2 for sections, etc.)</li>
              <li>Consider adding a secondary font for accents (like headings)</li>
            </ul>
          </div>
        </section>

        {/* Component Examples */}
        <section id="components" style={{ marginTop: '4rem' }}>
          <h2>Component Examples</h2>
          <p>Here are some examples of how to combine colors, typography, and icons in components.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
            {/* Card Example */}
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '160px', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="mountain" width={80} height={80} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3>Alpine Climbing Guide</h3>
                <p>Comprehensive techniques for climbing in alpine environments.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-color)', color: 'black', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Learn More
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Icon name="helmet" width={20} height={20} />
                    <small>Advanced Level</small>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alert Example */}
            <div>
              <div style={{ padding: '1rem', background: '#2ecc71', color: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Icon name="mountain_destination" width={24} height={24} />
                <div>
                  <strong>Success Message</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Your climbing route has been saved.</p>
                </div>
              </div>
              
              <div style={{ padding: '1rem', background: '#e74c3c', color: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icon name="carabiner" width={24} height={24} />
                <div>
                  <strong>Warning Message</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Always double-check your equipment before climbing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Design Recommendations */}
        <section id="recommendations" style={{ marginTop: '4rem' }}>
          <h2>Additional Design Recommendations</h2>
          
          <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3>Imagery & Illustrations</h3>
            <p>Consider adding these visual elements to enhance your design:</p>
            <ul>
              <li>Hero banners featuring dramatic mountain landscapes</li>
              <li>Step-by-step diagram illustrations for techniques</li>
              <li>Custom illustrations showing climbing systems in action</li>
              <li>Infographics explaining complex safety procedures</li>
              <li>Before/after comparisons of proper vs. improper techniques</li>
            </ul>
          </div>
          
          <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3>Interactive Elements</h3>
            <p>Consider adding these elements to improve engagement:</p>
            <ul>
              <li>Interactive climbing route visualizations</li>
              <li>Equipment selection wizards with drag-and-drop interfaces</li>
              <li>Technique videos with interactive annotations</li>
              <li>Calculators for rope length, gear requirements, etc.</li>
              <li>Interactive checklists for climb preparation</li>
            </ul>
          </div>
          
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3>Animation & Microinteractions</h3>
            <p>Subtle animations can make your interface more engaging:</p>
            <ul>
              <li>Smooth transitions between pages and states</li>
              <li>Loading indicators with climbing-themed animations</li>
              <li>Hover effects on interactive elements</li>
              <li>Progress indicators for multi-step processes</li>
              <li>Subtle parallax effects on hero images</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} AlpinistHub.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
