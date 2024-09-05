import { ProjectCard } from '@/app/projects/project-card';
import { projects } from '@/features/projects';
import { Markdown } from '@/components/markdown';
import styles from '@/app/projects/page.module.sass';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kbmackenzie\'s projects',
};

const description: string = 'A list of my favorite projects I have worked on, including: **esoteric programming languages**; little **games**; **mods** and **modding tools**; and anything else that piques my interest.';

export default function Projects() {
  return (
    <main className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <Markdown className={styles.description}>
        {description}
      </Markdown>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        {projects.map(project => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}
