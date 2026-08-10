import { site } from "@/data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <h1 className={styles.tagline}>{site.tagline}</h1>
    </section>
  );
}
