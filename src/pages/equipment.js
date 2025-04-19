import Head from 'next/head';
import Link from 'next/link';

export default function Equipment() {
  return (
    <div>
      <Head>
        <title>Climbing Equipment | Climbing Systems</title>
        <meta name="description" content="Information about climbing equipment for different climbing systems and techniques" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <h1>Climbing Systems</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rope-soloing">Rope Soloing</Link>
          </li>
          <li>
            <Link href="/equipment">Equipment</Link>
          </li>
          <li>
            <Link href="/safety">Safety</Link>
          </li>
        </ul>
      </nav>

      <main className="container">
        <section className="card">
          <h1>Climbing Equipment Guide</h1>
          <p>
            This page will contain comprehensive information about various climbing equipment,
            including detailed comparisons, usage guidelines, and recommendations.
          </p>
          <p>
            Check back soon for detailed content about climbing equipment, or visit our 
            <Link href="/rope-soloing"> Rope Soloing</Link> page to explore our completed section on lead rope soloing.
          </p>
        </section>
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} Climbing Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
