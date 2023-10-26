import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from './components/footer';
import Welcome from './components/welcome';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Welcome />
      <Footer />
    </div>
  );
}
