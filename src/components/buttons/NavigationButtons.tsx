import { MouseEventHandler, DOMAttributes, JSX } from "react";

export type ButtonType = 'regular' | 'focus';

export type ButtonData = {
  type: ButtonType;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function ButtonRegular({ children, ...props }: DOMAttributes<HTMLButtonElement>) {
  return (
    <button className="min-w-32 rounded-3xl p-4 bg-space-button hover:bg-space-button-hover" {...props}>
      <span className="text-white font-firamono text-md">{children}</span>
    </button>
  )
}

function ButtonFocus({ children, ...props }: DOMAttributes<HTMLButtonElement>) {
  return (
    <button className="min-w-32 rounded-3xl p-4 bg-bubblegum hover:bg-bubblegum-button-hover" {...props}>
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
