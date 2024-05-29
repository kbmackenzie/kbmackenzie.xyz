import '@components/Title.sass'

export default function Title({...props}) {
  return (
    <h1 {...props}>
      <span className="fira-mono title">
        <span className="title-echo">echo </span>
        <span className="title-name">kbmackenzie</span>
      </span>
    </h1>
  );
}
