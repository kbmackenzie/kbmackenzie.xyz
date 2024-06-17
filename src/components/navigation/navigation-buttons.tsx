import classNames from 'classnames';
import { LinkData } from '@shared/link';

type ButtonProps = {
  data: LinkData;
};

function Button({ data }: ButtonProps) {
  const { type, name, url } = data;
  return (
    <a className={classNames('navigation-button', type)} href={url}>
      {name}
    </a>
  )
}

type NavigationButtonsProps = {
  buttons: LinkData[]
  classes: string[],
};

export function NavigationButtons({ buttons, classes }: NavigationButtonsProps) {
  return (
    <nav className={classNames(classes)}>
      {buttons.map(data => (
        <Button key={data.name} data={data} />
      ))}
    </nav>
  );
}
