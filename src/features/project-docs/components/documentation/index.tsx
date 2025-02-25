import Image from 'next/image';
import { ProjectTab } from '@/features/project-docs/types/project-doc';
import { SkillList } from '@/features/project-docs/components/skill-list';
import { ProjectLink } from '@/features/project-docs/components/project-link';
import { MarkdownStylish } from '@/components/markdown-stylish';
import { firaMono } from '@/fonts';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/documentation/index.module.sass';

type DocumentationProps = {
  className?: string;
  project: ProjectTab;
};

export function Documentation({ project, className }: DocumentationProps) {
  return (
    <article key={project.id} className={styleClasses(styles.container, className)}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={128}
        height={128}
        className={styles.icon} />
      <div className={styles.documentation}>
        <h3 className={styles.title}>
          {project.name}
        </h3>
        <SkillList className={styles.skills} project={project} />
        <MarkdownStylish className={styles.body}>
          {project.documentation}
        </MarkdownStylish>
        <ProjectLink project={project} className={styleClasses(styles.link, firaMono.className)}>
          <p>See Project</p>
        </ProjectLink>
      </div>
    </article>
  );
}
