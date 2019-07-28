# nodejs-scdlang_xstate
An example of using Scdlang and XState in Node.js

This project use [mask](https://github.com/jakedeichert/mask) as a task runner. See the [maskfile.md](./maskfile.md) if you prefer to run this project manually.

```console
$ mask help

Jake Deichert <git@jakedeichert.com>
A CLI task runner defined by a simple markdown file

USAGE:
    mask [OPTIONS] [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -m, --maskfile <maskfile>    Path to a different maskfile you want to use

SUBCOMMANDS:
    build        here for more info
    check        Perform both type and lint checking
    generate     Generate XState machine config from Scdlang declaration file
    help         Prints this message or the help of the given subcommand(s)
    install      Install all dependencies
    start        Run project
    visualize    Generate state diagram from Scdlang declaration file
```

To enable the visualization, you need to install both:
- [state-machine-cat](https://github.com/sverweij/state-machine-cat)
- [Graphviz](https://www.graphviz.org/download/).

> Tips when devloping: use file watcher like [watchexec](https://github.com/watchexec/watchexec) or [entr](https://github.com/eradman/entr)
