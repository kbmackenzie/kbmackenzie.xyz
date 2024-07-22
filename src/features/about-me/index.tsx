import { RoundIcons } from '@/components/round-icons';
import { socialMedia } from '@/features/about-me/store/social-media';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/about-me/index.module.sass';

function Introduction() {
  return (
    <p>I&lsquo;m a <strong>full-stack web developer</strong>, <strong>language tinkerer</strong> and cat enthusiast. I&lsquo;m in love with <strong>functional programming</strong>, <strong>compilers</strong>, <strong>DSLs</strong> and <strong>game development</strong>.</p>
  );
}

export function AboutMe({ className }: { className?: string }) {
  return (
    <section className={styleClasses(styles.greeting, className)}>
      <h2>{`Hello, I'm Kelly!`}</h2>
      <hr />
      <Introduction />
      <hr />
      <RoundIcons icons={socialMedia} className={styles.socials} />
    </section>
  );
}
