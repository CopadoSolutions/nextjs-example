import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galler</title>
      </Head>
      <main>
        <h1>Gallery</h1>
      </main>
    </div>
  );
}
