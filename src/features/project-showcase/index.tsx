import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { projects } from '@/features/projects';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';
import { CSSProperties } from 'react';

export function ProjectShowcase({ className }: { className?: string }) {
  return (
    <ul className={styleClasses(styles.projects, className)}>
      {projects.map((project, i) => {
        const delay = 0.25 + (i * 0.15);
        const style: CSSProperties = {
          animationDelay: `${delay}s`
        };
        return (
          <li key={project.id} className={styles.container} style={style}>
            <ProjectCard className={styles.card} project={project} />
          </li>
        );
      })}
    </ul>
  );
}
