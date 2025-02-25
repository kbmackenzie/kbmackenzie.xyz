'use client';

import { useState } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { Tabs } from '@/features/project-docs/components/tabs';
import { Documentation } from '@/features/project-docs/components/documentation';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/navigation/index.module.sass';

type NavigationProps = {
  className?: string;
  projects: ProjectTab[];
};

function queryProject(params: ReadonlyURLSearchParams, projects: ProjectTab[]): ProjectTab {
  const id = params.get('project');
  const selected = id && projects.find(project => project.id === id);
  return selected || projects[0];
}

export function Navigation({ projects, className }: NavigationProps) {
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState<ProjectTab>(
    queryProject(searchParams, projects)
  );
  /* The plan of action is:
   * - Pass 'current' to Documentation component.
   * - Pass 'current' and 'setCurrent' to Tabs component. :) */
  return (
    <div className={styleClasses(styles.navigation, className)}>
      <Tabs projects={projects} current={current} setCurrent={setCurrent} />
      <Documentation project={current} />
    </div>
  );
}
