## 🐱 mewlix - `std` yarn ball

The core of Mewlix's standard library is the `std` yarn ball. \_(:3」∠)\_

It contains functions for string and shelf manipulation, type conversion and basic mathematical operations. 

#### Implicit Import

All Mewlix yarn balls implicitly import the `std` yarn ball by default. To keep this from happening, use the [`--no-std` compiler flag](@mewlix/CLI) or add `no-std` in the [*'flags'* field of your project file](@mewlix/Packaging#project-file).

### Table of Contents

- [Shelves and Strings](#shelves-and-strings)
- [Collections](#collections)
- [Numbers](#numbers)
- [Storage](#storage)
- [IO](#files)
- [JSON](#json)
- [Debugging](#debugging)

----

### Shelves and Strings

A collection of functions for manipulating shelves and strings—most work on both!

#### std.purr

**type:** `(any) -> string`

Converts any value to a string.

#### std.cat

**type:** `([any]) -> string`

Converts all values in a shelf to strings and concatenates them in 'reverse' order: Each value is appended to the start of an accumulator string. As shelves are a LIFO data structure, that means `std.cat([a, b]) == a .. b`.

It's named after the [standard Unix utility 'cat'](https://en.wikipedia.org/wiki/Cat_(Unix)).

This function can be used to build strings:

```mewlix
["Cats have ", 10 - 1, " lives!"] |> std.cat  -- "Cats have 9 lives!"
```

Although you should prefer to use [yarn-strings](@mewlix/language#yarn-strings) instead:

```mewlix
:3"Cats have [10 - 1] lives!" -- "Cats have 9 lives!"
```

And the two really shine best together:

```mewlix
std.cat([
  :3"I like [x]!\n",
  :3"I like [y]!\n",
  :3"I also like [z]!\n",
])
```

#### std.trim

**type:** `(string) -> string`

Trims any whitespace at the start and end of a string.

#### std.tear

**type:** `(string, number, number) -> string`

Gets a substring from a string. It expects the following arguments:
1. The original string.
2. The start index.
3. The end index; non-inclusive.

```mewlix
std.tear("cat", 1, 2)       -- "a"
std.tear("esoteric", 0, 3)  -- "eso"
```

#### std.push_down

**type:** `(string) -> string`

Converts a string to all lowercase.

#### std.push_up

**type:** `(string) -> string`

Converts a string to all uppercase.

#### std.poke

**type:** `<T>([T], number) -> T`

**type:** `(string, number) -> string`

Looks up an index in a shelf or string. Indices start at 0.

For shelves, a lookup starts at the **top of the shelf**. This means `std.poke(shelf, 0) == paw at shelf`.

**Note:** While this function's time complexity for strings is **O(1)**, its time complexity for shelves is **O(n)** due to how shelves work.

It accepts the following arguments:
1. A shelf or string.
2. A numeric index.

Additionally, this function has special behavior based on the index:
1. When index is greater than the string/shelf's length, this function returns `nothing`.
2. When index is negative, lookup starts from the **end** of the string / the **bottom** of the shelf.

```mewlix
std.poke(["c", "a", "t"], 0)  -- "t"
std.poke("cat", 0)            -- "c"

std.poke(["c", "a", "t"], 1)  -- "a"
std.poke("cat", 1)            -- "a"

std.poke(["c", "a", "t"], -1) -- "c"
std.poke("cat", -1)           -- "t"
```

#### std.char
**type:** `(number) -> string`

Converts a numeric value representing a UTF-16 code unit to a single-character string.

If the numeric value is outside of the range `0 <= value <= 65535`, an exception is thrown.

#### std.bap
**type:** `(string) -> number`

Returns a numeric value representing the first UTF-16 code unit in the string.

It calls JavaScript's [String.prototype.charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) method under the hood.

#### std.nuzzle

**type:** `(any) -> boolean`

Converts any value to a boolean. Its rules are simple:
- When passed a *truthy* value, it returns `true`.
- When passed a *falsey* value, it returns `false`.

In practice, all values in Mewlix are truthy except for `false` and `nothing`.

Read the [documentation page for truthy values and type conversion](@mewlix/language#truthy-values) to learn more.

#### std.empty

**type:** `<🐱>([🐱]) -> boolean`

**type:** `(string) -> boolean`

Checks if a shelf or string is empty and returns `true` if it is.

#### std.join

**type:** `<🐱>([🐱], [🐱]) -> [🐱]`

**type:** `(string, string) -> string`

Concatenates two strings or two shelves together. Values must be of the same type.

The time complexity of this function is `O(n)`.

```mewlix
std.join([1, 2, 3], [4, 5, 6])  -- [1, 2, 3, 4, 5, 6]
std.join("foo", "foo")          -- "foofoo"
```

#### std.take

**type:** `<🐱>([🐱], number) -> [🐱]`

**type:** `(string, number) -> string`

Takes a number of items from the top of a shelf, or a number of characters from the start of a string.

It expects the following arguments:
1. A shelf or a string value.
2. A number defining the amount of items to take.

```mewlix
std.take([1, 2, 3, 4], 2)   -- [4, 3]
std.take('hello world', 5)  -- 'hello'
```

#### std.drop

**type:** `<🐱>([🐱], number) -> [🐱]`

**type:** `(string, number) -> string`

Drops a number of items from the top of a shelf, or a number of characters from the start of a string.

It expects the following arguments:
1. A shelf or a string value.
2. A number defining the amount of items to drop.

```mewlix
std.drop([1, 2, 3, 4], 2)   -- [1, 2]
std.take('hello world', 5)  -- ' world'
```

#### std.reverse

**type:** `([🐱]) -> [🐱]`

**type:** `(string) -> string`

Reverses a shelf or a string.

#### std.insert

**type:** `<🐱>([🐱], 🐱, number?) -> [🐱]`

Inserts a value into a shelf at an index.

**Note:** As shelves are a LIFO data structure, this function's time complexity is ***O(n)***. 

It expects the following arguments:
1. A shelf.
2. A value of any type to be inserted.
3. A numeric index specifying where the value should be inserted.

Additionally, this function has special behavior based on the index:
1. When the index isn't specified, it defaults to `0`.
1. When the index is greater than the shelf's length, the value is inserted at the bottom of the shelf.
2. When the index is negative, selection starts from the bottom of the shelf.

```mewlix
std.insert([1, 2, 3], 4, 0)     -- [1, 2, 3, 4]
std.insert([1, 2, 3], 4, 1)     -- [1, 2, 4, 3]

std.insert([1, 2, 3], 4, -1)    -- [4, 1, 2, 3]
std.insert([1, 2, 3], 4, -2)    -- [1, 4, 2, 3]
```

#### std.remove

**type:** `<🐱>([🐱], number?) -> [🐱]`

Remove an item from a shelf at an index.

**Note:** As shelves are a LIFO data structure, this function's time complexity is ***O(n)***. 

It expects the following arguments:
1. A shelf.
3. A numeric index specifying the index of the item to be removed.

Additionally, this function has special behavior based on the index:
1. When the index isn't specified, it defaults to `0`.
1. When the index is greater than the shelf's length, nothing happens.
2. When the index is negative, selection starts from the bottom of the shelf.

```mewlix
std.remove([1, 2, 3, 4], 0)     -- [1, 2, 3]
std.remove([1, 2, 3, 4], 1)     -- [1, 2, 4]

std.remove([1, 2, 3, 4], -1)    -- [2, 3, 4]
std.remove([1, 2, 3, 4], -2)    -- [1, 3, 4]
```

#### std.sort

**type:** `<🐱>([🐱]) -> [🐱]`

Sorts a shelf.

**Note**: The shelf should contain only values of types that **can be compared**:
- numbers
- strings
- booleans
- shelves containing values that can be compared

**Note:** The function's time complexity depends on the underlying JavaScript engine's implementation of `Array.prototype.sort()`. [In most widely used JavaScript engines, it should be `O(n log n)`](https://stackoverflow.com/a/57763259/19764270).

```mewlix
std.sort([3, 4, 1, 2, 6, 5])    -- [1, 2, 3, 4, 5, 6]
std.sort(["c", "a', "t"])       -- ["a", "c", "t"]
std.sort([true, false, true])   -- [false, true, true]
```

#### std.shuffle

**type:** `<🐱>([🐱]) -> [🐱]`

Shuffles the items in a shelf. This function's time complexity is **O(n)**.

```mewlix
std.shuffle([1, 2, 3, 4, 5, 6]) -- [6, 3, 1, 4, 2, 5]
```

#### std.map

**type:** `<🐱,🐦>((🐱) -> 🐦, [🐱]) -> [🐦]`

Applies a function to each item in a shelf, returning a new shelf.

It expects the following arguments:
1. A function to apply to each item in a shelf.
2. A shelf.

```mewlix
std.map(🐈 (x) -> x * x, [1, 2, 3]) -- [1, 4, 9]
```

#### std.filter

**type:** `<🐱>((🐱) -> boolean, [🐱]) -> [🐱]`

Filters elements in the shelf by a predicate. Returns a new shelf.

It expects the following arguments:
1. A predicate function.
2. A shelf.

```mewlix
std.filter(🐈 (x) -> x % 2 == 0, [1, 2, 3, 4]) -- [2, 4]
```

#### std.fold

**type:** `<🐱,🐦>((🐦, 🐱) -> 🐦, 🐦, [🐱]) -> [🐦]`

Folds over a shelf. Akin to Haskell's `foldl` and JavaScript's `Array.prototype.reduce()`.

It expects the following arguments:
1. A function accepting two arguments: the accumulator value and a shelf item, respectively.
2. An initial value for the accumulator.
3. A shelf to fold over.

A fold is a little hard to explain concisely, so I won't bother to explain it here. There are plenty of good resources for it online. Here's the [Wikipedia page on folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function))!

```mewlix
std.fold(🐈 (acc, x) -> acc + x, 0, [1, 2, 3]) -- 6
```

#### std.any

**type:** `<🐱>((🐱) -> boolean, [🐱]) -> [🐱]`

Asks if any item in the shelf satisfies a predicate.

This function expects the following arguments:
1. A predicate function.
2. A shelf.

If the shelf is empty, this function returns `false`.

#### std.all
**type:** `<🐱>((🐱) -> boolean, [🐱]) -> [🐱]`

Asks if all items in the shelf satisfy a predicate.

This function expects the following arguments:
1. A predicate function.
2. A shelf.

If the shelf is empty, this function returns `true`.

#### std.zip
**type:** `<🐱,🐦>([🐱], [🐦]) -> [box]`

Zip two shelves together into a shelf of tuples. Akin to Haskell's `zip`.
```mewlix
std.zip([1, 2], [3, 4])   -- [📦 [ first: 1, second: 3 ], 📦 [ first: 2, second: 4 ]]
```

#### std.foreach
**type:** `<🐱>((🐱) -> any, [🐱]) -> nothing`

Apply a function to each item in a shelf. This function is similar to [std.map](#std-map), but it discards results instead of storing them in a shelf.

This function expects the following arguments:
1. A function to be called for each item.
2. A shelf.

#### std.repeat
**type:** `(number, (number?) -> any) -> nothing`

Repeatedly invoke a callback function `n` times.

This function expects the following arguments:
1. A number indicating how many times the function should be invoked.
2. A callback function to be invoked. The function may optionally accept a numeric argument, which will always be equal to the number of times the function has been called so far (starting at `0`).

----

### Collections
A collection of functions for creating... collections!

Most functions in this category return a **box**.

#### std.tuple
**type:** `<🐱,🐦>(🐱, 🐦) -> box`

Create a box holding two items, stored as `.first` and `.second` respectively.
```mewlix
std.tuple(1, 2)           -- 📦 [ first: 1, second: 2 ]
```

#### std.table
**type:** `() -> table`

Create a magic box that behaves like an [associative array](https://en.wikipedia.org/wiki/Associative_array). It can be used to to store key-value pairs, and is affectionately nicknamed a *'table'*.

It has the following methods:
| Name   | Type                  | Description                                                      |
|--------|-----------------------|------------------------------------------------------------------|
| add    | `(any, any) -> table` | Adds a key-value pair to the table.                              |
| has    | `(any) -> boolean`    | Asks if the table has a given key in it.                         |
| get    | `(any) -> any`        | Looks up a key on the table. Returns `nothing` if none is found. |
| remove | `(any) -> table`      | Remove a key-value pair from the table.                          |
| clear  | `() -> table`         | Clears the table, removing all key-value pairs.                  |

The `.add` method can be chained to initialize a table: 
```mewlix
mew table = std.table()   \
  .add("one"  , 1)        \
  .add("two"  , 2)        \
  .add("three", 3)
```

#### std.set
**type:** `() -> set`

Create a magic box that behaves like a [set](https://en.wikipedia.org/wiki/Set_(abstract_data_type)). It can be used to store unique values.

It has the following methods:
| Name   | Type               | Description                                    |
|--------|--------------------|------------------------------------------------|
| add    | `(any) -> set`     | Adds a value to the set.                       |
| has    | `(any) -> boolean` | Asks if the set contains a value.              |
| remove | `(any) -> set`     | Removes a value from the set *(if it exists)*. |
| clear  | `() -> set`        | Clears the set, removing all values.           |

The `.add()` method can be chained to initialize a set:
```mewlix
mew set = std.set()     \
  .add("one")           \
  .add("two")           \
  .add("three")
```

----

### Numbers
A collection of functions for manipulating number values.

#### std.slap
**type:** `(any) -> number`

Converts a value to a number. It has a special behavior for each type:
1. Numeric values are returned without changes, as you would expect.
2. Boolean values are always successfully converted: `true` is 1, `false` is 0.
3. Strings are parsed. If a string can be parsed as a number, that number is returned. An exception is thrown otherwise.
4. Any other value results in an exception being thrown.

#### std.round
**type:** `(number) -> number`

Rounds a number to its nearest integer.

#### std.floor
**type:** `(number) -> number`

Rounds down a number.

#### std.ceiling
**type:** `(number) -> number`

Rounds up a number.

#### std.min
**type:** `(number, number) -> number`

Returns the smallest of two numbers.

#### std.max
**type:** `(number, number) -> number`

Returns the biggest of two numbers.

#### std.clamp
**type:** `(number, number, number) -> number`

Clamps a number to a minimum and a maximum value. It expects the following arguments:
1. A number to clamp.
2. A minimum value.
3. A maximum value.

```mewlix
std.clamp(30, 0, 20)    -- 10
std.clamp(-2, 0, 20)    -- 0
std.clamp(10, 0, 20)    -- 10
```

#### std.abs
**type:** `(number) -> number`

Returns the absolute value of a number.

#### std.pi
**type:** `number`

A constant representing the mathematical constant [Pi](https://en.wikipedia.org/wiki/Pi).

#### std.e
**type:** `number`

A constant representing [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)).

#### std.sqrt
**type:** `(number) -> number`

Calculates the square root of a given number. 

This function expects a number greater or equal to zero.

#### std.logn
**type:** `(number, number?) -> number`

Calculates the logarithm of a number to a given base.

This function expects the following arguments:
1. A number greater than 0.
2. An optional numeric argument defining the base for the logarithm.

If the second argument is omitted, base [e](#std-e) is used.

**Note:** Not to be confused with [std.log](#std-log)!

#### std.sin
**type:** `(number) -> number`

Returns the sine of an angle. It expects the following arguments:
1. An angle, in radians.

#### std.cos
**type:** `(number) -> number`

Returns the cosine of an angle. It expects the following arguments:
1. An angle, in radians.

#### std.tan
**type:** `(number) -> number`

Returns the tangent of an angle. It expects the following arguments:
1. An angle, in radians.

#### std.asin
**type:** `(number) -> number`

Returns the arcsine (in radians) of a number.

#### std.acos
**type:** `(number) -> number`

Returns the arccosine (in radians) of a number.

#### std.atan
**type:** `(number) -> number`

Returns the arctangent (in radians) of a number.

#### std.atan2
**type:** `(number, number) -> number`

The [2-argument arctangent function](https://en.wikipedia.org/wiki/Atan2).

It expects the following arguments:
1. A `y` coordinate.
2. A `x` coordinate.

#### std.truncate
**type:** `(number, number?) -> number`

Truncates a floating point number, returning its integer part.

It expects the following arguments:
1. A number.
2. An optional numeric argument specifying the number of decimal places to preserve.

The second argument, if present, should be greater or equal to 0. It defaults to 0.

```mewlix
std.truncate(3.14159)       -- 3
std.truncate(3.14159, 2)    -- 3.14
```

#### std.random
**type:** `() -> number`

Generates a random number *x* between 0 and 1, where *0 <= x < 1*.

#### std.random_int
**type:** `(number, number) -> number`

Generates a random integer number between two numbers. It expects the following arguments:
1. A *'min'* value.
2. A *'max'* value.

This function will generate a random integer *x* such that *min <= x <= max*.

Thus, *'min'* and *'max'* are both inclusive.

#### std.count
**type:** `(number, number?) -> [number]`

Generates a shelf holding a sequence of numbers.

It behaves differently based on its number of arguments:
1. When given a single argument `a`, it generates a sequence of numbers starting at 0 until `a`.
2. When given two arguments, `a` and `b`, it generates a sequence of numbers starting at `a` and ending in `b`.

As shelves are a *last in, first out* data structure, `std.count` creates shelves in such a way where the **starting number** for the sequence is **always at the top of the shelf.**

```mewlix
std.count(3)      -- [3, 2, 1, 0]
std.count(1, 3)   -- [3, 2, 1]
std.count(3, 1)   -- [1, 2, 3]
std.count(1, 1)   -- [1]
```

**Note:** This function expects its arguments to be **whole numbers**. Any floating point arguments are rounded down:
```mewlix
std.count(3.2) == std.count(3)
```

----

### Storage
A set of functions for reading from and writing to local storage.

#### std.read
**type:** `(string) -> string?`

Read a value from local storage associated with a given string key.

If the key isn't found in local storage, this function returns `nothing`.

#### std.save
**type:** `(string, string) -> string`

Saves a key in local storage with a value associated with it.

If the key already exists, its value is overwritten.

----

### IO
A set of functions for interacting with the outside world.

#### std.meowf
**type:** `(any) -> string`

A function wrapper around the [`meow` expression](@mewlix/language#meow).

#### std.date
**type:** `() -> box`

Returns the current date and time as a box.

The returned box will always have the following fields:
- **day**: The current weekday represented as a number from 1 to 7, where 1 is Sunday and 7 is Saturday.
- **month**: The current month represented as a number from 1 to 12, where 1 is January and 12 is December.
- **year**: The current year, as a number.
- **hours**: The hours elapsed in the day, as a number, from 0 to 23. At 6 PM, this field's value would be 18, for example.
- **minutes**: The minutes elapsed in the current hour, as a number. At 6:30 PM, this field's value would be 30, for example.
- **seconds**: The seconds elapsed in the current minute, as a number. At 6:30:12 PM, this field's value would be 12, for example.

This function's implementation uses JavaScript's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor.

#### std.time
**type:** `() -> number`

Returns the time elapsed since the [epoch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), in milliseconds.

All it does is call JavaScript's [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) static method.

----

### JSON
A set of functions for JSON serialization and deserialization.

#### std.to_json
**type:** `(any) -> string`

Serializes a Mewlix value to JSON.

A few details to note:
1. Shelves are serialized as JSON arrays.
2. Boxes are serialized as JSON objects.

#### std.from_json
**type:** `(string) -> any`

Parses a JSON string to a valid Mewlix value.

A few details to note:
1. JSON arrays become shelves.
2. JSON objects become boxes.

----

### Debugging
A section for functions meant to make debugging a little easier.

The functions in this section aren't meant to be used for anything other than debugging.

#### std.log
**type:** `(any) -> nothing`

Logs a value to the debugging console, if any exists.

**Note:** Not to be confused with [std.logn](#std-logn)!

#### std.error
**type:** `box`

A box containing numeric constants for every error code, intended to make error handling a little simpler.

See the [documentation on error handling](@mewlix/language#error-handling) to learn more.
