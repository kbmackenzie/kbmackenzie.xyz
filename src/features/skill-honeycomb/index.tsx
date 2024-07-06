import { HoneycombGrid } from '@/components/honeycomb-grid';
import { skills } from '@/features/skill-honeycomb/store/skills';
import styles from '@/features/skill-honeycomb/index.module.sass';

export function SkillHoneycomb() {
  return (
    <HoneycombGrid
      icons={skills}
      slotStyle={styles.slot} />
  );
}
