import { beyondTheCode } from "@/data/content";
import section from "./Section.module.css";
import styles from "./BeyondTheCode.module.css";

export default function BeyondTheCode() {
  return (
    <section className={section.section} id="beyond" aria-labelledby="beyond-heading">
      <div className={section.heading}>
        <span className={section.number}>03 / Beyond the code</span>
        <h2 className={section.title} id="beyond-heading">
          Beyond the code
        </h2>
      </div>
      <ul className={styles.list}>
        {beyondTheCode.map((entry) => (
          <li key={entry.title} className={styles.item}>
            <h3 className={styles.itemTitle}>{entry.title}</h3>
            <p className={styles.itemDescription}>{entry.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
