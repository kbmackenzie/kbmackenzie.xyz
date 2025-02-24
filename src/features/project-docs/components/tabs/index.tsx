import Image from 'next/image';
import { ProjectDoc } from '@/features/project-docs/types/project-doc';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/tabs/index.module.sass';

type TabsProps = {
  className?: string;
  projects: ProjectDoc[];
  setProject(project: ProjectDoc): void;
};

type TabProps = {
  project: ProjectDoc;
  setProject(project: ProjectDoc): void;
};

function Tab({ project, setProject }: TabProps) {
  return (
    <button className={styles.project} onClick={() => setProject(project)}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={256}
        height={256}
        className={styles.icon} />
    </button>
  );
}

export function Tabs({ projects, setProject, className }: TabsProps) {
  return (
    <nav className={styleClasses(styles.container, className)}>
      <button className={styleClasses(styles.arrow, styles.left)}>
        &lt;
      </button>
      <ul className={styles.tabs}>
        {projects.map(project => (
          <li className={styles.tab} key={project.id}>
            <Tab project={project} setProject={setProject} />
          </li>
        ))}
      </ul>
      <button className={styleClasses(styles.arrow, styles.right)}>
        &gt;
      </button>
    </nav>
  );
}
