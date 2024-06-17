import classNames from 'classnames';
import { LinkData } from '@shared/link';

type AnchorProps = {
  data: LinkData;
  classes: string[];
};

function Anchor({ data, classes }: AnchorProps) {
  const { type, name, url } = data;
  return (
    <a className={classNames(type, classes)} href={url}>
      <span>{name}</span>
    </a>
  )
}

function generateButton(data: LinkData, classes: string[]) {
  return <Anchor key={data.name} data={data} classes={classes} />;
}

type NavigationButtonsProps = {
  buttons: LinkData[]
  classes: string[],
};

export function NavigationButtons({ buttons, classes }: NavigationButtonsProps) {
  return <>{buttons.map(button => generateButton(button, classes))}</>
}
