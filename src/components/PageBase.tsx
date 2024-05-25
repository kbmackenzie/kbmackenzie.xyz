import { DOMAttributes } from 'react';
import Header from "@components/Header";

export default function PageBase({ children }: DOMAttributes<HTMLElement>) {
  return (
    <>
      <Header />
      <hr className="w-full h-4 bg-hotpink border-none xl:rounded-t-xl" />
      {children}
    </>
  )
}
