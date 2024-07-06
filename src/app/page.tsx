//import Image from "next/image";
import { AlpacaLayout } from '@/features/alpaca-layout';
import { AboutMe } from '@/features/about-me';
import { SkillHoneycomb } from '@/features/skill-honeycomb';
import styles from '@/app/page.module.sass';

export default function Home() {
  return (
    <AlpacaLayout>
      <main>
        <div className={styles.focus}>
          <section className={styles.about}>
            <AboutMe />
          </section>
          <aside className={styles.skills}>
            <SkillHoneycomb />
          </aside>
        </div>
      </main>
    </AlpacaLayout>
  );
}
