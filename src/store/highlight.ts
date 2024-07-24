/* highlight.js language constants. */

import hljs       from 'highlight.js/lib/core';
import haskell    from 'highlight.js/lib/languages/haskell'
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import lua        from 'highlight.js/lib/languages/lua';
import scheme     from 'highlight.js/lib/languages/scheme'
import bash       from 'highlight.js/lib/languages/bash'
import c          from 'highlight.js/lib/languages/c'
import csharp     from 'highlight.js/lib/languages/csharp'

hljs.registerLanguage('haskell'    , haskell    );
hljs.registerLanguage('javascript' , javascript );
hljs.registerLanguage('typescript' , typescript );
hljs.registerLanguage('lua'        , lua        );
hljs.registerLanguage('scheme'     , scheme     );
hljs.registerLanguage('bash'       , bash       );
hljs.registerLanguage('c'          , c          );
hljs.registerLanguage('csharp'     , csharp     );

// Note: Dynamic imports would make this easier, but they're wonky.
// I prefer staying with the repetitive approach.
export const supportedLanguages = [
  'haskell',
  'javascript',
  'typescript',
  'lua',
  'scheme',
  'bash',
  'c',
  'csharp',
];
