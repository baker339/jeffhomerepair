import styles from "../styles/Home.module.css";
import { NavLinks } from "../data/navlinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2022 Jeff Baker Home Maintenance & Repair</p>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {NavLinks.map((link, index) => {
          return (
            <>
              {" "}
              {index !== 0 && "|"}
              <a href={link.link}>{link.displayName}</a>
            </>
          );
        })}
      </div>
    </footer>
  );
}
