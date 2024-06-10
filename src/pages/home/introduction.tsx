import '@pages/home/introduction.sass';

function AlpacaIcon() {
  return (
    <div className="alpaca-icon"></div>
  );
}

function Description() {
  return (
    <section className="description open-sans">
      <h1>Hi, I'm Kelly!</h1>
      <p>Hi, I’m Kelly! I’m a full-stack web developer, language tinkerer and hobbyist game developer. I’m fascinated by compilers, interpreters and text parsing.</p>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="introduction">
      <AlpacaIcon />
      <Description />
    </section>
  );
}
