import { Project, SkillIcon } from '@/features/project-showcase';
import Image from 'next/image';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/project-card.module.sass';

export function ProjectCard({ project, className }: { project: Project, className?: string }) {
  return (
    <div className={styleClasses(styles.card, className)}>
      <div className={styles.icon}>
        <Image
          src={project.image.src} 
          alt={project.image.alt}
          width={256}
          height={256}
          className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{project.name}</h3>
        <ul className={styles.skills}>
          {project.skills.map(skill => (
            <li key={skill}>
              <SkillIcon skill={skill} />
            </li>
          ))}
        </ul>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
