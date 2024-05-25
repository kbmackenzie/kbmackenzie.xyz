import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <hr className="w-full h-4 bg-hotpink border-none xl:rounded-t-xl" />
      <div className="h-full bg-night"></div>
    </>
  )
}
