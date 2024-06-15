import { RoundIcon, IconData } from '@components/links/round-icon';
import '@pages/home/components/socials.sass';

const github: IconData = {
  url: 'https://github.com/kbmackenzie',
  alt: 'Github',
  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
};

const bluesky: IconData = {
  url: 'https://bsky.app/profile/kellybetty.bsky.social',
  alt: 'Bluesky',
  src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg',
};

export function Socials() {
  return (
    <div className="fade-in socials">
      <RoundIcon icon={github}  classes={['socials-icon']} />
      <RoundIcon icon={bluesky} classes={['socials-icon']} />
    </div>
  );
}
