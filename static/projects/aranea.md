Aranea is a **tiny, minimalist** shell preprocessor written in POSIX-compliant **Awk**. It's a small, portable, self-contained script.

It's inspired by the C preprocessor, and its output can be used with any [POSIX-compliant shell][3]. It should work out-of-the-box in most Linux distributions. It can...

- **Embed data files** into shell scripts with the **`#data` directive**, helping make shell scripts more self-contained.
- **Include shell scripts** with the **`#include` directive**, making script development more modular while still generating only a single file at the end. Included files **can also contain preprocessor directives**, which are resolved **recursively**.
- **Conditional compilation**: Define flags with `#define` and check for their existence with `#ifdef` and `#ifndef`. This can be used to create [include guards][2], for example.

It also has extra features when used with [GNU Awk][1], as explained [here][4].

Additionally, Aranea **can be used with other languages**—so long as you only use language-agnostic directives. See [this section of the documentation][5] to learn more.

[1]: https://www.gnu.org/software/gawk/
[2]: https://en.wikipedia.org/wiki/Include_guard
[3]: https://wiki.archlinux.org/title/Command-line_shell#POSIX_compliant
[4]: https://github.com/kbmackenzie/aranea/blob/main/docs/gawk-extras.md
[5]: https://github.com/kbmackenzie/aranea/blob/main/docs/usage-with-other-languages.md
