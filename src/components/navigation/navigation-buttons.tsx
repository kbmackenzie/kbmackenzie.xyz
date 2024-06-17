import classNames from 'classnames';
import { LinkData } from '@shared/link';

type ButtonProps = {
  data: LinkData;
  classes: string[];
};

function Button({ data, classes }: ButtonProps) {
  const { type, name, url } = data;
  return (
    <a className={classNames(type, classes)} href={url}>
      <span>{name}</span>
    </a>
  )
}

type NavigationButtonsProps = {
  buttons: LinkData[]
  classes: string[],
};

export function NavigationButtons({ buttons, classes }: NavigationButtonsProps) {
  return <>{buttons.map(data => (
    <Button key={data.name} data={data} classes={classes} />
  ))}</>
}
