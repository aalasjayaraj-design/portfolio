import type { Project } from "@/data/content";
import styles from "./Projects.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.tech.length > 0 && (
        <ul className={styles.tech}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      {project.link ? (
        <a className={styles.link} href={project.link}>
          View project →
        </a>
      ) : (
        <span className={styles.link} aria-disabled="true">
          Details coming soon
        </span>
      )}
    </article>
  );
}
