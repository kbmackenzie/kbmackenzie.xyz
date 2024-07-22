**Mewlix** is a cat-themed [esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language) that compiles to vanilla JavaScript. It's designed for making little HTML5 games!

Mewlix's compiler is written in pure Haskell, and is a self-contained binary executable. It can build projects, run them in a simple HTTP server, and package the build output neatly into a `.zip` file for upload in websites like [itch.io](https://itch.io/).

As is tradition for all languages, here's a simple `'hello world'` program in Mewlix:

```mewlix
meow "Hello world!"
```

*And* here's how to draw a sprite to the canvas in `graphic` mode:

```mewlix
from std.graphic takes load, draw, init

🐱 draw_cat()
  do draw <- "cat", 0, 0
~meow

do load <- "cat", "path/to/cat.png"
do init <- draw_cat
```

It has...
 
- Cat-themed syntax!
- A stack-like, LIFO [persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure)—affectionately nicknamed a *'shelf'*.
- String interpolation—`:3"like [this]!"`—affectionately nicknamed *'yarn strings'*.
- Lambda functions, defined like this: `🐈 (a, b) -> a + b`
- Classes, affectionately nicknamed *'clowders'*.
- A [function composition](https://github.com/kbmackenzie/mewlix/wiki/Operators#function-composition-) operator (`:>`) and a [function application](https://github.com/kbmackenzie/mewlix/wiki/Operators#function-pipes-) operator (`|>`)!
- `nand` and `nor` operators, for picky boolean expressions.
- Feline-oriented programming capabilities.

To learn more, read the documentation on the [wiki](https://github.com/kbmackenzie/mewlix/wiki)!
