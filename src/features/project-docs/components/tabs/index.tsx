import Image from 'next/image';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { styleClasses } from '@/utils/style-classes';
import { clamp } from '@/utils/math';
import styles from '@/features/project-docs/components/tabs/index.module.sass';

type TabsProps = {
  setCurrent(project: ProjectTab): void;
  current: ProjectTab;
  projects: ProjectTab[];
  className?: string;
};

type TabProps = {
  project: ProjectTab;
  isCurrent: boolean;
  setCurrent(project: ProjectTab): void;
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
  /* An O(n) solution, but it shouldn't matter. :)
   * I could use a linked list, but I enjoy keeping it simple. */
  function moveByOffset(offset: number): void {
    const index    = projects.indexOf(current) + offset;
    const selected = projects[clamp(index, 0, projects.length - 1)];
    setCurrent(selected);
  }

  return (
    <nav className={styleClasses(styles.container, className)}>
      <button
        onClick={() => moveByOffset(-1)}
        className={styleClasses(styles.arrow, styles.left)}>
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
      <button
        onClick={() => moveByOffset(1)}
        className={styleClasses(styles.arrow, styles.right)}>
        &gt;
      </button>
    </nav>
  );
}
