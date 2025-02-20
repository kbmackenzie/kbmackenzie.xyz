import { CSSProperties } from 'react';
import { Project } from '@/types/project';
import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';

export type ProjectShowcaseProps = {
  className?: string;
  projects: Project[];
};

/* Showcase top projects. */
export function ProjectShowcase({ className, projects }: ProjectShowcaseProps) {
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
