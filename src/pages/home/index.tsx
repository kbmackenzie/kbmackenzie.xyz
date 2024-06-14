import { PageBase } from '@layouts/base';
import '@pages/home/index.sass';
import { Intro } from '@pages/home/components/intro';

export function Home() {
  return (
    <PageBase>
      <div className="home">
        <Intro />
      </div>
    </PageBase>
  )
}
