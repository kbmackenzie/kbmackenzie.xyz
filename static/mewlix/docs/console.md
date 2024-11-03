## Console Template 🐱

The **console** project mode creates an interactive virtual console where a user can send input either by writing in the input box or uploading an UTF-8-encoded text file.

![Screenshot of the Mewlix virtual console window.](/mewlix-previews/mewlix-console.webp)

The text box at the bottom is where input should be written when the virtual console requests it. You can press the `Enter` key to send your input to the console. To insert a linebreak, press `Shift + Enter`.

The paperclip button at the bottom left corner can be used to upload a text file as input to the console instead.

The console includes a settings menu located in the upper right corner. The settings menu has options for changing:
- The color of the console's prompt (`>>`) string.
- The color of the console's error messages.
- Whether or not the input box should be highlighted when focused on, for [accessibility reasons](https://stackoverflow.com/a/9274994/19764270). You can set this to always be on by default through the `std.console` yarn ball's `input_focus` function.

#### `meow`
When using the `console` project mode, the `meow` expression has special behavior: It writes a new line to the console. It functions the same as `console.write`!

----

### The `std.console` Yarn Ball
The `std.console` yarn ball is an extension of the standard library that's included when you build your project with the `console` project mode. When imported without an alias, its default name is `console`.

It includes a number of functions for writing to the console and otherwise manipulating the console window.

A [curried](https://en.wikipedia.org/wiki/Currying) variant of the `std.console` yarn ball is available, as explained [here](@mewlix/functional-patterns#std-console-curry).

#### console.run

**type:** `((string) -> any, (() -> any)?) -> nothing`

Begins a *Read -> Eval -> Print* loop:
- The console asks user for input.
- When input is received, it's passed as argument to a callback function.
- The callback function's return value is printed to the screen.
- The cycle repeats.

This function is the recommended way of interacting with console input.

It expects the following arguments:
1. A function accepting a string as input and returning a value to be printed to the console. Input read from the user will be passed as argument to this function.
2. An optional function returning a value to be printed just before the console asks the user for input.

#### console.clear

**type:** `() -> nothing`

Clear the console.

#### console.name

**type:** `(string) -> nothing`

Change the project name displayed at the top of the console.

#### console.input_focus

**type:** `(boolean) -> nothing`

Toggle the **"Focus on input"** option in the virtual console's settings on and off.

This option makes the input box change color when focused on. This is an [accessibility feature](https://stackoverflow.com/a/9274994/19764270).

**Note:** A user can always enable or disable this in the settings menu, located in the upper right corner.

#### console.set_color

**type:** `(string) -> nothing`

Set the color of the virtual console's (`>>`) symbol.

This function expects a valid hex code as argument.

**Note:** A user can still change this color through the settings menu, located in the upper right corner.

#### console.set_error_color
**type:** `(string) -> nothing`

Set the color of the virtual console's error messages.

This function expects a valid hex code as argument.

**Note:** A user can still change this color through the settings menu, located in the upper right corner.

#### console.accepted_files

**type:** `([string]) -> nothing`

Defines what file extensions should be accepted by the console's paperclip button.

This function expects a shelf of strings as argument. Each string should be a file extension.

```mewlix
-- Accept only *.txt and *.md files:
[".txt", ".md"] |> console.accepted_files
```

#### console.write_file

**type:** `(string?, string) -> nothing`

Creates a text file from a string, and adds a download button for it in the console.

This function expects the following arguments:
1. The filename.
2. The contents for the file.

The first argument is optional; you can pass `nothing` to let the virtual console auto-generate a name.
