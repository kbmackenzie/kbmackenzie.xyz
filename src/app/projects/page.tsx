import { Markdown } from '@/components/markdown';
import { projects } from '@/features/projects';
import { ProjectDocs } from '@/features/project-docs';
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
      <h2 id="projects" className={styles.title}>
        Projects
      </h2>
      <Markdown className={styles.description}>
        {introduction}
      </Markdown>
      <hr className={styles.divider} />
      <ProjectDocs projects={projects} className={styles.documentation} />
    </main>
  );
}

