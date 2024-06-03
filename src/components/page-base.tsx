import { DOMAttributes } from 'react';
import Header from '@components/header';
import Navigation from '@components/navigation';
import '@components/page-base.sass'

export default function PageBase({ children }: DOMAttributes<HTMLElement>) {
  return (
    <>
      <Header />
      <hr className="bubblegum-divider" />
      <Navigation />
      {children}
    </>
  )
}
