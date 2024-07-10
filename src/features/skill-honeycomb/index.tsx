import { HoneycombGrid } from '@/components/honeycomb-grid';
import { skills } from '@/features/skill-honeycomb/store/skills';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/skill-honeycomb/index.module.sass';

export function SkillHoneycomb({ className }: { className?: string }) {
  return (
    <aside className={styleClasses(className)}>
      <HoneycombGrid
        icons={skills}
        slotStyle={styles.slot} />
    </aside>
  );
}
