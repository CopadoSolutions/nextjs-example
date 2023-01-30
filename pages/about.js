import Head from 'next/head';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About us</h1>
      </main>
    </div>
  );
}
