import { Project } from '@/types/project';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { Navigation } from '@/features/project-docs/components/navigation';
import fs from 'node:fs/promises';

type ProjectDocsProps = {
  className?: string;
  projects: Project[];
};

async function readProject(project: Project): Promise<ProjectTab> {
  const buffer = await fs.readFile(
    project.datafile,
    { encoding: 'utf8' }
  );
  return {
    ...project,
    documentation: String(buffer),
  };
}

export async function ProjectDocs({ projects, className }: ProjectDocsProps) {
  const docs = await Promise.all(
    projects.map(readProject)
  );
  return <Navigation projects={docs} className={className} />
}
