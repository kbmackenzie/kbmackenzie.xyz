## 🐱 mewlix - compiler

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
| `new`     | Create a new Mewlix project in the current directory.       |
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

Usage: mewlix COMMAND

Available options:
  -h,--help                Show this help text

Available commands:
  build                    Build project
  run                      Run project
  package                  Package project's build output into a .zip archive
  new                      Create a new project in the current directory
  clean                    Clean project directory, removing build folder
```

... And a detailed `--help` message for every command available, too:

##### `new --help`

```none
Usage: mewlix new [NAME] [(-c|--console) | (-g|--graphic) | (-n|--node)]

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
                    [-a|--asset PATH] [-q|--quiet] [-p|--pretty] [--no-std] 
                    [--no-readme] [-s|--standalone]

  Build project

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -q,--quiet               Silence compiler messages
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  -s,--standalone          Ignore project file, use project defaults
  -h,--help                Show this help text
```

##### `run --help`

```none
Usage: mewlix run [FILES] [-o|--name STRING] [-e|--entrypoint KEY] 
                  [(-c|--console) | (-g|--graphic) | (-n|--node)] 
                  [-a|--asset PATH] [-q|--quiet] [-p|--pretty] [--no-std] 
                  [--no-readme] [-s|--standalone] [--port INT] [-r|--rebuild] 
                  [--no-browser]

  Run project

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -q,--quiet               Silence compiler messages
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  -s,--standalone          Ignore project file, use project defaults
  --port INT               Port number to use when running project
  -r,--rebuild             Rebuild project
  --no-browser             Don't launch web browser when running project
  -h,--help                Show this help text
```

##### `package --help`

```none
Usage: mewlix package [FILES] [-o|--name STRING] [-e|--entrypoint KEY] 
                      [(-c|--console) | (-g|--graphic) | (-n|--node)] 
                      [-a|--asset PATH] [-q|--quiet] [-p|--pretty] [--no-std] 
                      [--no-readme] [-s|--standalone]

  Package project's build output into a .zip archive

Available options:
  -o,--name STRING         Project name
  -e,--entrypoint KEY      Project entrypoint
  -c,--console             Console template
  -g,--graphic             Graphic template
  -n,--node                Node.js template
  -a,--asset PATH          Project asset
  -q,--quiet               Silence compiler messages
  -p,--pretty              Prettify compiler output
  --no-std                 Do not include std library binding when compiling
  --no-readme              Do not auto-generate a README file
  -s,--standalone          Ignore project file, use project defaults
  -h,--help                Show this help text
```

##### `clean --help`

```none
Usage: mewlix clean [-s|--standalone]

  Clean project directory, removing build folder

Available options:
  -s,--standalone          Ignore project file, use project defaults
  -h,--help                Show this help text
