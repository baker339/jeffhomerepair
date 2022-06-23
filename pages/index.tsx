import type { NextPage } from "next";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar currentTab="Home" />
      <main className={styles.main}>
        {/* <Link href="/contact">
          <a className={styles.card}>Contact Us</a>
        </Link> */}
        <span className={styles.maininside} itemProp="telephone">
          <div className={styles.contactbuttonmobile}>
            <a href="tel:207-649-8010">Give Us a Call</a>
          </div>
          <div className={styles.contactbutton}>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
        </span>
        <div className={styles.grid}>
          <Link href="/services">
            <a className={styles.card}>
              <>
                <h2>Maintenance &rarr;</h2>
                <ul>
                  <li>Changing Lightbulbs</li>
                  <li>Changing Alarm Batteries</li>
                </ul>
              </>
            </a>
          </Link>
          <Link href="/services">
            <a className={styles.card}>
              <>
                <h2>Painting &rarr;</h2>
                <ul>
                  <li>Interiors</li>
                  <li>Shutters</li>
                  <li>Lamp Posts</li>
                  <li>Mailboxes</li>
                </ul>
              </>
            </a>
          </Link>
          <Link href="/services">
            <a className={styles.card}>
              <>
                <h2>Misc. &rarr;</h2>
                <ul>
                  <li>Minor Carpentry</li>
                  <li>Minor Plumbing</li>
                  <li>Gutter Cleaning</li>
                  <li>Gutter Guard Installation</li>
                </ul>
              </>
            </a>
          </Link>
          <Link href="/services">
            <a className={styles.card}>
              <h2>And More! &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
