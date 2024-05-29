import '@components/Title.sass'

export default function Title({...props}) {
  return (
    <h1 className="title" {...props}>
      <span className="title-echo">echo </span>
      <span className="title-name">kbmackenzie</span>
    </h1>
  );
}
