import { ReactNode } from 'react';
import Link from 'next/link';
import { ProjectTab } from '@/features/project-docs/types/project-doc';

type ProjectLinkProps = {
  project: ProjectTab;
  className?: string;
  children: ReactNode;
};

export function ProjectLink({ project, className, children }: ProjectLinkProps) {
  if (project.link.internal) {
    return (
      <Link href={project.link.url} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={project.link.url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
