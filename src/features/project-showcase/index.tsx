import Image from 'next/image';
import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { projects } from '@/features/project-showcase/store/projects';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';
import { Arrow } from '@/features/project-showcase/components/arrow';
import arrowLeft from '@/features/project-showcase/assets/arrow-left.svg';
import arrowRight from '@/features/project-showcase/assets/arrow-right.svg';

export function ProjectShowcase({ className }: { className?: string }) {
  return (
    <>
      <h2 className={styles.title}>Projects</h2>
      <ul className={styleClasses(styles.showcase, className)}>
        {projects.map(project => (
          <li key={project.name}>
            <ProjectCard className={styles.card} project={project} />
          </li>
        ))}
      </ul>
      <nav className={styles.arrows}>
        <Arrow><Image src={arrowLeft}  alt="previous" /></Arrow>
        <Arrow><Image src={arrowRight} alt="next"     /></Arrow>
      </nav>
    </>
  );
}
