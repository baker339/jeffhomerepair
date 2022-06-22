import { NavLinks } from "../data/navlinks";
import styles from "../styles/Home.module.css";

export function NavBar(props: { currentTab: string }) {
  return (
    <div className={styles.topnav}>
      <img
        className={styles.logo}
        src="/JBHMRLogo.png"
        alt="Jeff Baker Maintenance and Repair Logo"
      />
      <div className={styles.navlinkcontainer}>
        {NavLinks.map((link) => {
          if (
            props.currentTab &&
            props.currentTab.toLowerCase() === link.displayName.toLowerCase()
          ) {
            return (
              <a className={styles.active} href={link.link}>
                {link.displayName}
              </a>
            );
          } else {
            return <a href={link.link}>{link.displayName}</a>;
          }
        })}
      </div>
    </div>
  );
}
