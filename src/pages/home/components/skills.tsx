import { HoneycombGrid, Slot, Icon } from '@components/decoration/honeycomb-grid';
import { TwoColumns } from '@components/sections/two-columns';
import { skillIcons, Skill } from '@store/skill-icons';
import '@pages/home/components/skills.sass';

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

export function Skills() {
  return (
    <TwoColumns aside={<SkillIcons />} reverse={true}>
      <p>Yay!</p>
    </TwoColumns>
  );
}
