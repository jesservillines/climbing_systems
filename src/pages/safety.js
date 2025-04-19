import Head from 'next/head';
import Link from 'next/link';

export default function Safety() {
  return (
    <div>
      <Head>
        <title>Climbing Safety | Climbing Systems</title>
        <meta name="description" content="Comprehensive climbing safety information and guidelines" />
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
          <h1>Climbing Safety Guidelines</h1>
          <p>
            This page will contain comprehensive information about climbing safety practices,
            risk management, and emergency protocols for various climbing situations.
          </p>
          <p>
            Check back soon for detailed content about climbing safety, or visit our 
            <Link href="/rope-soloing"> Rope Soloing</Link> page to explore our completed section on lead rope soloing,
            which includes detailed safety information specific to rope soloing.
          </p>
        </section>
      </main>

      <footer className="container" style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
        <p>&copy; {new Date().getFullYear()} Climbing Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
