import { SkillIcon } from '@/features/skill-icon';
import { ProjectDoc } from '@/features/project-docs/types/project-doc';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-docs/components/skill-list/index.module.sass';

type SkillListProps = {
  className?: string;
  project: ProjectDoc;
};

export function SkillList({ project, className }: SkillListProps) {
  return (
    <ul className={styleClasses(styles.skills, className)}>
      {project.skills.map(skill => (
        <li key={skill}>
          <SkillIcon skill={skill} />
        </li>
      ))}
    </ul>
  );
}
