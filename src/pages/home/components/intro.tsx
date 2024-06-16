import { HoneycombGrid, Slot, Icon } from '@components/decoration/honeycomb-grid';
import { Socials } from '@pages/home/components/socials';
import { skillIcons, Skill } from '@store/skill-icons';
import '@pages/home/components/intro.sass';

const skills: [Slot, Skill][] = [
  ['top'          , 'haskell'     ],
  ['top-right'    , 'linux'       ],
  ['bottom-right' , 'neovim'      ],
  ['bottom'       , 'csharp'      ],
  ['bottom-left'  , 'react'       ],
  ['top-left'     , 'typescript'  ],
];

function SkillIcons() {
  const icons = new Map<Slot, Icon>(
    skills.map(([slot, skill]) => [slot, {
      src: skillIcons[skill],
      alt: skill,
    }])
  );
  return (
    <aside className="skill-icons">
      <HoneycombGrid classes={['fade-in', 'skill-icons-grid']} icons={icons} />;
    </aside>
  );
}

function AboutMe() {
  return (
    <section className="open-sans about-me">
      <h1>Hi, I'm Kelly!</h1>
      <hr />
      <p>I’m a <strong>full-stack web developer</strong>, <strong>language tinkerer</strong> and cat enthusiast. I’m fascinated by <strong>compilers</strong>, <strong>interpreters</strong> and <strong>text parsing</strong>.</p>
      <p>I adore functional programming, and <strong>Haskell</strong> is my favorite programming language! I also enjoy <strong>TypeScript</strong>, <strong>Scheme</strong>, <strong>Lua</strong> and <strong>C#</strong>.</p>
      <hr />
      <Socials />
    </section>
  );
}

export function Intro() {
  return (
    <section className="intro">
      <AboutMe />
      <SkillIcons />
    </section>
  );
}
