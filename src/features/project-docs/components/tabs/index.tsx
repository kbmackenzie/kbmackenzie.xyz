'use client';

import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { styleClasses } from '@/utils/style-classes';
import { wrapAround } from '@/utils/math';
import styles from '@/features/project-docs/components/tabs/index.module.sass';
import arrowLeft from '@/features/project-docs/assets/arrow-left.svg';
import arrowRight from '@/features/project-docs/assets/arrow-right.svg';

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
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isCurrent || !ref.current) return;
    ref.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
    });
  }, [isCurrent]);

  const classes = styleClasses(styles.project, isCurrent && styles.selected);
  const onClick = () => isCurrent || setCurrent(project);
  return (
    <button ref={ref} title={project.name} className={classes} onClick={onClick}>
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
  const moveByOffset = useCallback((offset: number): void => {
    const index    = projects.indexOf(current) + offset;
    const selected = projects[wrapAround(index, 0, projects.length - 1)];
    setCurrent(selected);
  }, [projects, current, setCurrent]);

  /* Keyboard shortcuts. c: */
  useEffect(() => {
    function tabShortcut(event: KeyboardEvent): void {
      if (event.repeat) return;

      if (event.key === 'ArrowLeft')  { moveByOffset(-1); }
      if (event.key === 'ArrowRight') { moveByOffset(1);  }
    }
    document.addEventListener('keydown', tabShortcut);
    return () => document.removeEventListener('keydown', tabShortcut);
  }, [moveByOffset]);

  return (
    <nav className={styleClasses(styles.container, className)}>
      <button
        title="Previous project"
        onClick={() => moveByOffset(-1)}
        className={styleClasses(styles.arrow, styles.left)}>
        <Image
          src={arrowLeft}
          alt="Previous project"
          className={styles['arrow-icon']} />
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
        title="Next project"
        onClick={() => moveByOffset(1)}
        className={styleClasses(styles.arrow, styles.right)}>
        <Image
          src={arrowRight}
          alt="Next project"
          className={styles['arrow-icon']} />
      </button>
    </nav>
  );
}
