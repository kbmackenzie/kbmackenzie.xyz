//import Image from "next/image";
import { AboutMe } from '@/features/about-me';
import { SkillHoneycomb } from '@/features/skill-honeycomb';
import { ProjectShowcase } from '@/features/project-showcase';
import { TitledSection } from '@/components/titled-section';
import { BrowsePosts } from '@/features/browse-posts';
import { Observer } from '@/components/observer';
import { fetchPostMetadata } from '@/blog/fetch-post';
import styles from '@/app/page.module.sass';

export default async function Home() {
  const posts = await fetchPostMetadata();
  const latest = [...posts]
    .sort((a, b) => a.timestamp - b.timestamp)
    .slice(0, 6);

  return (
    <main>
      <section className={styles.focus}>
        <AboutMe className={styles.about} />
        <SkillHoneycomb className={styles.skills} />
      </section>
      <TitledSection title="Projects">
        <Observer threshold={0.2}>
          <ProjectShowcase
            className={styles.projects} />
        </Observer>
      </TitledSection>
      <TitledSection title="Latest Posts">
        <Observer threshold={0.2}>
          <BrowsePosts
            posts={latest}
            className={styles.posts} />
        </Observer>
      </TitledSection>
    </main>
  );
}
