import { useRef, ReactNode } from 'react';
import classNames from 'classnames';
import '@components/navigation/horizontal-cards.sass';

export interface Card {
  name: string;
}

type HorizontalCardsProps = {
  cards: Card[];
  arrows: {
    left:  ReactNode;
    right: ReactNode;
  }
  createCard: (card: Card) => ReactNode;
  classes?: string[];
}

export function HorizontalCards({ cards, arrows, createCard, classes }: HorizontalCardsProps) {
  const ref = useRef<HTMLUListElement | null>(null);

  function handleScroll(amount: number): void {
    ref?.current?.scrollBy(amount, 0);
  }

  return (
    <section className={classNames('horizontal-cards', classes)}>
      <ul className="horizontal-cards-list" ref={ref}>
        {cards.map(card => (
          <li key={card.name}>{createCard(card)}</li>
        ))}
      </ul>
      <nav className="horizontal-cards-arrows">
        <button onClick={() => handleScroll(-100)}>{arrows.left}</button>
        <button onClick={() => handleScroll(100)}>{arrows.right}</button>
      </nav>
    </section>
  );
}
