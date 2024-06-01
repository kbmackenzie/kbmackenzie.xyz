import PageBase from "@components/PageBase";
import '@pages/Home/index.sass';
import Introduction from "@pages/Home/Introduction";

export default function Home() {
  return (
    <PageBase>
      <div className="home">
        <Introduction />
      </div>
    </PageBase>
  )
}
