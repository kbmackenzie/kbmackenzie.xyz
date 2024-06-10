import { TwoThirds } from '@components/sections/two-thirds';
import '@pages/home/components/introduction.sass';

function AlpacaIcon() {
  return (
    <div className="introduction-alpaca">
    </div>
  );
}

export function Introduction() {
  return (
    <TwoThirds classes={['introduction', 'open-sans']} aside={<AlpacaIcon />}>
      <section className="introduction-description">
        <h1>Hi, I'm Kelly!</h1>
        <p>Hi, I’m Kelly! I’m a full-stack web developer, language tinkerer and hobbyist game developer. I’m fascinated by compilers, interpreters and text parsing.</p>
      </section>
    </TwoThirds>
  );
}
