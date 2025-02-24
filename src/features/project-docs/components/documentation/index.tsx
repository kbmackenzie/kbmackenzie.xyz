import Image from 'next/image';
import { ProjectDoc } from '@/features/project-docs/types/project-doc';
import { SkillList } from '@/features/project-docs/components/skill-list';
import { MarkdownStylish } from '@/components/markdown-stylish';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/documentation/index.module.sass';

type DocumentationProps = {
  className?: string;
  project: ProjectDoc;
};

export function Documentation({ project, className }: DocumentationProps) {
  return (
    <article className={styleClasses(styles.container, className)}>
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
        <MarkdownStylish>
          {project.documentation}
        </MarkdownStylish>
      </div>
    </article>
  );
}
