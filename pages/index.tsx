import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar currentTab="Home" />
      <main className={styles.main}>
        <Link href="/contact" className={styles.description}>
          Contact Us
        </Link>
        <div className={styles.grid}>
          <Link href="/services" className={styles.card}>
            <>
              <h2>Maintenance &rarr;</h2>
              <ul>
                <li>Power Washing</li>
                <li>Hedge Trimming</li>
                <li>Changing Lightbulbs</li>
                <li>Changing Alarm Batteries</li>
              </ul>
            </>
          </Link>
          <Link href="/services" className={styles.card}>
            <>
              <h2>Painting &rarr;</h2>
              <ul>
                <li>Interiors</li>
                <li>Shutters</li>
                <li>Lamp Posts</li>
                <li>Mailboxes</li>
              </ul>
            </>
          </Link>
          <Link href="/services" className={styles.card}>
            <>
              <h2>Misc. &rarr;</h2>
              <ul>
                <li>Minor Carpentry</li>
                <li>Minor Plumbing</li>
                <li>Gutter Cleaning</li>
                <li>Gutter Guard Installation</li>
              </ul>
            </>
          </Link>
          <Link href="/services" className={styles.card}>
            <h2>And More! &rarr;</h2>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
