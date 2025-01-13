## Graphic Mode 🐱

![Animated GIF of a little Snake game clone written in Mewlix.](/mewlix-previews/mewlix-snake.webp)

The **graphic** project template is designed for creating **small pixel games**. It includes:
1. A **128 x 128** pixel canvas.
2. A set of functions for listening to mouse and keyboard input.
3. A set of functions for drawing sprites, writing text and playing audio.

The best way to learn how to use the graphic project mode is to look at the [example project showcase](#)!

#### `meow`

When using the `graphic` project mode, the `meow` expressions gains a special definition: It writes text to the canvas. The text options for the `meow` statement—such as font, color and alignment—can be set with the `meow_options()` function from `std.graphic`.

#### Pixel Canvas

The pixel canvas' dimensions are **128 x 128 pixels**. In practice, the HTML5 canvas used is much bigger for the sake of ensuring image quality, but you shouldn't worry about that.

----

### The `std.graphic` Yarn Ball

The `std.graphic` yarn ball is an extension of the standard library that's included when you build your project with the `graphic` project mode. When imported without an alias, its default name is `graphic`.

A [curried](https://en.wikipedia.org/wiki/Currying) variant of the `std.graphic` yarn ball is available, as explained [here](@mewlix/functional-patterns#std-graphic-curry).

#### Table of Contents

1. [Core](#core)
2. [Drawing](#drawing)
3. [Writing Text](#writing-text)
4. [Keyboard Input](#keyboard-input)
5. [Mouse Input](#mouse-input)
6. [Playing Audio](#playing-audio)
7. [Utility](#utility)

----

### Core
A set of core functions for loading resources and initializing the canvas game loop.

#### graphic.init

**type:** `((number?) -> nothing) -> nothing`

Initialize the canvas, passing your game loop function as argument.

The game loop function will be called every frame. The canvas is **always cleared** every frame before the game loop function is called.

Additionally, the game loop function can accept an optional numeric argument: the **delta time** (the amount of time elapsed since the last frame), in seconds. See [graphic.delta](#graphic-delta).

In the event of an exception inside of the game loop, an error screen will be shown.

#### graphic.init_

**type:** `((number?) -> nothing) -> nothing`

Like [graphic.init](#graphic-init), but calls [graphic.thumbnail](#graphic-thumbnail) first.

It passes the same game loop function to both.

#### graphic.delta

**type:** `() -> number`

Get the *'delta time'*: the amount of time that has elapsed since the previous frame, in seconds.

This function should only ever be called inside the game loop.

Additionally, the delta time value will always be 0 in the first frame, as there's no *'previous'* frame. It will also be 0 if `init()` hasn't been called yet.

#### graphic.load

**type:** `(string, string, box?) -> nothing`

Load a resource and bind it to a string key. It accepts the following arguments:
1. A string key to bind the resource to.
2. The path to the resource file you wish to load.
3. An optional box parameter only required when cropping image resources.

File paths should be relative to your project's *root*—that is, the folder where your project's `mewlix.yaml` file is located. Be sure you've also [listed all resource files as **assets** in your project file](@mewlix/compiler#assets)!

The resource type is determined by the file extension:
- Image files (`.png`, `.jpg`, `.bmp`) will load a sprite.
- Audio files (`.mp3`, `.wav`, `.ogg`) will load a sound.
- Font files (`.ttf`, `.otf`, `.woff`) will load a new font.

When loading images, the third argument can be used to *'crop'* the image, loading only a portion of it specified by a [Rectangle](#graphic-rectangle) box. It's **entirely optional**, and when omitted, the *entire image* is loaded.

```mewlix
from std.graphic takes Rectangle

-- Load a background sprite.
graphic.load("player", "res/player.png")

-- Load a 16 x 16 square from a spritesheet.
graphic.load("crop_example", "res/spritesheet.png", new Rectangle(0, 0, 16, 16))
```

**Note:** This function enqueues resources to be loaded, but resources are only truly loaded when **graphic.init** is called.

#### graphic.thumbnail

**type:** `(() -> nothing) -> nothing`

Accepts a callback function for drawing a *'thumbnail'* for the game while it's waiting for permission to start.

The thumbnail will be shown at the start, behind the *'click to start'* graphic.

#### graphic.spritesheet

**type:** `(string, [box]) -> nothing`

Load a spritesheet and create multiple sprites from it. This function accepts the following arguments:
1. The path to a spritesheet image.
2. A shelf of boxes, where each box should have the following fields:
    - **key**:  A string defining a key for the sprite.
    - **rect**: A [Rectangle](#graphic-rectangle) box defining the region of the spritesheet to crop.

This function loads the spritesheet image into memory and iterates through the shelf, creating a new sprite for each box in the shelf.

```mewlix
from std.graphic takes spritesheet, Rectangle

spritesheet("res/spritesheet.png", [
  📦 [ key: "example-frame-0", rect: new Rectangle(0,  0, 16, 16) ],
  📦 [ key: "example-frame-1", rect: new Rectangle(16, 0, 16, 16) ],
])
```

**Note:** This function enqueues resources to be loaded, but resources are only truly loaded when **graphic.init** is called.

----

### Drawing
A set of functions for drawing sprites and rectangles to the canvas.

#### graphic.draw

**type:** `(string, number?, number?) -> nothing`

Draw a sprite on the screen at a specified (x, y) position. This function expects the following arguments:
1. A string key associated with an already-loaded sprite.
2. The x coordinate to draw the sprite in. When omitted, it defaults to 0.
3. The y coordinate to draw the sprite in. When omitted, it defaults to 0.

#### graphic.measure

**type:** `(string) -> box`

Asks the dimensions of a sprite.

THis function expects the following arguments:
1. A string key associated with an already-loaded sprite.

It returns a box with the following properties:
1. **width**:  The sprite's width.
2. **height**: The sprite's height.

#### graphic.rect

**type:** `(string, Color) -> nothing`

**type:** `(string, string) -> nothing`

Draw a rectangle on the screen, with its position and dimensions specified by a [Rectangle](#graphic-rectangle).

This function expects the following arguments:
1. A [Rectangle](#graphic-rectangle) box, defining the rectangle's position and dimensions.
2. A [Color](#graphic-color) box or a hex color code string, defining the rectangle's color.

#### graphic.paint

**type:** `(Color) -> nothing`

**type:** `(string) -> nothing`

Fill the canvas with a solid color. This function expects the following arguments:
1. A [Color](#graphic-color) box or a hex color code string, defining the color to fill the canvas with.

**Note:** While you can use this function to manually clear the canvas, you don't *need* to*, as the canvas is already cleared every frame. This function is still useful for setting a background color, however!

----

### Writing Text
A set of functions for writing text to the canvas.

#### graphic.write

**type:** `(any, number?, number?, box?) -> nothing`

Draw text on the screen at a specified (x, y) position. This function expects the following arguments:
1. A value of any type, which will be converted to a string and then drawn on the canvas.
2. The x coordinate to draw the text in. When omitted, it defaults to 0.
3. The y coordinate to draw the text in. When omitted, it defaults to 0.
4. An optional box holding a number of text options.

The optional box parameter can contain any of these fields:
- **font**: The string key for an already-loaded font to use.
- **size**: A numeric value for the font size, in pixels.
- **color**: A [Color](#graphic-color) box or a string with a hex color code.
You can omit any of the options above from the box, and a default value will be used for the omitted field.

#### graphic.measure_text

**type:** `(any, box?) -> box`

Measure the width and height of text in the canvas, in pixels. This function doesn't *draw* any text; it only measures how much space the text would take up if it *was* drawn.

This function expects the following arguments:
1. A value of any type, which will be converted to a string and used for measuring.
2. An optional box holding a number of text options.

The optional box parameter follows the same rules as the one in [graphic.write](#graphic-write).

This function returns a box with the following properties:
1. **width**: The text width, in pixels.
2. **height**: The text height, in pixels.

#### graphic.load_text

**type:** `(string) -> nothing`

Load text from a file and store it as a **text asset** (available inside the game loop).

This function expects the following arguments:
1. **path**: Path to a text file.

**Note:** Text assets are **only read once**—when all assets are loaded, before the game loop runs.

#### graphic.get_text

**type:** `(string) -> string`

Get **text asset**. This function should only be called inside the game loop.

This function expects the following arguments:
1. **path**: The filepath used when loading the text asset with [graphic.load_asset](#graphic-load_asset).

It returns the contents of the text file read.

#### graphic.meow_options

**type:** `(box) -> nothing`

Set text options to be used when writing text with the `meow` expression.

The box parameter expected by this function follows the same rules as the one in [graphic.write](#graphic-write).

Additionally, the box parameter expected by this function can also contain any of following fields:
- **x**: The x coordinate to use when drawing the text. Defaults to 0.
- **y**: The y coordinate to use when drawing the text. Defaults to 0.

----

### Keyboard Input
A set of functions for listening to keyboard input.

#### graphic.key_pressed

**type:** `(string) -> boolean`

Asks whether a key has been pressed. Triggers only once for each key press.

This function expects the following arguments:
1. A string identifying the key to listen to. For most keys in the keyboard, this is the character associated with the key: for example, for the `a` key, the identifier string would be `"a"`.

The [graphic.keys](#graphic-keys) box holds string constants for common keys with unusual string identifiers, such as the arrow keys and the space bar.

#### graphic.key_down

**type:** `(string) -> boolean`

Asks whether a key is being pressed. Triggers multiple times until the key is released.

It expects the same kind of argument as [graphic.key_pressed](#graphic-key_pressed).

#### graphic.keys

**type:** `box`

A box holding string constants for common keys with unusual string identifiers.

The included keys are:
| Property     | Description          |
|--------------|----------------------|
| `keys.space` | The space bar.       |
| `keys.enter` | The Enter key.       |
| `keys.left`  | The left arrow key.  |
| `keys.right` | The right arrow key. |
| `keys.up`    | The up arrow key.    |
| `keys.down`  | The down arrow key.  |

----

### Mouse Input
A set of functions for listening to mouse input.

#### graphic.mouse_click

**type:** `() -> boolean`

Asks whether the left mouse button has been pressed. Triggers only once for each click.

This function will *only trigger* if the cursor is **inside the canvas**.

#### graphic.mouse_down

**type:** `() -> boolean`

Asks whether the left mouse button is down. Triggers multiple times until the button is released.

This function will *only trigger* if the cursor is **inside the canvas**.

#### graphic.mouse_position

**type:** `() -> box`

Asks the mouse position relative to the canvas.

Returns a [Vector2](#graphic-vector2) clowder instance with the (x, y) coordinates for the cursor.

**Note:** The position is only updated while the cursor is inside the canvas. If the cursor leaves the canvas, the stored position will stay the same until the cursor enters the canvas again.

----

### Playing Audio
A set of functions for playing music and SFX in the game loop.

#### graphic.play_music

**type:** `(string) -> nothing`

Begin playing an already-loaded music track on loop.

This function expects the following arguments:
1. The string key for an already-loaded music track.

#### graphic.play_sfx

**type:** `(string, number?) -> nothing`

Play an already-loaded sound once in a sound channel.

This function expects the following arguments:
1. The string key for an already-loaded sound.
2. An optional numeric index for the sound channel to play it on, from **0** to **7**.

When the sound channel index isn't specified, it defaults to **0**.

A sound channel can only play one sound at a time. You can use this to make sure sounds won't overlap with each other and cause audio clipping.

As a practical example: When playing the sound of coins being collected in a simple platformer game, if two coins are picked up at the same time, you'd want to avoid the sound playing twice simultaneously and overlapping with itself, as that would definitely cause clipping. To avoid that, you can choose to always play that sound on the same sound channel.

#### graphic.volume

**type:** `(number) -> nothing`

Sets the master volume.

This function expects the following arguments:
1. A numeric value between 0 and 100.

#### graphic.music_volume

**type:** `(number) -> nothing`

Sets the music volume.

This function expects the following arguments:
1. A numeric value between 0 and 100.

#### graphic.sfx_volume

**type:** `(number) -> nothing`

Sets the SFX volume.

This function expects the following arguments:
1. A numeric value between 0 and 100.

#### graphic.stop_music

**type:** `() -> nothing`

Stops all music.

#### graphic.stop_sfx

**type:** `(number) -> nothing`

Stops a sound playing on a given channel. 

This function expects the following arguments:
1. The numeric index for the sound channel to target, from **0** to **7**.

#### graphic.stop_all_sfx

**type:** `() -> nothing`

Stops all SFX.

----

### Utility
A set of utility functions and clowders.

#### graphic.lerp

**type:** `(number, number, number) -> number`

A [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) function. It expects the following arguments:
1. A start value.
2. An end value.
3. An interpolation value between the two numbers.

#### graphic.Vector2

**clowder constructor:** `(number, number) -> Vector2`

A 2-dimensional vector clowder. Its constructor expects the following arguments:
1. A x coordinate.
2. A y coordinate.

***None*** of its methods mutate the clowder itself.

It contains the following methods:
| Method   | Type                            | Description                                                         |
|----------|---------------------------------|---------------------------------------------------------------------|
| add      | `(Vector2) -> Vector2`          | Vector addition.                                                    |
| mul      | `(Vector2) -> Vector2`          | Vector multiplication.                                              |
| dot      | `(Vector2) -> Vector2`          | [Dot product](https://en.wikipedia.org/wiki/Dot_product) operation. |
| distance | `(Vector2) -> Vector2`          | Distance between two points.                                        |
| clamp    | `(Vector2, Vector2) -> Vector2` | Clamp the Vector2's `x` and `y` coordinates.                        |

#### graphic.Rectangle

**clowder constructor:** `(number, number, number, number) -> Rectangle`

A 2-dimensional rectangle clowder. Its constructor expects the following arguments:
1. A x coordinate.
2. A y coordinate.
3. A width value, in pixels.
4. A height value, in pixels.

***None*** of its methods mutate the clowder itself.

It contains the following methods:
| Method   | Type                     | Description                                         |
|----------|--------------------------|-----------------------------------------------------|
| contains | `(Vector2) -> boolean`   | Asks whether a point is inside a Rectangle.         |
| collides | `(Rectangle) -> Vector2` | Asks whether a Rectangle is colliding with another. |

#### graphic.Color

**clowder constructor:** `(number, number, number, number?) -> box`

A clowder representing a RGBA color value. Its constructor expects the following arguments:
1. A 'red' color value, from 0 to 255.
2. A 'green' color value, from 0 to 255.
3. A 'blue' color value, from 0 to 255.
4. An optional opacity percentage value, from 0 to 100. It defaults to 100.

Many `std.graphic` functions accept Color clowder instances as arguments.

It contains the following methods:
| Method | Type           | Description                                            |
|--------|----------------|--------------------------------------------------------|
| alpha  | `() -> number` | Get the alpha byte value for the color, from 0 to 255. |
| to_hex | `() -> string` | Get the stored color represented as a hex color code.  |

#### graphic.from_hex

**type:** `(string) -> Color`

Convert a hex color code string to a [Color](#graphic-color) box.

#### graphic.PixelCanvas

**clowder constructor:** `(number, number) -> PixelCanvas`

A clowder for creating new sprites by drawing pixels on a canvas. Its constructor expects the following arguments:
1. The canvas width, in pixels.
2. The canvas height, in pixels.

It contains the following methods:
| Method    | Type                                 | Description                                           |
|-----------|--------------------------------------|-------------------------------------------------------|
| fill      | `(Color) -> nothing`                 | Fill the canvas with a given color.                   |
| set_pixel | `(number, number, Color) -> nothing` | Set color of pixel at position (x, y).                |
| get_pixel | `(number, number) -> Color`          | Get color of pixel at position (x, y) as a Color box. |
| to_sprite | `(string) -> nothing`                | Create a new sprite associated with a string key.     |

**Note:** These methods *also* accept strings as color values.

#### graphic.page_background

**type:** `(Color) -> nothing`

**type:** `(string) -> nothing`

Set the background color for the body of the page—as in, the page itself, not the canvas.

To paint the canvas' background instead, use [graphic.paint](#graphic-paint)
