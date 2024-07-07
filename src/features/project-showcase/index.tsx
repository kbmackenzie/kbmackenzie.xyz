import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { projects } from '@/features/project-showcase/store/projects';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';

export function ProjectShowcase({ className }: { className?: string }) {
  return (
    <ul className={styleClasses(styles.cards, className)}>
      {projects.map(project => (
        <li key={project.name}>
          <ProjectCard className={styles.card} project={project} />
        </li>
      ))}
    </ul>
  );
}
