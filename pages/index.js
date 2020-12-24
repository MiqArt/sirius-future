import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sirius Future</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="main">
        {/* <Link href="/about">
          <a>route-test</a>
        </Link> */}
      </main>

      <footer className="footer">
        Footer
      </footer>
    </div>
  )
}
