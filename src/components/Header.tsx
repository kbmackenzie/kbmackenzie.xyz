import AlpacaAnimation from "@components/AlpacaAnimation"

export default function Header() {
  return (
    <header className="grid grid-cols-2 sm:grid-cols-3 items-end min-h-32 bg-space">
      <h1 className="col-span-2 text-bubblegum font-firamono text-6xl">
        kbmackenzie
      </h1>
      <AlpacaAnimation className="hidden sm:block max-w-full max-h-full" />
    </header>
  )
}
