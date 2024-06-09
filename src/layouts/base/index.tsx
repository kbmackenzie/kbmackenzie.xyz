import { DOMAttributes } from 'react';
import Header from '@layouts/base/components/header';
import Navigation from '@layouts/base/components/navigation';
import '@layouts/base/index.sass'

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
