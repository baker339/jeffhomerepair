import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header page="About" />

      <NavBar currentTab="About" />

      <main className={styles.main}>
        <div className={styles.maininside + " " + styles.cardnohover}>
          <h1>About Us</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
