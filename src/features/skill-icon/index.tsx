import Image from 'next/image';
import { Skill } from '@/types/skill';
import { skillIcons } from '@/features/skill-icon/store/skill-icons';
import styles from '@/features/skill-icon/index.module.sass';

export function SkillIcon({ skill }: { skill: Skill }) {
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
