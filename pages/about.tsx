import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header page="About" />

      <NavBar currentTab="About" />

      <main className={styles.main}>
        <div
          className={styles.maininside + " " + styles.cardnohover}
          style={{ maxWidth: "100rem" }}
        >
          <h1>About Us</h1>
          <div>
            <p>
              Jeff Baker is a retired master electrician and a skilled carpenter
              and handyman.
            </p>
            <p>
              He enjoys woodworking as a hobby and is all around skilled at home
              repair and maintenance.
            </p>
            <p>
              Jeff Baker is located in the Brunswick Plantation community in
              Calabash, NC
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/contact">
              <div className={styles.contactbutton}>Contact</div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
