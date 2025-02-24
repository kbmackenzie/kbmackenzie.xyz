'use client';

import { useState } from 'react';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { Tabs } from '@/features/project-docs/components/tabs';
import { Documentation } from '@/features/project-docs/components/documentation';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/navigation/index.module.sass';

type NavigationProps = {
  className?: string;
  projects: ProjectTab[];
};

export function Navigation({ projects, className }: NavigationProps) {
  const [current, setCurrent] = useState<ProjectTab>(projects[0]);
  /* The plan of action is:
   * - Pass 'current' to Documentation component.
   * - Pass 'setCurrent' to Tabs component. :) */
  return (
    <div className={styleClasses(styles.navigation, className)}>
      <Tabs projects={projects} current={current} setCurrent={setCurrent} />
      <Documentation project={current} />
    </div>
  );
}
