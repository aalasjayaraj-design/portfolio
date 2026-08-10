import { site } from "@/data/content";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href="#top">
          <span className={styles.mark}>{site.initials}</span>
          <span className={styles.brandFull}>{site.name}</span>
        </a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#beyond">Beyond</a>
        </div>
        <a className={styles.cta} href={`mailto:${site.email}`}>
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
