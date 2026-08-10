import { projects } from "@/data/content";
import section from "./Section.module.css";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className={section.section} id="projects" aria-labelledby="projects-heading">
      <div className={section.heading}>
        <span className={section.number}>02 / Selected work</span>
        <h2 className={section.title} id="projects-heading">
          Selected work
        </h2>
      </div>
      <p className={section.subtitle}>Products built for real-world use</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
