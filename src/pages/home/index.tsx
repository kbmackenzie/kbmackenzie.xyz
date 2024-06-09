import { PageBase } from '@layouts/base';
import '@pages/home/index.sass';
import { Introduction } from '@pages/home/introduction';

export function Home() {
  return (
    <PageBase>
      <div className="home">
        <Introduction />
      </div>
    </PageBase>
  )
}
