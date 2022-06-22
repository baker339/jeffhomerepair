import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header page="Contact" />

      <NavBar currentTab="Contact" />

      <main className={styles.main}>
        <div
          className={
            styles.maininside +
            " " +
            styles.cardnohover +
            " " +
            styles.contactcontainer
          }
        >
          <div>
            <h1>Contact Us</h1>
            <h2>Call us at</h2>
            <span className={styles.phone} itemProp="telephone">
              <a href="tel:207-649-8010">207-649-8010</a>
            </span>
          </div>
          <br />
          <div>
            <h2>Or fill out the form below</h2>
            <form id="contact-form" className={styles.contactform}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="user_message"></textarea>
              <input
                id="submit-button"
                className="submit-button"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
