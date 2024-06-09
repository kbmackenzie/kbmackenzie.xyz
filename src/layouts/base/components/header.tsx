import { AlpacaAnimation } from '@layouts/base/components/alpaca-animation'
import { Title } from '@layouts/base/components/title'
import '@layouts/base/components/header.sass'

export function Header() {
  return (
    <header className="header bg-deep-space">
      <Title className="header-title" />
      <AlpacaAnimation className="header-alpaca" />
    </header>
  )
}
