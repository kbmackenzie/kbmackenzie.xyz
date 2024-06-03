import AlpacaAnimation from '@components/alpaca-animation'
import Title from '@components/title'
import '@components/header.sass'

export default function Header() {
  return (
    <header className="header bg-deep-space">
      <Title className="header-title" />
      <AlpacaAnimation className="header-alpaca" />
    </header>
  )
}
