HenHen is a build tool for CHICKEN Scheme, designed to work alongside `chicken-install`. It can:

- Install dependencies in an **isolated virtual environment**, on a *per-project* basis. No more system-wide installs.
- Manage interdependent local eggs seamlessly, building them in order.
- Fetch and install dependencies from **anywhere** by specifying a [git][2] repository URL for any dependency that isn't in the [official egg index][1].

It creates an isolated egg repository for each project inside a `.henhen` folder.

With virtual environments, you can manage your dependencies across projects more easily and experiment with eggs without polluting your global CHICKEN installation. If anything ever goes wrong along the way, all you need to do to start fresh with a clean slate is run `henhen clean --purge`.

It was created to get around some of the behavior of `chicken-install`, namely packages (eggs) **always** being installed globally. [Learn more here][3].

[1]: http://wiki.call-cc.org/releasing-your-egg#publishing-your-egg
[2]: https://git-scm.com/
[3]: https://github.com/kbmackenzie/henhen/blob/main/README.md#philosophy
