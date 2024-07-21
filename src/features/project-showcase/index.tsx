import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { projects } from '@/features/project-showcase/store/projects';
import { Project } from '@/features/project-showcase/types/project';
import { Skill } from '@/features/project-showcase/types/skill';
import { SkillIcon } from '@/features/project-showcase/components/skill-icon';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';
import { CSSProperties } from 'react';

export type {
  Project,
};

export {
  projects,
  Skill,
  SkillIcon,
};

export function ProjectShowcase({ className }: { className?: string }) {
  return (
    <ul className={styleClasses(styles.projects, className)}>
      {projects.map((project, i) => {
        const delay = 0.25 + (i * 0.15);
        const style: CSSProperties = {
          animationDelay: `${delay}s`
        };
        return (
          <li key={project.name} className={styles.container} style={style}>
            <ProjectCard className={styles.card} project={project} />
          </li>
        );
      })}
    </ul>
  );
}
