import { DOMAttributes } from 'react';
import Header from "@components/Header";
import Navigation from '@components/Navigation';
import '@components/PageBase.sass'

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
