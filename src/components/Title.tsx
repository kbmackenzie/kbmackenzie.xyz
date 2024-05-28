import '@components/Title.css';

export default function Title({...props}) {
  return (
    <h1 {...props}>
      <span className="text-bubblegum">echo </span>
      <span className="text-white">kbmackenzie</span>
    </h1>
    //<img src={kbm} alt='kbm logo' {...props}/>
  );
}
