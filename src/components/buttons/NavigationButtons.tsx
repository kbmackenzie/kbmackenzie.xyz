import { MouseEventHandler, DOMAttributes, JSX } from "react";
import '@components/buttons/NavigationButtons.sass'

export type ButtonType = 'regular' | 'focus';

export type ButtonData = {
  type: ButtonType;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = DOMAttributes<HTMLButtonElement> & { type: string };

function Button({ children, type, ...props }: ButtonProps) {
  return (
    <button className={`nav-button ${type}`} {...props}>
      {children}
    </button>
  )
}

function generateButton({ type, name, onClick }: ButtonData): JSX.Element {
  return <Button key={name} type={type} onClick={onClick}>{name}</Button>;
}

type NavigationButtonsProps = { buttons: ButtonData[] };

export default function NavigationButtons({ buttons }: NavigationButtonsProps) {
  return <>{buttons.map(generateButton)}</>
}
