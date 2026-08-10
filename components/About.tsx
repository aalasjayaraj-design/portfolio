import { about } from "@/data/content";
import section from "./Section.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={section.section} id="about" aria-labelledby="about-heading">
      <div className={section.heading}>
        <span className={section.number}>01 / About</span>
        <h2 className={section.title} id="about-heading">
          {about.heading}
        </h2>
      </div>
      <div className={styles.body}>
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
