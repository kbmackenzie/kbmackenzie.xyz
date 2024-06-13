import classNames from 'classnames';
import '@components/decoration/honeycomb-grid.sass';

type Slot =
  | 'center'
  | 'top'
  | 'top-right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'top-left';

type Icon = {
  src: string;
  alt: string;
};

type Props = {
  icons: Map<Slot, Icon>;
  classes: string[];
};

export function HoneycombGrid({ icons, classes }: Props) {
  return (
    <section className={classNames('honeycomb', classes)}>
      {Array.from(icons.entries()).map(([key, icon]) => {
        const classes = classNames('honeycomb-slot', `honeycomb-${key}`);
        return (
          <div className={classes}>
            <img key={key} src={icon.src} alt={icon.alt} />
          </div>
        );
      })}
    </section>
  );
}
