import { HoneycombGrid } from '@/components/honeycomb-grid';
import { slots } from '@/features/skill-honeycomb/store/slots';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/skill-honeycomb/index.module.sass';

export function SkillHoneycomb({ className }: { className?: string }) {
  return (
    <aside className={styleClasses(className)}>
      <HoneycombGrid
        icons={slots}
        slotStyle={{
          normal: styles.slot,
          center: styles.center,
        }} />
    </aside>
  );
}
