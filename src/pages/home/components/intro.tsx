import { HoneycombGrid, Slot, Icon } from '@components/decoration/honeycomb-grid';
import { TwoColumns } from '@components/sections/two-columns';
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
  return <HoneycombGrid classes={['skill-icons']} icons={icons} />;
}

function AboutMe() {
  return (
    <section className="about-me open-sans">
      <h1>Hi, I'm Kelly!</h1>
      <hr />
      <p>I’m a <strong>full-stack web developer</strong>, <strong>language tinkerer</strong> and cat enthusiast. I’m fascinated by <strong>compilers</strong>, <strong>interpreters</strong> and <strong>text parsing</strong>.</p>
      <p>I adore functional programming, and <strong>Haskell</strong> is my favorite programming language! I also enjoy <strong>TypeScript</strong>, <strong>Scheme</strong>, <strong>Lua</strong> and <strong>C#</strong>.</p>
    </section>
  );
}

export function Intro() {
  return (
    <TwoColumns aside={<SkillIcons />} reverse={true} classes={['intro']}>
      <AboutMe />
    </TwoColumns>
  );
}
