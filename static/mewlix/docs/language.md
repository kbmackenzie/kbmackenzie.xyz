## 🐱 mewlix - language documentation

----

Mewlix is a dynamically typed scripting language. This page covers all of its expressions, operators and statements.

A few examples projects written in Mewlix can be found [on this repository](https://github.com/kbmackenzie/mewlix-examples)!

### Comments

Mewlix's line comments start with two dashes (`--`) and span the rest of the line:

```mewlix
-- This is a line comment!
meow "hello" -- Line comments can come after expressions!
```

Mewlix's block comments are opened with a `~( ^.x.^)>` and closed with a `<(^.x.^ )~`, and can span multiple lines:

```mewlix
~( ^.x.^)>
This is a block comment.
It can span multiple lines.
<(^.x.^ )~
```

----

### Types

Mewlix has five primitive types and two reference types, along with the `nothing` type, which represents the absence of any value.

| Type      | Behavior       | Description                              |
|-----------|----------------|------------------------------------------|
| number    | value type     | Integers and floating point numbers.     |
| string    | value type     | A string.                                |
| boolean   | value type     | A boolean value.                         |
| shelf     | value type     | A stack-like persistent data structure.  |
| box       | reference type | A collection of key-value pairs.         |
| clowder   | value type     | A clowder constructor.                   |
| clowder instance | reference type | An instance of a clowder.         |
| cat tree  | value type     | A cat tree.                              |
| cat fruit | value type     | A constant in a cat tree.                |
| function  | value type     | A function or clowder method.            |
| yarn ball | reference type | An imported yarn ball.                   |
| nothing   | value type     | The absence of value.                    |

Numbers, booleans, strings and functions operate very similarly to how they do in JavaScript.

Mewlix's clowders, the cat-oriented equivalent of classes, create boxes when instantiated. 

```mewlix
2 + 2       -- type: "number"
"hello"     -- type: "string"
true        -- type: "boolean"
nothing     -- type: "nothing"
```

#### Type Conversions

Mewlix is a strongly-typed language. It avoids performing implicit type conversions as much as it can.

... Because that's always sensible to do, even in a silly cat-themed esoteric language. \_(:3」∠)\_

As such:

- Arithmetic operations like `*` are only valid for numbers.
- The `+` operator doesn't perform string concatenation; use `..` instead. The `..` operator **always** creates a string from its operands, and is predictable. [See this section](#string-concatenation).

The few places where implicit type conversion occurs in Mewlix are as follows:

- Condition expressions, where values must be interpreted as *'truthy'* or *'falsey'*.
- String interpolation with [yarn-strings](#yarn-strings).
- The `..` operator, which always stringifies its operands before concatenating them. See [this section](#string-concatenation) for more information.
- The `not` operator, which always converts its operand to a boolean value before negating it.
- The `meow` expression, which must always convert its operand to a string before displaying it.
- The `explode` expression, which converts its operand to a string to include it in the error message.
- [Property lookup with the `[]` operator](#property-lookup), as boxes can only have string keys.

#### Truthy Values

In Mewlix, a *truthy* value is any value that's considered 'true' in a condition expression and that, when nuzzled into a boolean with `std.nuzzle`, returns `true`. 

Similarly, a *falsey* vale is any value that's considered 'false' in a condition expression and that, when converted to a boolean with `std.nuzzle`, returns `false`.

**All** values in Mewlix are *truthy* **except** for `false` and `nothing`, which are *falsey* values.

#### String Concatenation

The `+` operator cannot be used for concatenating strings, unlike most popular C-family languages. This is __by design__. You should instead use the `..` operator:

```mewlix
"hello" + "world"  -- bad!
"Hello" .. "world" -- good!
```

The `..` operator always creates a string, and is thus predictable.

```mewlix
"hello" .. 2         -- "hello2"
2 .. 2               -- "22"
true .. false        -- "truefalse"
nothing .. []        -- "nothing[]"
```

#### `unrecognized`

At first glance, Mewlix may appear to have an additional type, the `unrecognized` type.

```mewlix
takes foreign_object            -- foreign_object comes from a language extension, maybe
meow (type of foreign_object)   -- prints: 'unrecognized'
```
However, the `unrecognized` type isn't really a type of its own. It just means the value received is foreign and cannot be understood as a Mewlix value.

A plain JavaScript object will, for example, be `unrecognized`.

----

### Expressions

A concise explanation of the most important expressions in Mewlix.

#### Property Lookup

To look up a key in a box, use the dot operator (`.`):

```mewlix
mew cat = 📦 [
  name: "charlie",
  coat: "tabby",
]

meow cat.name
-- prints: charlie
```

Alternatively, you can use the square bracket operator (`[]`):

```mewlix
meow cat["coat"] -- prints: tabby
```

Any expression can go between the square brackets. If the expression results in a value of any type other than a string, the value is **converted to a string**.

When a key isn't found in a box, `nothing` is returned:
```mewlix
mew empty = 📦 []

meow empty.something -- prints: nothing
```
To check for the existence of a key in a box, use the [`in` operator](#in).

#### Function Calls

A function can be called in two different ways in Mewlix.

... Using a `do` expression:

```mewlix
do f <- x, y, z
```

... Or using the function call operator `()`:

```mewlix
f(x, y, z)
```

##### The `do` Expression

A function `sum` that accepts two arguments can be called like this with a `do` expression:

```mewlix
do sum <- a, b
```

In this example, `x` and `y` are arguments passed to the function. Arguments in `do` expressions must appear after the arrow (`<-`), and must be separated by comma.

When calling functions that don't accept any arguments, the arrow can be omitted:

```mewlix
do something
```

The `do` expression shines when chaining function calls and when piping functions with the `|>` operator.

Function chaining becomes more readable:

```mewlix
do h <- c, do g <- b, do f <- a     -- This is equivalent to: h(c,g(b,f(a)))
```

Function pipes with higher order functions also become more readable:

```mewlix
takes std.curry as c

collection |> do c.map <- 🐈 (x) -> do action <- x
```

Do keep in mind, however, that the `do` expression treats *everything* to its right as a function argument. 

Thus, to include `do` expressions **between** other expressions, you must wrap it in **parenthesis**:

```mewlix
meow (do sum <- x, y) * z
```

When including multiple function calls in an expression, **using the `()` operator** may be best.

##### The `()` Operator

The `()` operator is another way to call functions. It closely resembles what you'd find in C-family languages; in fact, it tries to match the behavior of C's `()` operator.

The syntax is simple: an identifier followed by parenthesis. Arguments go between the parenthesis, separated by a comma:

```mewlix
sum(a, b)
```

When calling functions this way, arguments can be spread across multiple lines:
```mewlix
cat.hunt(
  "bird",
  "bug",
  "tv remote"
)
```

This way of calling functions is best for functions that take many arguments, as you can easily spread them across multiple lines without needing to [escape line ends](#whitespace).

#### Shelf Expressions

A shelf expression can be used to create a new shelf and initialize it with values:

```mewlix
mew shelf = [1, 2, 3]
```

The values are added **in order** to the shelf, from left to right. Remember that shelves are a **LIFO** *(last in, first out)* data structure, however! In the example above, the value `3` is the last one added; thus, `paw at shelf` would give us the value `3`.

To learn more, read the [documentation page on shelves](#shelf)!

#### Box Expressions (`📦`)

A box expression can be used to create a new box and initialize it with values:

```mewlix
mew cat = 📦 [
  name: "charlie",
  coat: "tabby",
  hobbies: ["eating", "sleeping"]
]
```

**Alternatively,** if you prefer ASCII characters, the `=^-x-^=` symbol can be used:

```mewlix
mew cat = =^-x-^= [
  name: "charlie",
  coat: "tabby",
  hobbies: ["eating", "sleeping"]
]
```

A box is a collection of key-value pairs. Boxes are **reference types**. Mewlix also supports class-like boxes, called **clowders**. To learn more, read the [documentation page on clowders](#clowders)!

#### Function Expressions (`🐈`)

An anonymous function can be created with the `🐈` expression:

```mewlix
mew sum = 🐈 (a, b) -> a + b
```

**Alternatively,** if you prefer ASCII characters, the `=^oxo^=` symbol can be used:

```mewlix
mew sum = =^oxo^= (a, b) -> a + b
```

**Note:** The `🐈` expression is very useful for [kitty trains](@mewlix/functional-patterns#kitty-train)!

#### Clowder Instantiation

You can create instances of a clowder with the `new` expression:

```mewlix
mew cat = new Cat()
```

The example above creates a new instance of the clowder `Cat` and implicitly calls its constructor method!

You can pass arguments to a `new` expression when instantiating a clowder:

```mewlix
mew garden = new Garden("cattails", "petunias", "buttercups")
```

To learn more, read the [documentation page on clowders](#clowders)

#### Yarn Strings

A yarn string is a special string literal that can contain expressions within it. Expressions should be between square brackets:

```mewlix
meow :3"Cats have [10 - 1] lives!"
-- prints: "Cats have 9 lives!"
```
The expressions between square brackets are evaluated at runtime, and their results become part of the string.

#### `meow`

The `meow` expression is used to display text on the screen:

```mewlix
meow "Hello world!"
```

The value passed to the `meow` expression is always converted to a string.
The `meow` expression returns the value that was passed to it.

##### Implementation

The `meow` expression is special: It behaves differently depending on the **project mode**, as it relies on the template to implement it.

This is how it works across for each project mode:
| Mode     | Description                                             |
|----------|---------------------------------------------------------|
| console  | The `meow` expression writes a new line to the console. |
| graphic  | The `meow` expression writes text to the canvas.        |
| liibrary | The `meow` expression functions the same as `std.log`.  |

----

### Operators

All of Mewlix's operators are explained in this simple table:

| Operator          | Type    | Description                                                                    |
|-------------------|---------|--------------------------------------------------------------------------------|
| type of           | prefix  | Asks for the type of its operand. See [this section](#type-of).                |
| is                | infix   | Asks if a box is an instance of a clowder. See [this section](#is).            |
| claw at           | prefix  | Asks all key-value pairs in a box as a shelf. See [this section](#claw-at).    |
| ...?              | postfix | Asks length of shelf or string. **O(1)**. See [this section](#length-------).  |
| paw at            | prefix  | Looks at the item at the top of a shelf. **O(1)**.                             |
| push              | infix   | Pushes an item to the top of a shelf. **O(1)**.                                |
| knock over        | prefix  | Removes an item from the top of a shelf. **O(1)**.                             |
| ..                | infix   | Concatenate strings. Always converts its operands to strings. **O(n)**.        |
| in                | infix   | Asks if a value is contained in another. See [this section](#in).              |
| ^                 | infix   | Power operator.                                                                |
| - (unary)         | prefix  | Unary minus operator; negates a numeric value.                                 |
| + (unary)         | prefix  | Unary plus operator; [does nothing, but checks its operand](#unary-plus----).  |
| not               | prefix  | Boolean negation operator. Always converts its operand to a boolean.           |
| \*                | infix   | Multiplication operator.                                                       |
| /                 | infix   | Division operator.                                                             |
| //                | infix   | Floor division operator.                                                       |
| %                 | infix   | Modulo operator. See [this section](#modulo----).                              |
| +                 | infix   | Addition operator.                                                             |
| -                 | infix   | Subtraction operator.                                                          |
| <=, >=, <, >      | infix   | Comparison operators. See [this section](#comparison) to learn more.           |
| ==                | infix   | Equality operator. Always performs strict comparisons.                         |
| !=                | infix   | Inverse equality operator.                                                     |
| and               | infix   | Boolean 'and' operator. Short-circuits.                                        |
| or                | infix   | Boolean 'or' operator. Short-circuits.                                         |
| nand              | infix   | Boolean 'nand' operator. Short-circuits. See [this section](#nand-and-nor).    |
| nor               | infix   | Boolean 'nor' operator. Short-circuits. See [this section](#nand-and-nor).     |
| if/else           | ternary | Ternary operator. See [this section](#ternary-operator).                       |
| \|>               | infix   | Function pipe operator. See [this section](#function-pipes-----).              |
| :>                | infix   | Function composition operator. See [this section](function-composition-----).  |

##### Operator Precedence

A list of operators in order of precedence, from highest to lowest, can be found below.

**Note:** Operators with the same precedence are separated with a vertical bar (`|`).

```none
. | [] | ()
type of | is | claw at | ...?
paw at | push | knock over
.. | in
^
+ (unary) | - (unary) | not
* | / | // | %
+ | -
<= | >= | < | >
== | !=
and
or
nand
nor
if/else
|>
:>
```

#### Function Composition (`:>`)
The left-to-right function composition operator (`:>`) creates a new function by composing two functions.

The expression `f :> g` is equivalent to `🐈 (x) -> g(f(x))`.

It's similar to Haskell's [>>>](https://hackage.haskell.org/package/base-4.19.1.0/docs/Control-Arrow.html#v:-62--62--62-) function.

#### Function Pipes (`|>`)
The left-associative function application operator (`|>`), also known as the *piping* operator, applies a function to a value. It's best explained by example:

```mewlix
x |> f
```

In this example, the function `f` is applied to the value `x`. It's equivalent to `f(x)`.

That example is too simple, however. Function pipes really shine on longer chains of function calls: The confusing expression `h(g(f(x)))` is better represented with pipes: `x |> f |> g |> h`. Those expressions are equivalent.

It's simular to Haskell's [&](https://hackage.haskell.org/package/base-4.19.1.0/docs/Data-Function.html#v:-38-) function and F#'s [|>](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/#function-symbols-and-operators) operator.

**Note:** Function pipes are more easily written with curried functions. To learn about currying in Mewlix, read the documentation page on [kitty trains](@mewlix/functional-patterns#kitty-train)!

#### Comparison
In Mewlix, the comparison operators `<`, `>`, `<=` and `>=` **only work on the following types:**
- numbers
- strings
- booleans
- shelves containing one of these types

You cannot compare values of any other type with these operators.

Additionally, comparison can only happen between two values of **the same type**!

```mewlix
2 > 1           -- true
8 < 4           -- false

"ab" > "aa"     -- true
"cd" < "ab"     -- false

true  > false   -- true
false > true    -- false
```

#### Length (`...?`)
The postfix operator `...?` returns the **length** of a shelf or a string.

It has **O(1)** time complexity for both.

```mewlix
mew shelf = ["banana", "guava", "apple"]

meow shelf...?
-- prints: 3
```

#### `in`

The `in` operator asks if its left operand is contained in its right operand. It always returns a boolean.

It behaves differently based on the **type** of its right operand:
- **shelf**: It asks if the left operand is contained in the shelf.
- **string**: It asks if the left operand is a substring of the right operand.
- **box**: It asks if the left operand is a key in the box.
- ...: An exception is thrown for any other type. 

#### `is`

The `is` operator asks whether its left operand is a clowder instance of its right operand.

```mewlix
clowder Animal
~meow

clowder Cat is Animal
~meow

clowder Bird
~meow

mew cat  = new Cat()
mew bird = new Bird()

meow cat is Cat     -- prints: true
meow cat is Animal  -- prints: true
meow cat is Bird    -- prints: false
```

#### Unary Plus (`+`)

The unary plus (`+`) operator expects a number as operand.

It does nothing other than **type-check** its operand to ensure it's a number.

```mewlix
+x  -- throws error if 'x' isn't a number.
```

It has a similar effect as this assertion:

```mewlix
assert type of x == "number"
```
The one advantage of `+` is the slightly more helpful error message. Assertions tell you the line number where the assertion is, but give no further information. A `TypeMismatch` error thrown by `+` will have a much more descriptive message.

The unary plus operator does not perform implicit type conversion of any form. To convert a value to number, use the standard library function [`std.slap`](#std-slap).

#### Modulo (`%`)

The modulo (`%`) operator performs a [modulo](https://en.wikipedia.org/wiki/Modulo) operation.

It performs a true modulo; it's **not** equivalent to C's remainder (`%`) operator.

A concise explanation of the difference can be found [here](https://stackoverflow.com/a/13683709).

#### Ternary Operator

The conditional operator, also known as the *ternary operator*, is better understood by example:

```mewlix
x if condition else y
```

In that example, `condition` is evaluated first, and if its value is *truthy*, `x` is evaluated and returned; otherwise, `y` is evaluated and returned.

The conditional operator **short-circuits**: In the example given, when `condition` is truthy, `y` is never evaluated, and when `condition` is *falsey*, `x` is never evaluated.

It works similarly to the ternary operator `?/:` in C-family languages.

#### `nand` and `nor`

In addition to the usual `and` and `or` boolean operators, Mewlix includes a `nand` and a `nor` operator. They have lower precedence than the `and` and `or` operators.

As the [NAND](https://en.wikipedia.org/wiki/Sheffer_stroke) and [NOR](https://en.wikipedia.org/wiki/Logical_NOR) operators have the property of [functional completeness](https://en.wikipedia.org/wiki/Functional_completeness), any boolean expression can be rewritten with only `NAND` / only `NOR` operations.

... You *shouldn't.*

... But you *can*:

```mewlix
meow (x and y) == ((x nand y) nand (x nand y)) -- prints: true
```

#### `type of`

The `type of` operator allows you to inspect the **type** of a value at runtime:

It returns a string representation of the type.

The string returned for each type. See the [type table](#types).

#### `claw at`

The `claw at` expression retrieves the key-value pairs of a box and returns them as a shelf of tuple-like boxes:

```mewlix
mew fruits = 📦 [ banana: "yellow", apple: "red" ]

claw at fruits |> std.meowf
-- prints: [ 📦 [ key: "banana", value: "yellow" ], 📦 [ key: "apple", value: "red" ] ]
```

This operation is **O(n)**.

----

### Shelf

![Looping animation of a cat resting on a shelf.](/mewlix-images/cat-shelf.webp)

Mewlix doesn't have arrays nor lists. Instead, it has a stack-like, LIFO [persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure)—affectionately nicknamed a *'shelf'*—with O(1) appending and O(1) deletion operations.

Due to its nature as a **persistent data structure**, a shelf behaves like a *'value type'*:
- Shelves are **immutable**.
- Any operations on a shelf will create a new shelf, preserving its previous version.

**Q:** *"A new shelf is created every time? Wouldn't that make the operation O(n)?"*

**A:** No, thanks to their implementation! Shelves are implemented as singly-linked lists with immutable nodes, and thanks to immutability, shelves can share nodes between each other. Additionally, the three basic shelf operations (`push`, `knock over` and `paw at`) operate only on the 'top' of the shelf.

Thus, the time complexity of these three basic operations is O(1). 

#### Basic Operations

There are three basic operations you can perform on shelves:

##### Push (`push`)

Pushes the left operand to the top of a shelf. The right operand is expected to be a shelf.

```mewlix
mew fruits = ["banana", "guava"]

fruits = "apple" push fruits
meow fruits
-- prints: ["banana", "guava", "apple"]
```

##### Paw At (`paw at`)

Looks at the value at the top of a shelf. *(Remember: Shelves are a LIFO (last in, first out) data structure.)*

```mewlix
mew fruits = ["banana", "guava", "apple"]
mew top = paw at fruits

meow top
-- prints: apple
```

When the `paw at` operator is used on an empty shelf, it returns `nothing`.

##### Knock Over (`knock over`)

Knocks the shelf over, dropping the value at the top of the shelf. *(Remember: Shelves are immutable. This doesn't mutate the original shelf.)*

```mewlix
mew fruits = ["banana", "guava", "apple"]
fruits = knock over fruits

meow fruits
-- prints: ["banana", "guava"]
```

When the `knock over` operator is used on an empty shelf, it returns an empty shelf.

#### Additional Operations

An explanation for additional operations one might want to perform on shelves, and their peculiarities:

##### Length (`...?`):

The length operator (`...?`) can be used to get the length of a shelf. It's an **O(1)** operation.

##### Indexing / Lookup
As shelves are a *last in, first out* data structure, performing an indexed lookup in a shelf requires traversing it in order: an **O(n)** operation.

The `std` yarn ball provides a few functions for indexing into shelves and inserting/removing items:
1. [std.poke](#std-poke)
1. [std.insert](#std-insert)
1. [std.remove](#std-remove)

**All** of these functions have an O(n) time complexity, however, and they should be used **very sparingly**! Too much shelf-poking will surely get you in trouble. Imagine if you broke a vase!

##### Higher Order Functions: `map()`, `filter()`, `fold()`

The base library includes a few higher order functions for working with shelves in a simple and concise way; namely [map](#std-map), [filter](#std-filter) and [fold](#std-fold).

----

### Clowders

Mewlix has support for a select few features from object-oriented programming: namely, classes and inheritance.

In Mewlix, classes are called **clowders**. If you're wondering: [a clowder is a group of cats](https://www.merriam-webster.com/dictionary/clowder)!

We can define a new clowder with the `clowder` statement:
```mewlix
clowder Cat
  🐱 wake(name)
    home.name = name
  ~meow

  🐱 introduction()
    bring "meow, i'm " .. home.name
  ~meow
~meow
```

The `wake()` method is our clowder's **constructor**. When you create a new instance of a clowder with a `new` expression, the constructor is called on that instance.

The `home` keyword can be used inside methods to refer to the clowder instance that owns that method. A method is always bound to the clowder instance that owns it upon instantiation. This keyword is **only valid inside methods**. To learn more, read [this section](#method-ownership).

The `outside` keyword can be used to refer to the clowder instance's parent instance. This keyword is **only valid inside methods**.

The `look outside()` expression can be used to invoke a parent clowder's constructor.

#### Instantiation

You can create a new instance of a clowder with the `new` expression:

```mewlix
mew cat = new Cat('charlie')
meow cat.introduction() -- prints: 'meow, i'm charlie"
```

#### Inheritance

When defining a clowder, we can specify inheritance with the `is` keyword:

```mewlix
clowder Charlie is Cat
  🐱 wake()
    look outside("charlie")
  ~meow
~meow
```

As you can see, you can call the parent clowder's constructor with `look outside()`.

We can check for clowder inheritance with the `is` operator:

```mewlix
mew charlie = new Charlie()

meow charlie is Charlie -- prints: true
meow charlie is Cat     -- prints: true
```

#### Method Ownership
A clowder's instance methods are always bound to the clowder instance that owns them. This means a method *always knows* what its owner is, and the `home` keyword in a method will **never** change meaning.

Thus, it's completely safe to alias methods or pass them as arguments to functions.

```mewlix
mew charlie = new Charlie()     -- instantiate clowder.
mew hi = charlie.introduction   -- create alias.
meow hi()                       -- prints: 'meow, i'm charlie'
```

#### Method Overriding

A clowder that inherits from another clowder can override its parent clowder's methods by simply re-defining them:

```mewlix
clowder Bob is Cat
  🐱 wake()
    outside("bob")
  ~meow

  -- override 'introduction' method
  🐱 introduction()
    bring "bob does not like introducing himself."
  ~meow
~meow

mew bob = new Bob()
meow bob.introduction() -- prints: 'bob does not like introducing himself.'
```

----

### Whitespace

Mewlix is a **whitespace-sensitive language**—*to an extent*.

To specify: it's **whitespace-sensitive**, but **not indentation-sensitive**.

While **line breaks** have meaning in Mewlix when parsing statements, any and all indentation is completely ignored by the parser and is purely a matter of personal taste.

As an example, this:

```mewlix
🐱 fib(n)
  pounce when n == 0
    bring 0
  ~meow

  pounce when n == 1
    bring 1
  ~meow

  bring fib(n - 1) + fib(n - 2)
~meow
```
... Will be parsed the exact same way as this:

```mewlix
🐱 fib(n)
pounce when n == 0
bring 0
~meow

pounce when n == 1
bring 1
~meow

bring fib(n - 1) + fib(n - 2)
~meow
```

**Line breaks** have meaning—each statement in the body of that example function is terminated by a line break.

*Indentation*, however, has **no special meaning**.

#### Semicolons

Wherever line breaks are required, you can instead use a **semicolon** to achieve the same effect. This is useful when too many line breaks hurt readability.

As an example, let's rewrite `fib` with a few semicolons:
```
🐱 fib(n)
  pounce when n == 0; bring 0; ~meow
  pounce when n == 1; bring 1; ~meow

  bring fib(n - 1) + fib(n - 2)
~meow
```
A lot cleaner and more concise!

#### Escaping Newlines

You can escape a newline character—essentially making the parser ignore the line break altogether—by using a `\` character before the newline.

```mewlix
chain()     \
  .call()   \
  .call()   \
  .call()
```

----

### Yarn Ball

In Mewlix, a module is called a **yarn ball**. 

Yarn balls are always associated with string keys (nicknamed "**yarn keys**") for identification. A yarn key is a string containing any combination of words separated by dot (`.`) characters.

To set the **yarn key** for a given yarn ball, include the `yarn ball` declaration at the top of your file:

```mewlix
yarn ball tutorial.yarn
```

When a script doesn't have a `yarn ball` declaration, its string key defaults to 'main'.

A few things you should understand about yarnballs are:
1. A yarn ball is evaluated once when first imported, and is then cached for future imports.
2. Circular imports are **not allowed**. See [this section](#circular-imports) for more info.

#### File Hierarchy

Although yarn keys can be anything, it's good practice to make a yarn ball's key reflect the directory structure of your project, in a namespace-like fashion.

For a `.mews` file located at `foo/bar/cat.mews`, it's a good idea to name it accordingly:

```mewlix
yarn ball foo.bar.cat
```

#### Import

To import a yarn ball, use the `takes` statement:

```mewlix
takes example
takes foo.bar.cat
takes std.graphic
```

When importing a yarn ball, the compiler will assign it a name based on the last dot-separated word.

For example:

- When importing `example`, the auto-selected name is 'example'.
- When importing `foo.bar.cat`, the auto-selected name is 'cat'.
- When importing `std.console`, the auto-selected name is 'console'.
- When importing `std.graphic`, the auto-selected name is 'graphic'.

You can choose your own name for an import with 'as':

```mewlix
takes foo.bar.cat as foobarcat
takes std.graphic as g
```

Alternatively, you may choose to import only a select few bindings from a yarn ball.
You can do this with the 'from... takes' statement:

```
from std.graphic takes init, load, draw
```

#### Export

All top-level bindings in a yarn ball are exported by default.

You can make a binding private by prefixing it with an underscore ('_'):

```
mew _priv = 'this will not be exported'
```

#### Important Notes

Yarn balls have a few quirks you should be aware of:

##### Imports Are Read-Only

When you import a yarn ball, all of its fields are **read-only**. This is by design.

You cannot do something like this by default: 

```mewlix
takes tutorial.yarn as tutorial
tutorial.foo = ':3' -- error!
```

You're still free to export setters for fields in a yarn ball. Those will work fine.

##### Implicit `std` Import

The compiler implicit imports the `std` yarn ball on every module when it compiles them. You almost always want this, as the `std` yarn ball contains a lot of very useful functions (especially for string manipulation!).

If you **don't** want the `std` yarn ball to be implicitly imported, pass the `--no-std` flag to the compiler when building.

You can read the [documentation page for the command-line interface](@mewlix/compiler#command-line-interface) to learn more.

##### Nested Imports

Import statements can be nested inside blocks. This is fine and safe to do; yarn balls are cached, and it won't have any impact on performance.

```mewlix
🐱 do_foo()
  takes something
  bring something.foo()
~meow
```

##### Circular Imports

Mewlix does not allow circular imports. Two yarn balls cannot recursively import each other at the top level: This will lead to a stack overflow error.

As an example, given two yarn balls `foo.mews` and `bar.mews`:
```mewlix
-------------
-- foo.mews
yarn ball foo
takes bar
-------------
-- bar.mews
yarn ball bar
takes foo
-------------
```

Trying to import either of these yarn balls will lead to a stack overflow, as they recursively import each other, without end.

A workaround for this issue is to use **nested imports**:

```mewlix
-------------
-- foo.mews
yarn ball foo
takes bar
-------------
-- bar.mews
yarn ball bar

🐱 with_foo(key)
  takes foo
  bring foo[key]
~meow
-------------
```

This is safe to do, and because yarn balls are cached, it's also not going to have a noticeable effect on performance.
