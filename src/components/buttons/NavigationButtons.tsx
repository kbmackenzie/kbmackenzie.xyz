import { MouseEventHandler, DOMAttributes, JSX } from "react";

export type ButtonType = 'regular' | 'focus';

export type ButtonData = {
  type: ButtonType;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function ButtonRegular({ children, ...props }: DOMAttributes<HTMLButtonElement>) {
  return (
    <button className="min-w-24 rounded-3xl px-8 py-4 bg-indigo-500 hover:bg-indigo-400" {...props}>
      <span className="text-white font-firamono text-md">{children}</span>
    </button>
  )
}

function ButtonFocus({ children, ...props }: DOMAttributes<HTMLButtonElement>) {
  return (
    <button className="min-w-24 rounded-3xl px-8 py-4 bg-rose-500 hover:bg-rose-400" {...props}>
      <span className="text-white font-firamono text-md">{children}</span>
    </button>
  )
}

function generateButton({ type, name, onClick }: ButtonData): JSX.Element {
  switch (type) {
    case 'regular': return <ButtonRegular key={name} onClick={onClick}>{name}</ButtonRegular>;
    case 'focus'  : return <ButtonFocus   key={name} onClick={onClick}>{name}</ButtonFocus>;
  }
}

type ButtonsProps = {
  buttons: ButtonData[];
};

export default function NavigationButtons({ buttons }: ButtonsProps) {
  return <>{buttons.map(generateButton)}</>
}
