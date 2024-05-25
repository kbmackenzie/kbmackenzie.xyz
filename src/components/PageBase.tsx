import { ReactNode } from 'react';
import Header from "@components/Header";

type Props = {
  children: ReactNode;
};

export default function PageBase({ children }: Props) {
  return (
    <>
      <Header />
      <hr className="w-full h-4 bg-hotpink border-none xl:rounded-t-xl" />
      {children}
    </>
  )
}
