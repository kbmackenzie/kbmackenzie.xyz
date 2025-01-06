## The Mewlix Compiler 🐱

Mewlix's compiler is written in pure Haskell, and the source code is fully available [here](https://github.com/kbmackenzie/mewlix).

The compiler is a self-contained binary executable. Pre-compiled binaries for Linux and Windows can be found on the Github page. \_(:3」∠)\_

### Table of Contents

1. [Command-Line Interface](#command-line-interface)
2. [Project Management](#project-management)
  1. [Building a Project](#building-a-project)
  2. [Running a Project](#running-a-project)
  3. [Packaging a Project](#packaging-a-project)
  4. [Cleaning](#cleaning)
  5. [Building Without A Project File](#building-without-a-project-file)

----

### Command-Line Interface

Mewlix's compiler comes with a helpful command-line interface, with the following commands available:

| Command   | Description                                                 |
|-----------|-------------------------------------------------------------|
| `init`    | Create a new project in the current directory.              |
| `build`   | Build project.                                              |
| `run`     | Run project. Its behavior differs based on project mode.    |
| `package` | Package project's build output into a `.zip` file.          |
| `clean`   | Clean the project directory.                                |

Read the section on [project management](#project-management) to know more about each of these compiler options.

#### `.mews` files

A Mewlix source file should be an **UTF-8** text file and should preferably have the `.mews` extension!

The compiler will reject any files that aren't encoded in UTF-8.

#### `--help` messages

The Mewlix compiler includes a detailed `--help` message explaining its commands:

```none
mewlix - a compiler for a cat-oriented programming language

Usage: mewlix COMMAND [-q|--quiet] [-s|--standalone]

Available options:
  -q,--quiet               Silence compiler messages
  -s,--standalone          Ignore project file, use project defaults
  -h,--help                Show this help text

Available commands:
  init                     Create a new project in the current directory
  build                    Build project
  run                      Run project
  package                  Package project's build output into a .zip archive
  clean                    Clean project directory, removing build folder
```

... And a detailed `--help` message for every command available, too:

##### `init --help`

```none
Usage: mewlix init [NAME] [(-c|--console) | (-g|--graphic) | (-n|--node)]

  Create a new project in the current directory

Available options:
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -h,--help                Show this help text
```

##### `build --help`

```none
Usage: mewlix build [FILES] [-o|--name STRING] [-e|--entrypoint KEY] 
                    [(-c|--console) | (-g|--graphic) | (-n|--node)] 
                    [-a|--asset PATH] [-p|--pretty] [--no-std] [--no-readme]

  Build project

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  -h,--help                Show this help text
```

##### `run --help`

```none
Usage: mewlix run [FILES] [-o|--name STRING] [-e|--entrypoint KEY] 
                  [(-c|--console) | (-g|--graphic) | (-n|--node)] 
                  [-a|--asset PATH] [-p|--pretty] [--no-std] [--no-readme] 
                  [--port INT] [-r|--rebuild] [--no-browser]

  Run project

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  --port INT               Port number to use when running project
  -r,--rebuild             Rebuild project
  --no-browser             Don't launch web browser when running project
  -h,--help                Show this help text
```

##### `package --help`

```none
Usage: mewlix package [FILES] [-o|--name STRING] [-e|--entrypoint KEY] 
                      [(-c|--console) | (-g|--graphic) | (-n|--node)] 
                      [-a|--asset PATH] [-p|--pretty] [--no-std] [--no-readme]

  Package project's build output into a .zip archive

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  -h,--help                Show this help text
```

##### `clean --help`

```none
Usage: mewlix clean 

  Clean project directory, removing build folder

Available options:
  -h,--help                Show this help text
```

#### Compiler Options

A few options accepted by the Mewlix compiler are:

##### `-q` / `--quiet`

Silence compiler messages. The compiler won't log anything to `stdout` when you use this flag.

**Note:** Any error messages will still be logged to `stderr`!

##### `-p` / `--pretty`

Prettify compiler output. This makes the generated `yarnballs.js` file more readable by adding indentation and linebreaks.

##### `--no-std`

Tells the compiler not to implicitly import the `std` module when compiling yarn balls.

You can do this if you wish to manually import the `std` module with an alias to avoid possible name conflicts, as such:

```mewlix
takes std as _std
```

##### `-s` / `--standalone`

Ignore the existence of a project file in the current directory and use project defaults instead.

This option is useful if you wish to build a single `.mews` file once, without creating a whole new project:

```bash
mewlix build -s "main.mews" --console
```

##### `--no-browser`

Do not automatically launch web browser when running project (only valid if using `console` or `graphic` mode).

This flag is only valid for the `run` command, for obvious reasons.

##### `--no-readme`

Do not auto-generate a `README.md` file in the output folder when building a project.

----

### Project Management

![Looping animation of a cartoon cat playing with a ball of yarn.](/mewlix-images/cat-shelf.webp)

A Mewlix project is a collection of yarn balls, resource files and compiler flags + options. All of this should be specified in a `mewlix.yaml` project configuration file in the project's root.

#### Project File

A `mewlix.yaml` project file is, as the extension implies, a [YAML][1] file. It's meant to hold core information about your project, such as how to look for source files, what project template to use building, and so on.

You can **create a new project** in your current directory with the `mewlix init` command, passing in the name for your new project:

```bash
mewlix init "example project"
```

When you create a new project with `mewlix init`, a `mewlix.yaml` file is added to your current directory, with the 'name' field already set to the chosen name.

The default structure of a `mewlix.yaml` project file looks like this:

```yaml
name: your-name-here
description: ''
mode: console
entrypoint: main
port: auto
source-files: []
assets: []
flags: []
```

You can freely tweak all of the fields in your project file to your taste. An explanation of what every field does (and what their default values are + whether or not they're optional) can be found below.

##### `name`

The name of your project. The name is used in log messages and in the auto-generated `README.md` file in your project's build folder.

Additionally, when using the **console** and **graphic** project templates, the project name becomes the title for the generated page.

```yaml
name: example
```

##### `mode`

Your project's `mode` determines what template the compiler will use when building it.

There are **three** available project modes:

| Mode    | Description                                                  |
|---------|--------------------------------------------------------------|
| console | A virtual console.                                           |
| graphic | A little game framework for pixel games.                     |
| node    | No HTML/CSS; bundle scripts for use in Node.js.              |

To learn more, read the documentation page for each project mode:
- [Console template](@mewlix/console)
- [Graphic template](@mewlix/graphic)

```yaml
mode: graphic
```

##### `source-files`

A list of patterns for finding source files. They work similarly to [POSIX glob patterns][2]:

- `*.mews` will match all `.mews` files in the current directory (but not in subdirectories).
- `**/*.mews` will match all `.mews` files in the current directory **and** in subdirectories, recursively.
- `example.mews` will match only the script `example.mews`, and nothing else.

To match all `.mews` files inside a `src` directory, use `src/**/*.mews`. That's **all** you need most of the time!

```yaml
source-files:
- src/**/*.mews
```

##### `assets`

A list of patterns for finding asset files. This field works like [source-files](#source-files)!

Asset files are different from source files in that they're copied directly to the build folder, unchanged and untouched. Images, audio and static text files should be listed in this field.

When asset files are copied, the directory structure relative to the project root is kept.

```yaml
assets:
- assets/**
```

##### `entrypoint`

The string key for your project's main yarn ball: the yarn ball that will be evaluated first at runtime. This field is optional, and its default key is `main`.

```yaml
entrypoint: main
```

##### `port`

The port number to use when running your project in a local server through the `mewlix run` command. The number should be an integer. Setting it to `auto` tells the compiler to use the default port for Mewlix: `8143`.

This field is optional, and its default value is `auto`. You really shouldn't change this unless you know what you're doing. 

```yaml
port: auto
```

##### `flags`

Additional flags you can pass to the Mewlix compiler. This list can contain the following values:

| String       | Description                                                            |
|--------------|------------------------------------------------------------------------|
| `quiet`      | Silence log messages. Error messages will still be logged to `stderr`. |
| `pretty`     | Prettify compilation output.                                           |
| `no-std`     | Tell the compiler not to implicitly import the `std` yarn ball.        |
| `no-readme`  | Tell the compiler not to generate a `README.md` file.                  |
| `no-browser` | Do not automatically launch web browser when running project.          |

To learn more about each flag, read the [command-line interface documentation](#command-line-interface).

```yaml
flags:
- pretty
```

##### `description`

A description for your project. This field is entirely optional.

The description is used in a few places:

- The auto-generated README file in your build folder.
- The **page description** in the generated webpage (when building in `graphic` or `console` mode).

```yaml
description: I like cats!
```

#### Building a Project

You can build your project with the `mewlix build` command:

```bash
mewlix build
```

When you run this command, the compiler will look for a `mewlix.yaml` project file in the current directory. If a project file is found. the compiler will read it and build your project.

The build output goes in the `.mewlix/build` directory in your project's root.

#### Running a Project

You can run your project with the `mewlix run` command:

```bash
mewlix run
```

Its behavior differs based on project mode:

| Mode    | Description                                                  |
|---------|--------------------------------------------------------------|
| console | Runs the project in a local HTTP server.                     |
| graphic | Runs the project in a local HTTP server.                     |
| node    | Runs the project using Node.js, if available.                |

When you run this command, the compiler will look for a project file, read it, build the project if it hasn't yet been built, and then run the built project.

##### HTTP Server

When running projects using the `console` or `graphic` project mode, the compiler will start a local HTTP server. This server is very simple and meant purely for testing.

You can hit `Ctrl + C` on your terminal to stop the server when you're done.

> "Why do I need a local HTTP server? Can't I just run the project using the `file:///` scheme?"

No, you cannot. I explain why in the [FAQ](@mewlix/faq). To simplify: Modern browsers heavily limit what code can be run when a page is using the `file:///` scheme.

#### Packaging a Project

You can **package** your project into a neat `.zip` archive with the `mewlix package` command:

```bash
mewlix package
```

When you run this command, the compiler will look for a project file, read it, build the project if it hasn't yet been built, and then package the build output into a `.zip` archive with the same name as the project.

When using the `graphic` or `console` project modes, the generated `.zip` file is ready for upload to websites like [itch.io][3].

#### Cleaning

The `clean` command is self-explanatory: It cleans the project directory, removing all build files.

```bash
mewlix clean
```

#### Building Without a Project File

To make the compiler ignore the existence of a project file when building, you can pass in the `-s` or `--standalone` flag. The compiler will use the built-in defaults for a project when you do so.

You can still pass in additional compiler flags to configure your project:

```bash
mewlix build -s "main.mews" --name "example project" --console
```

[1]: https://yaml.org/
[2]: https://man7.org/linux/man-pages/man7/glob.7.html
[3]: https://itch.io/
