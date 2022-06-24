import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NavBar } from "../components/nav";
import Carousel from "react-material-ui-carousel";

interface ServiceList {
  Service: String;
  SubServices: String[];
}
const services: ServiceList[] = [
  {
    Service: "Maintenance",
    SubServices: [
      "Changing Lightbulbs",
      "Changing Alarm Batteries",
      "Dryer Vent Cleaning",
    ],
  },
  {
    Service: "Painting",
    SubServices: ["Interiors", "Shutters", "Lamp Posts", "Mailboxes"],
  },
  {
    Service: "Misc.",
    SubServices: [
      "Minor Carpentry",
      "Minor Plumbing",
      "Gutter Cleaning",
      "Gutter Guard Installation",
    ],
  },
  { Service: "And More!", SubServices: [] },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header page="Services" />

      <NavBar currentTab="Services" />

      <main className={styles.main}>
        <div className={styles.maininside} style={{ width: "20rem" }}>
          <Carousel stopAutoPlayOnHover>
            {services.map((s, index) => {
              return (
                <div key={index.toString()} className={styles.cardnohover}>
                  <h2>{s.Service}</h2>
                  <ul>
                    {s.SubServices.map((s, index) => (
                      <li key={index.toString()}>{s}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Carousel>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
