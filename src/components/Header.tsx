import AlpacaAnimation from "@components/AlpacaAnimation"
import Title from "@components/Title"
import '@components/Header.sass'

export default function Header() {
  return (
    <header className="header bg-deep-space">
      <Title className="header-title" />
      <AlpacaAnimation className="header-alpaca" />
    </header>
  )
}
