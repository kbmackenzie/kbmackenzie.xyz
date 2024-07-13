//import Image from "next/image";
import { AboutMe } from '@/features/about-me';
import { SkillHoneycomb } from '@/features/skill-honeycomb';
import { ProjectShowcase } from '@/features/project-showcase';
import { LatestPosts } from '@/features/latest-posts';
import styles from '@/app/page.module.sass';

export default function Home() {
  return (
    <main>
      <section className={styles.focus}>
        <AboutMe className={styles.about} />
        <SkillHoneycomb className={styles.skills} />
      </section>
      <ProjectShowcase />
      <LatestPosts />
    </main>
  );
}
