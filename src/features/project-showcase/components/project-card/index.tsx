import { Project } from '@/features/project-showcase/types/project';
import Image from 'next/image';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/components/project-card/index.module.sass';

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: Props) {
  return (
    <a className={styleClasses(styles.card, className)}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width ?? 128}
        height={project.image.height ?? 128}
        className={styles.image} />
      <div className={styles.info}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </a>
  );
}