```

#### Compiler Options

Mewlix's compiler accepts a number of options for the `build`, `run` and `package` commands:

##### `-q` / `--quiet`

Silence compiler messages. The compiler won't log anything to `stdout` when you use this flag.

**Note:** Any error messages will still be logged to `stderr`!

##### `-p` / `--pretty`

Prettify compilation output. This makes the generated `yarnballs.js` file more readable by adding indentation and linebreaks.

##### `--no-std`

Tells the compiler not to implicitly import the `std` module when compiling yarn balls.

You can do this if you wish to manually import the `std` module with an alias to avoid possible name conflicts, as such:

```mewlix
takes std as _std
```

##### `--no-readme`
Do not auto-generate a `README.md` file when building a project.

##### `-s` / `--standalone`
Ignore the existence of a project file in the current directory and use project defaults instead.

This option is useful if you wish to build a single `.mews` file once, without creating a whole new project:

```bash
mewlix build -s "src/" --name "example project" --console
```

##### `--no-browser`
Do not automatically launch web browser when running project (only valid if using `console` or `graphic` mode).

This flag is only valid for the `run` command!

----

### Project Management

![Looping animation of a cartoon cat playing with a ball of yarn.](/mewlix-images/cat-shelf.webp)

A Mewlix project is a collection of yarn balls, resource files and compiler flags + options, all of should be in a `mewlix.yaml` project file in the root of the project's directory.

#### Project File

A `mewlix.yaml` project file is, as the extension implies, a [YAML](https://yaml.org/) file. It's meant to hold core information about your project, such as where to look for source files, what project template to use when building, and so on.

You can **create a new project** in your current directory with the `mewlix new` command, passing in the name for your new project:

```bash
mewlix new "example project"
```

When you create a new project with `mewlix new`, a `mewlix.yaml` file is added to your current directory, with the 'name' field already set to the chosen name.

The default structure of a `mewlix.yaml` project file looks like this:

```yaml
name: your-name-here
description: ''
mode: console
entrypoint: main
port: auto
sources: []
assets: []
flags: []
```

You can freely tweak all of the fields in your project file to your taste. An explanation of what every field does (and what their default values are + whether or not they're optional) can be found below.

##### Name

The name of your project. The name is used in log messages and in the auto-generated `README.md` file in your project's `build` folder.

Additionally, when using the **console** and **graphic** project templates, the page title is set to the project name. 

##### Description

A description for your project. This field is entirely optional; the description will only ever be used inside of the auto-generated `README.md` file in your project's `build` folder.

##### Mode

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

##### Entrypoint

The string key for your project's main yarn ball: the yarn ball that will be evaluated first at runtime. This field is optional, and its default key is `main`.

##### Port

The port number to use when running your project in a local server through the `mewlix run` command. The number should be an integer. Setting it to `auto` tells the compiler to use the default port for Mewlix: `8143`.

This field is optional, and its default value is `auto`. You really shouldn't change this unless you know what you're doing. 

##### Sources

A list of paths for your project's source files.

Instead of listing individual files, you can list a directory instead, like `src/`: When a directory is added to this list, the compiler will recursively look for `.mews` files in the specified directory and all of its sub-directories.

The **majority of the time**, `src/` is the only directory you need in this list.

##### Assets

A list of paths for your project's 'assets': any files you wish to include in the build output. When you build a project, all asset files are copied to the `build/` folder. If you include a directory in this list, the entire directory and all of its subdirectories are copied recursively.

**Note:** All paths added to this list should be **relative to the project's root folder**; that is, the folder where your project's `mewlix.yaml` file is. Be sure to keep all your asset files inside of your project folder. Paths to files outside of the project folder will lead to a compiler error.

##### Flags

Additional flags you can pass to the Mewlix compiler. This list can contain the following values:

| String       | Description                                                            |
|--------------|------------------------------------------------------------------------|
| `quiet`      | Silence log messages. Error messages will still be logged to `stderr`. |
| `pretty`     | Prettify compilation output.                                           |
| `no-std`     | Tell the compiler not to implicitly import the `std` yarn ball.        |
| `no-readme`  | Tell the compiler not to generate a `README.md` file.                  |
| `no-browser` | Do not automatically launch web browser when running project.          |

To learn more about each flag, read the [command-line interface documentation](#command-line-interface).

#### Building a Project

You can build your project with the `mewlix build` command:

```bash
mewlix build
```

When you run this command, the compiler will look for a `mewlix.yaml` project file in the current directory. If a project file is found. the compiler will read it and use the project data to build your project.

The build output is always placed in the `build` folder.

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

When using the `graphic` or `console` project modes, the generated `.zip` file is ready for upload to websites like [itch.io](https://itch.io/).

#### Cleaning
You can clean the build output in your project's directory with the `mewlix clean` command:

```bash
mewlix clean
```

This command is rather simple: It looks for a `mewlix.yaml` project file to ensure there's a Mewlix project in the current directory, and it removes the `build` folder from the current directory, if any is found.

#### Building Without a Project File

To make the compiler ignore the existence of a project file when building, you can pass in the `-s` or `--standalone` flag. The compiler will use the built-in defaults for a project when you do so.

You can still pass in additional compiler flags to configure your project:

```bash
mewlix build -s "src/" --name "example project" --console
```