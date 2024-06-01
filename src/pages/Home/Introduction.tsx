import '@pages/Home/Introduction.sass';

function Description({...props}) {
  return (
    <section {...props}>
      <h1 className="fira-mono greeting">
        <span className="greeting-type">Hi, I'm Kelly!</span>
      </h1>
      <p>Hi, I’m Kelly! I’m a full-stack web developer, language tinkerer and hobbyist game developer. I’m fascinated by compilers, interpreters and text parsing.</p>
    </section>
  );
}

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction-image"></div>
      <Description className="introduction-desc"/>
    </section>
  );
}
