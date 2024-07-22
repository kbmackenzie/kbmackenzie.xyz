import { Markdown } from '@/components/markdown';
import { RoundIcons } from '@/components/round-icons';
import { socialMedia } from '@/features/about-me/store/social-media';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/about-me/index.module.sass';

const introduction = `I'm a **full-stack developer**, **language tinkerer** and cat enthusiast. I'm in love with **functional programming**, **compilers**, **DSLs** and **game development**.`;

export function AboutMe({ className }: { className?: string }) {
  return (
    <section className={styleClasses(styles.greeting, className)}>
      <h2>{`Hello, I'm Kelly!`}</h2>
      <hr />
      <Markdown contents={introduction} />
      <hr />
      <RoundIcons icons={socialMedia} className={styles.socials} />
    </section>
  );
}
