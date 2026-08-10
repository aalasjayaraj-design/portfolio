import { site, socials } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <nav className={styles.links}>
        <a href={socials.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${socials.email}`}>Email</a>
        <a href="#top">Back to top ↑</a>
      </nav>
    </footer>
  );
}
