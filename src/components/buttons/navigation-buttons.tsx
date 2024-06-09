import { MouseEventHandler, JSX } from 'react';
import classNames from 'classnames';

export type ButtonType = 'regular' | 'focus';

export type ButtonData = {
  type: ButtonType;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = {
  data: ButtonData;
  classes: string[];
};

function Button({ data, classes }: ButtonProps) {
  const { type, name, onClick } = data;
  return (
    <button className={classNames(type, classes)} onClick={onClick}>
      <span>{name}</span>
    </button>
  )
}

function generateButton(data: ButtonData, classes: string[]): JSX.Element {
  return <Button key={data.name} data={data} classes={classes} />;
}

type NavigationButtonsProps = {
  buttons: ButtonData[]
  classes: string[],
};

export function NavigationButtons({ buttons, classes }: NavigationButtonsProps) {
  return <>{buttons.map(button => generateButton(button, classes))}</>
}
