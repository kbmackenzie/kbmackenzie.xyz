import { Project } from '@/types/project';
import { SkillIcon } from '@/features/skill-icon';
import { MarkdownHighlight } from '@/components/markdown-highlight';
import { readFile } from 'fs/promises';
import Image from 'next/image';
import { styleClasses } from '@/utils/style-classes';
import { firaMono } from '@/fonts';
import styles from '@/app/projects/project-card.module.sass';

async function readDataFile(project: Project): Promise<string> {
  const buffer = await readFile(project.datafile)
  return buffer.toString();
}

export async function ProjectCard({ project, className }: { project: Project, className?: string }) {
  const body = await readDataFile(project);
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
        <MarkdownHighlight className={styles.body}>
          {body}
        </MarkdownHighlight>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styleClasses(styles.button, firaMono.className)}>
          <p>See More</p>
        </a>
      </div>
    </div>
  );
}
