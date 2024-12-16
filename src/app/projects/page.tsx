import { ProjectCard } from '@/app/projects/project-card';
import { projects } from '@/features/projects';
import { Markdown } from '@/components/markdown';
import styles from '@/app/projects/page.module.sass';
import { Metadata } from 'next';
import { makeMetadata, makePageTitle } from '@/app/metadata';

export const metadata: Metadata = makeMetadata({
  title: makePageTitle('projects'),
  description: 'An internet alpaca\'s projects.',
});

const introduction: string = 'A list of my favorite projects I have worked on, including: **esoteric programming languages**, miscellaneous **tools**, little **games**, game mods, and anything else that piques my interest.';

export default function Projects() {
  return (
    <main className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <Markdown className={styles.description}>
        {introduction}
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
