import { Introduction } from '@/features/about-me/components/introduction';
import { RoundIcons } from '@/components/round-icons';
import { socialMedia } from '@/features/about-me/store/social-media';
import styles from '@/features/about-me/index.module.sass';

export function AboutMe() {
  return (
    <>
      <Introduction className={styles.greeting} />
      <RoundIcons icons={socialMedia} className={styles.socials} />
    </>
  );
}
