import '@layouts/base/components/title.sass'

export function Title({...props}) {
  return (
    <h1 {...props}>
      <span className="fira-mono title">
        <span className="title-type">
          <span className="title-type-echo">$ echo </span>
          <span className="title-type-name">kbmackenzie</span>
        </span>
      </span>
    </h1>
  );
}
