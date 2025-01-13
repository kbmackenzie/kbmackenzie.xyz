## Language Extensions

To extend one of the [project templates that come with Mewlix](@mewlix/compiler#project-templates), all you need to do is override the template's **index.js** file.

It can be done in 3 simple steps:

1. Create an `index.js` file in your project's root.
2. Add some basic boilerplate:
    - Import the initializer function from the `./init.js` script.
    - Define your extension as a callback to the initializer function.
    - Export everything as a void function. This should be your script's default export.
3. List your `index.js` file as an **asset** in your project file's `assets` field.

A simple example of a language extension can be found below.

```javascript
/* A small language extension that makes the 'meow' expression use window.alert().
 * It will only work in web project modes (console, graphic and blank). */
import init from './init.js';
export default () => init(mewlix => {
  mewlix.setMeow(x => window.alert(x));
});
```

As you can see, the initializer function accepts the `Mewlix` object as argument. 

The `Mewlix` object also exposes a few useful API functions under `Mewlix.api`, such as:

- `Mewlix.api.box(object)`: Create a new box from a regular JavaScript object.
- `Mewlix.api.shelf(...items)`: A variadic function that creates a shelf from its arguments.
- `Mewlix.api.inject(key, object)`: An API function for creating yarn balls. The object passed as a second argument should contain all fields you want your yarn ball to export.

```javascript
/* A small language extension that adds a silly example yarn ball.
 * It will only work in web project modes (console, graphic and blank). */
import init from './init.js';
export default () => init(mewlix => {
  mewlix.api.inject('cats', {
    cats: mewlix.api.shelf('jake', 'princess', 'tiger'),
    sayMeow() { window.alert('meow meow'); },
  });
});
```
