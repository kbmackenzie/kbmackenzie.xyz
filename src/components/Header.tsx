import AlpacaAnimation from "@components/AlpacaAnimation"
import Title from "@components/Title"

export default function Header() {
  return (
    <header className="grid grid-cols-2 sm:grid-cols-3 min-h-12 items-end bg-space">
      <Title className="col-span-2 max-h-28" />
      <AlpacaAnimation className="hidden sm:block max-w-full max-h-full" />
    </header>
  )
}
