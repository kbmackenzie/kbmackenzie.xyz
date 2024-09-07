import { Project } from '@/types/project';
import { SkillIcon } from '@/features/skill-icon';
import Image from 'next/image';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/components/project-card/index.module.sass';

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: Props) {
  const projectUrl = `/projects#${project.id}`;
  return (
    <Link className={styleClasses(styles.card, className)} href={projectUrl}>
      <div className={styles.image}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width ?? 256}
          height={project.image.height ?? 256} />
      </div>
      <div className={styles.info}>
        <h3>{project.name}</h3>
        <hr />
        <p>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map(skill => (
            <li key={skill}>
              <SkillIcon skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
