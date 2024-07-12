import Image from 'next/image';
import { Skill } from '@/features/project-showcase/types/skill';
import { skillIcons } from '@/features/project-showcase/store/skill-icons';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/project-showcase/components/skill-icon/index.module.sass';

type Props = {
  className?: string;
  skill: Skill;
};

export function SkillIcon({ skill, className }: Props) {
  const icon = skillIcons.get(skill)!;
  const name = Skill[skill].toLowerCase();

  return (
    <Image
      src={icon}
      alt={name}
      width={128}
      height={128}
      className={styles.icon} />
  );
}
