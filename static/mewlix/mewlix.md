![Looping animation of a cartoon cat playing with a ball of yarn.](/mewlix/images/cat-yarnball.webp)

Mewlix is a cat-themed esoteric programming language designed for creating small pixel games! It compiles to vanilla JavaScript and runs natively on a browser.

The compiler is written in pure Haskell, and is a self-contained binary executable. The source code is [fully available on Github][1].

A fun, brief guide to Mewlix can be found [in this section](#learn-mewlix-in-y-minutes)! 🐱💖

### Table of Contents

1. [Documentation](#documentation)
2. [Install Guide](#installation)
3. [Related Links](#related-links)
4. [Tools](#tools)

### Documentation

A Mewlix source file should have the `.mews` extension, and should be an UTF8-encoded text file.

A list of example projects with fully available source code can be found [here][3]! 🌈

1. [Language and Syntax](@mewlix/language)
2. [Compiler and Project Management](@mewlix/compiler)
3. [Standard Library](@mewlix/std)
4. [Graphic Template](@mewlix/graphic)
5. [Console Template](@mewlix/console)
6. [Functional Patterns](@mewlix/functional-patterns)
7. [FAQ](@mewlix/faq)

#### Learn Mewlix in Y Minutes

A brief tutorial in the style of [Learn X in Y Minutes][5] can be found below:

```mewlix
~( ^.x.^)>
Mewlix is whitespace-sensitive, but not indentation-sensitive. Linebreaks matter; indentation does not.
Additionally, wherever a linebreak is expected, a semicolon can be used instead.
<(^.x.^ )~

-- To declare a variable, use the 'mew' statement:
mew cat = '🐱'

-- Variables are block-scoped.

-- You can declare a runtime constant by yelling! With '!'s.
-- Any number of exclamation marks will do.
mew cat!!!!!!!!! = '🐱'

-- To write a message to the screen (or to standard output), use the 'meow' expression:
meow 'hello world :3'

-- A simple function in Mewlix looks like this:
🐱 greet(name)
  bring 'hello ' .. name .. '!'
~meow

-- If you prefer using only ASCII characters, it can be rewritten as such:
=^.x.^= greet(name)
  bring 'hello ' .. name .. '!'
~meow

-- Let's cover primitive types. Numbers and booleans work very similarly to Lua:
2 + 2
3 * 4
3.14
0.2e15

true
not false
true or false
true and not false

-- Additional boolean operators also exist. _(;3」∠)_
true nand false
true nor false

-- Strings can use single (') or double (") quotes:
'hello world! :3'
"find my voice..."

-- The "nothing" primitive represents the absence of value. It's similar to "nil" in Lua.
nothing
nothing == nothing

-- A key-value map can be declared with the 📦 expression. In Mewlix, these are called "boxes". _(:3」∠)_
mew cats = 📦 [
  jake: 'orange tabby',
  princess: 'brown tabby'
]

-- If you prefer to use ASCII symbols only, you can use "=^-x-^=" instead.
mew cats = =^-x-^= [
  jake: 'orange tabby',
  princess: 'brown tabby'
]

-- You can access properties of a box with the '.' operator:
meow cats.jake

-- ... or with the '[]' operator:
meow cats['jake']

~( ^.x.^)>
Q: "What about arrays?"
A: Mewlix does not have arrays.

Instead, Mewlix has a stack-like, persistent data structure affectionately nicknamed a 'shelf'.
- A shelf works like a stack: last in, first out (LIFO).
- All operations on shelves create new shelves.

Additionally...
- Pushing values onto the top a shelf is an O(1) operation.
- Pawing at values at the top of a shelf is an O(1) operation.
- Knocking a value off the top of a shelf is an O(1) operation.
<(^.x.^ )~

-- You can create a shelf with array-like syntax:
mew shelf = ['flowers']

-- You can push values to the top of a shelf:
shelf = 'red book' push shelf
shelf = 'ball of yarn' push shelf

meow shelf -- prints: ['flowers', 'red book', 'ball of yarn']

-- You can paw at a shelf to see the value at the top:
mew head = paw at shelf
meow head  -- prints: 'ball of yarn'

-- And you can knock over a shelf to pop the value at the top, receiving a new shelf:
mew tail = knock over shelf
meow tail  -- prints: ['flowers', 'red book']

~( ^.x.^)>
Those operations are O(1) thanks to immutability—shelves share nodes behind the scenes.

Note, however, that only the top of a shelf is easily accessible.
To look at other 'indexes', you must traverse the shelf until that index.
<(^.x.^ )~

-- The standard library function 'std.index' traverses a shelf for you:
meow std.index([1, 2, 3],  0) -- prints: 3
meow std.index([1, 2, 3], -1) -- prints: 1
-- It's O(n), however, so use it wisely! 

-- To ask the length of a shelf or string, use the '...?' operator.
meow [1, 2, 3]...?     -- prints: 3
meow 'hello world'...? -- prints: 11

-- To concatenate a shelf or string, use the '..' operator.
meow [1, 2, 3] .. [4, 5, 6]     -- prints: [1, 2, 3, 4, 5, 6]
meow 'hello' .. ' ' .. 'world'  -- prints: 'hello world'

-- To compare two shelves, you can use the normal comparison operators!
-- Shelves are *always* compared by value. _(:3」∠)_
-- Note: Shelf values are compared in LIFO order. Values at the top of the shelf are compared first.
meow [1, 2, 3] == [1, 2, 3] -- prints: true
meow [1, 2, 3] == [1, 2]    -- prints: false
meow [1, 2, 3] != [4, 5, 6] -- prints: true
meow [1, 2, 3] > [1, 2]     -- prints: true
meow [1, 2] < [1, 3]        -- prints: true
meow [4, 6] > [6, 4]        -- prints: true ... remember: LIFO!

~( ^.x.^)>
Mewlix supports higher-order functions. Functions are first-class citizens in Mewlix.

Anonymous functions can be created with the '🐈' expression:
<(^.x.^ )~
mew sum! = 🐈 (a, b) -> a + b

-- ... Or, alternatively, if you prefer using ASCII characters:
mew sum! = =^oxo^= (a, b) -> a + b

-- When calling a function, you can use either the '()' operator:
meow sum(1, 2) -- prints: 3
meow sum(6, 6) -- prints: 12

-- ... or the 'do' expression:
meow do sum <- 1, 2 -- prints: 3
meow do sum <- 6, 6 -- prints: 12

-- The standard library defines a few useful higher order functions:
meow do std.map    <- 🐈 (x) -> x ^ 2, [1, 2, 3]            -- prints: [1, 4, 9]
meow do std.filter <- 🐈 (x) -> x % 2 == 0, [1, 2, 3, 4]    -- prints: [2, 4]
meow do std.fold   <- 🐈 (acc, x) -> acc + x, 0, [1, 2, 3]  -- prints: 6

-- Additionally, you can...
-- ... compose functions with the ':>' operator:
mew h = f :> g    -- ...same as: 🐈 (x) -> g(f(x))

-- ... and do function application cleanly with '|>':
meow x |> f |> g  -- ...same as: g(f(x))


~( ^.x.^)>
Mewlix supports all the usual operations you would expect, and a few more:

And yes, the boolean operators 'and' and 'or' are short-circuiting. _(:3」∠)_
<(^.x.^ )~

a + b   -- addition
a - b   -- subtraction
a * b   -- multiplication
a / b   -- division
a ^ b   -- exponentiation
a % b   -- modulo (euclidean remainder! *not* like C's "%"!)
a // b  -- "floor division"
-a      -- negation

not a   -- boolean negation (boolean 'not')
a or b  -- boolean 'or'
a and b -- boolean 'and'

-- ternary operator:
a if x else b

a == b  -- equality
a != b  -- inequality
a > b   -- greater than
a < b   -- lesser than
a >= b  -- greater or equal to
a <= b  -- lesser or equal to

a .. b  -- string concatenation
a in b  -- asks if 'a' is contained in 'b'

type of a -- asks the type of a value (see documentation for type names)
a is b    -- asks if 'a' is an instance of a clowder 'b' (see documentation for clowders!)

~( ^.x.^)>
You can use yarn strings to interpolate expressions into strings.
Yarn strings, like normal strings, can use single quotes (') or double quotes (").

To interpolate expressions into a yarn string, put them between square brackets ([]).
<(^.x.^ )~

mew name = 'princess'
meow :3"hi, i'm [name]!" -- prints: 'hi, i'm princess!'

~( ^.x.^)>
Multiline strings are supported, too!
They can also use either single quotes (') or double quotes (").
<(^.x.^ )~

'''
This is a multiline string. _(:3」∠)_
It can span multiple lines.
'''

~( ^.x.^)>
And now, we can finally get to... ~statements~!

To declare a function, we can use the '🐱' statement.
<(^.x.^ )~

🐱 sum(a, b)
  bring a + b
~meow

-- Or, if you prefer using only ASCII characters:
=^.x.^= sum(a, b)
  bring a + b
~meow

~( ^.x.^)>
The 'bring' statement is the Mewlix equivalent of a 'return' statement in functions!
The 'run away' statement is equivalent to 'bring nothing'; an empty return.

To assign a function to an object property, you may use the *function assignment* statement:
<(^.x.^ )~

mew operations = 📦 []

🐱 [operations.sum](a, b)
  bring a + b
~meow

~( ^.x.^)>
Control flow can be achieved with the 'pounce when' statement:
<(^.x.^ )~

pounce when x == 0
  -- ... the 'if' block
or when x < 10
  -- ... the 'else if' block
else hiss
  -- ... the 'else' block
~meow

~( ^.x.^)>
A simple "while" loop can be constructed with the 'stare while' statement.
<(^.x.^ )~
stare while x > 0
  -- ... <logic> ...
  x = x - 1
~meow

~( ^.x.^)>
To loop over the items of a shelf or the characters of a string, use 'chase after'.
(Any number of exclamation marks can follow this statement.)
<(^.x.^ )~
chase after kitty in ['rusty', 'jake', 'princess']!!
  meow 'i love ' .. kitty .. '!'
~meow

~( ^.x.^)>
Inside loops...
- The 'catnap' statement skips to the end of the current iteration.
- The 'escape' statement breaks out of the enclosing loop entirely.
<(^.x.^ )~
chase after kitty in ['rusty', 'jake', 'princess', 'tiger']!!
  pounce when kitty == 'tiger'
    catnap
  ~meow
  meow 'i love ' .. kitty .. '!'
~meow

~( ^.x.^)>
Mewlix has classes—nicknamed 'clowders'.
And if you're wondering: a 'clowder' is a group of cats! _(:3」∠)_

Clowder methods can access instance properties/methods with the 'home' keyword!
The value of 'home' is bound to methods upon clowder instantiation!
<(^.x.^ )~

clowder Animal
  🐱 wake(name, sound)
    home.name  = name
    home.sound = sound
  ~meow
  
  🐱 make_sound()
    meow home.sound
  ~meow
~meow

~( ^.x.^)>
To instantiate a clowder, use the 'new' keyword:
<(^.x.^ )~
mew bird = new Animal('bird', 'chirp')
bird.make_sound() -- prints: 'chirp'

~( ^.x.^)>
Inheritance is also supported through the 'is' keyword.
Methods can be overidden, too.

To access a parent clowder's fields, use 'outside'.
To call a parent clowder's constructor, use 'look outside()'.
<(^.x.^ )~

clowder Cat is Animal
  🐱 wake()
    look outside('cat', 'meow')
  ~meow
~meow

mew cat = new Cat()
cat.make_sound()   -- prints: 'meow'

meow cat is Cat    -- prints: true
meow cat is Animal -- prints: true

~( ^.x.^)>
To throw an error, you can use the 'explode' statement.
When you do so, the line number the statement is in is included in the error message!
<(^.x.^ )~

explode ':('

~( ^.x.^)>
To catch and handle an error, use the 'watch/pounce' statement.
Read documentation to learn more—that statement is too complex to explain here.

To make an assertion about an expression at runtime, use 'assert'.
When you do so, the line number the assertion is in is included in any potential error message!
<(^.x.^ )~

assert a != nothing
assert type of a == 'string'

~( ^.x.^)>
A Mewlix script file (.mews) is called a *yarn ball*.

You can import yarn balls into other yarn balls.
To do so, you must know the yarn ball's *yarn key*.

A yarn ball can be assigned an unique string key with the 'yarn ball' statement.
This unique key can be any number of words separated by dot ('.') characters.

The 'yarn ball' statement should always be *at the top of the script*!
<(^.x.^ )~

-- Assigning a yarn ball the 'example' key (at the top of a script):
yarn ball example

~( ^.x.^)>
It is good practice to make yarn ball keys reflect directory structure, however.
If you have a yarn ball at 'foo/bar/cat.mews', it's a good idea to name it accordingly:
<(^.x.^ )~

yarn ball foo.bar.cat

~( ^.x.^)>
To import a yarn ball, use the 'takes' statement:
<(^.x.^ )~

takes example
takes foo.bar.cat
takes std.graphic

~( ^.x.^)>
When importing a yarn ball, the compiler will assign it a name based on the last dot-separated word.

When importing 'example', the auto-selected name is 'example'.
When importing 'foo.bar.cat', the auto-selected name is 'cat'.

When importing 'std.console', the auto-selected name is 'console'.
When importing 'std.graphic', the auto-selected name is 'graphic'.

You can choose your own name for an import with 'as':
<(^.x.^ )~

takes foo.bar.cat as foobarcat
takes std.graphic as g

~( ^.x.^)>
Alternatively, you may choose to import only a select few bindings from a yarn ball.
You can do this with the 'from... takes' statement:
<(^.x.^ )~

from std.graphic takes init, load, draw

~( ^.x.^)>
As for exports: all top-level bindings in a yarn ball are exported by default.
You can make a binding private by prefixing it with an underscore ('_'):
<(^.x.^ )~

mew _priv = 'this will not be exported'


~( ^.x.^)>
Mewlix has an enum-like construct named a 'cat tree'.
A cat tree declaration is as follows:
<(^.x.^ )~

cat tree Colors
  Purple
  Pink
  Magenta
~meow

~( ^.x.^)>
Each value inside of a cat tree is called a 'cat fruit'.
A cat fruit is a *box* with a string key and a numeric value associated with them!
<(^.x.^ )~

meow Colors -- prints: 'cat tree Colors ["Purple": 0, "Pink": 1, "Magenta": 2]'

meow Colors.Purple -- prints: 'cat fruit [Purple: 0]'
meow Colors.Pink   -- prints: 'cat fruit [Pink: 1]'

meow Colors.Purple.key -- prints: 'Purple'
meow Colors.Pink.key   -- prints: 'Pink'
meow Colors.Purple.key != Colors.Pink.key -- prints: true

meow Colors.Purple.value -- prints: 0
meow Colors.Pink.value   -- prints: 1
meow Colors.Purple.value < Colors.Pink.value -- prints: true


~( ^.x.^)>
And that concludes what we can cover in this short tutorial.
To learn more, read the documentation and see the example projects at: https://kbmackenzie.xyz/projects/mewlix
<(^.x.^ )~
```

### Mewlix Compiler CLI - A Brief Guide

```bash
# To create a project in the current directory, do:
mewlix init your-project-name

# To build a project, do:
mewlix build

# To run a project, do:
mewlix run

# When you make changes to a project, you must rebuild to see any of them.
# When running, you can ask the compiler to rebuild with the '-r' flag:
mewlix run -r

# To clean the 'build' folder, do:
mewlix clean

# To package your project for upload on itch.io, do:
mewlix package
```

### Installation

A comprehensive installation guide can be found [here][7]!

### Related Links

All the source code for Mewlix's **base library and templates** can be found [here][2].

**Example projects** can be found [here][3]!

### Tools

- A **Vim plugin** that provides **syntax highlighting** for `.mews` files can be found [here][6].

[1]: https://github.com/kbmackenzie/mewlix
[2]: https://github.com/kbmackenzie/mewlix-base
[3]: https://github.com/kbmackenzie/mewlix-examples
[4]: https://itch.io/
[5]: https://learnxinyminutes.com/
[6]: https://github.com/kbmackenzie/mewlix.vim
[7]: https://github.com/kbmackenzie/mewlix/blob/main/INSTALL.md
