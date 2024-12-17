import { ReactNode } from 'react';
import { Project } from '@/types/project';
import { SkillIcon } from '@/features/skill-icon';
import { MarkdownDoc } from '@/features/markdown-doc';
import Image from 'next/image';
import Link from 'next/link';
import { styleClasses } from '@/utils/style-classes';
import { firaMono } from '@/fonts';
import styles from '@/app/projects/project-card.module.sass';

type ProjectLinkProps = {
  project: Project;
  className: string;
  children: ReactNode;
};

function ProjectLink({ project, children, className }: ProjectLinkProps) {
  if (project.link.internal) {
    return (
      <Link href={project.link.url} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={project.link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}>
      {children}
    </a>
  );
}

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export async function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div id={project.id} className={styleClasses(styles.card, className)}>
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
        <MarkdownDoc
          docPath={project.datafile}
          className="alpaca-markdown" />
        <ProjectLink
          project={project}
          className={styleClasses(styles.button, firaMono.className)}>
          <p>See More</p>
        </ProjectLink>
      </div>
    </div>
  );
}
