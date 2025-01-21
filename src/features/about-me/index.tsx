import { Markdown } from '@/components/markdown';
import { RoundIcons } from '@/components/round-icons';
import { socialMedia } from '@/features/about-me/store/social-media';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/about-me/index.module.sass';

const introduction = `I'm a **software developer** and language tinkerer. I adore esoteric languages, interpreters, compilers, DSLs and game development!`;

export function AboutMe({ className }: { className?: string }) {
  return (
    <section className={styleClasses(styles.greeting, className)}>
      <h2>{`Hello, I'm Kelly!`}</h2>
      <hr />
      <Markdown>{introduction}</Markdown>
      <hr />
      <RoundIcons icons={socialMedia} className={styles.socials} />
    </section>
  );
}
