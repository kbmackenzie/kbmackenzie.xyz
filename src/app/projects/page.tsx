import { ProjectShowcase } from '@/features/project-showcase';
import styles from '@/app/projects/page.module.sass';

export default function Projects() {
  return (
    <main className={styles.projects}>
      <ProjectShowcase />
    </main>
  );
}
