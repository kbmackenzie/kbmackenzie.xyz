'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ProjectCard } from '@/features/project-showcase/components/project-card';
import { projects } from '@/features/project-showcase/store/projects';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/index.module.sass';
import { Arrow } from '@/features/project-showcase/components/arrow';
import arrowLeft from '@/features/project-showcase/assets/arrow-left.svg';
import arrowRight from '@/features/project-showcase/assets/arrow-right.svg';

export function ProjectShowcase({ className }: { className?: string }) {
  const listRef = useRef<HTMLUListElement | null>(null);

  function scroll(amount: number): void {
    if (!listRef.current) return;
    listRef.current.scrollBy(amount, 0);
  }

  return (
    <div className={styleClasses(styles.showcase, className)}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul ref={listRef} className={styles.projects}>
          {projects.map(project => (
            <li key={project.name}>
              <ProjectCard className={styles.card} project={project} />
            </li>
          ))}
        </ul>
        <Arrow className={styles.prev} onClick={() => scroll(-20)}>
          <Image src={arrowLeft} alt="previous" />
        </Arrow>
        <Arrow className={styles.next} onClick={() => scroll(20)}>
          <Image src={arrowRight} alt="next" />
        </Arrow>
      </div>
    </div>
  );
}
