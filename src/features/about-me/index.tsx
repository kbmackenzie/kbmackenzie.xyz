import ReactMarkdown from 'react-markdown';
import { RoundIcons } from '@/components/round-icons';
import { socialMedia } from '@/features/about-me/store/social-media';
import { styleClasses } from '@/utils/style-classes';
import styles from '@/features/about-me/index.module.sass';

export function AboutMe({ className }: { className?: string }) {
  return (
    <div className={styleClasses(styles.greeting, className)}>
      <h1>{`Hello, I'm Kelly!`}</h1>
      <hr />
      <ReactMarkdown>{`I'm a **full-stack web developer**, **language tinkerer** and cat enthusiast. I'm in love with **functional programming**, **compilers**, **DSLs** and **game development**.`}</ReactMarkdown>
      <hr />
      <RoundIcons icons={socialMedia} className={styles.socials} />
    </div>
  );
}
