## 🐱 mewlix - functional patterns

Mewlix is imperative at heart, but it was written by someone addicted to functional programming. Because of this, functional programming patterns are supported in varying degrees.

----

### Function Composition + Application

The function composition operator `:>` can be used to compose two functions:

```mewlix
mew h = f :> g  -- Equivalent to: 🐈 (x) -> g(f(x))
```

The function application operator `|>` can be used for creating function pipes:

```mewlix
value |> f |> g |> h  -- Equivalent to: h(g(f(x)))
```

----

### Currying

[Function currying](https://en.wikipedia.org/wiki/Currying) can be done in Mewlix with a chain of anonymous function expressions.

This is affectionately nicknamed a **kitty train**:

```mewlix
🐈 (a) -> 🐈 (b) -> 🐈 (c) -> 🐈 (d) -> 🐈 (e) -> some_func(a, b, c, d, e)
```

Kitty trains can also be organized like this:

```mewlix
🐈 (a)
  -> 🐈 (b)
  -> 🐈 (c)
  -> 🐈 (d)
  -> 🐈 (e) -> some_func(a, b, c, d, e)
```

This can make them more readable when there are many parameters.

----

### Curried Standard Library

Mewlix's standard yarn balls do not include [curried functions](https://en.wikipedia.org/wiki/Currying). This is purely a design choice, as Mewlix is primarily an imperative language.

All standard yarn balls have **curried variants** one can import at any time, however.

A curried variant of a yarn ball includes **all** exports from the original yarn ball, and curries function with an argument count greater than 1. Constants and single-argument functions remain unchanged.

As such, the curried version can replace the original with no downsides.

#### `std.curry`

The curried variant of the `std` yarn ball:

```mewlix
takes std.curry as std_

[1, 2, 3] |> (do std_.map <- 🐈 (x) -> x * x) |> std_.meowf
-- prints: [1, 4, 9]
```

As the `std` yarn ball is always implicitly imported in every yarn ball, you can't import `std.curry` as `std`, as that will generate a name conflict.

To get around that, you should build your project with the [`--no-std` compiler flag](@mewlix/compiler#compiler-options) or add `no-std` to the ['flags' field in your project file](@mewlix/compiler#project-file).

After that, you're free to define your own `std`:

```mewlix
takes std.curry as std
```

#### `std.console.curry`

The curried variant of the `std.console` yarn ball, available in the `console` project mode:

```mewlix
takes std.console.curry as console
```

#### `std.graphic.curry`

The curried variant of the `std.graphic` yarn ball, available in the `graphic` project mode:

```mewlix
takes std.graphic.curry as graphic
```

**Note:** There may be a slight performance difference with curried functions in a game loop.
