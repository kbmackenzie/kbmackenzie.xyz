import { ProjectShowcase } from '@/features/project-showcase';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/app/projects/page.module.sass';

export default function Projects() {
  return (
    <main className={styleClasses('visible', styles.projects)}>
      <ProjectShowcase />
    </main>
  );
}
