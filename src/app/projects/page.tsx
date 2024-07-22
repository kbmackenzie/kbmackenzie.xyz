import { ProjectCard } from '@/app/projects/project-card';
import { projects } from '@/features/project-showcase';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/page.module.sass';

export default function Projects() {
  return (
    <main className={styleClasses('visible', styles.projects)}>
      <ul className={styles.list}>
        {projects.map(project => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}
