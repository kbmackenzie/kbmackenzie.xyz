import Image from 'next/image';
import { ProjectDoc } from '@/features/project-docs/types/project-doc';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/tabs/index.module.sass';

type TabsProps = {
  setCurrent(project: ProjectDoc): void;
  current: ProjectDoc;
  projects: ProjectDoc[];
  className?: string;
};

type TabProps = {
  project: ProjectDoc;
  isCurrent: boolean;
  setCurrent(project: ProjectDoc): void;
};

function Tab({ project, setCurrent, isCurrent }: TabProps) {
  const classes = styleClasses(styles.project, isCurrent && styles.selected);
  const onClick = () => isCurrent || setCurrent(project);
  return (
    <button className={classes} onClick={onClick}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={256}
        height={256}
        className={styles.icon} />
    </button>
  );
}

export function Tabs({ projects, setCurrent, current, className }: TabsProps) {
  return (
    <nav className={styleClasses(styles.container, className)}>
      <button className={styleClasses(styles.arrow, styles.left)}>
        &lt;
      </button>
      <ul className={styles.tabs}>
        {projects.map(project => (
          <li className={styles.tab} key={project.id}>
            <Tab
              project={project}
              isCurrent={project.id === current.id}
              setCurrent={setCurrent} />
          </li>
        ))}
      </ul>
      <button className={styleClasses(styles.arrow, styles.right)}>
        &gt;
      </button>
    </nav>
  );
}
