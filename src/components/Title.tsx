import kbm from '@assets/kbm.webp';

export default function Title({...props}) {
  return (
    <img src={kbm} alt='kbm logo' {...props}/>
  );
}
