# Task for this example

## start
> Run project

<!--TODO: waiting for https://github.com/jakedeichert/mask/issues/24 to resolve-->
```sh
npx tsc --build && \
node dist/index.js
```

## compile
> Compile sources into JavaScript

```sh
npx tsc --project . --listEmittedFiles
```

## build
> Build sources into JavaScript

see [here](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript) for more info

```sh
npx tsc --build
```

### build clean
> Clean build caches

```sh
npx tsc --build --clean
```

#### build clean dry
> Perform dry run on build clean process

```sh
npx tsc --build --clean --dry
```

### build dry
> Perform dry run on build process

```sh
npx tsc --build --dry
```

## check
> Perform both type and lint checking

```sh
npx tsc --project . --noemit
npx tslint --project .
```

### check fix
> Attempt to fix error check

```sh
npx tslint --project . --fix
```

## install
> Install all dependencies

```sh
cargo install s-crap
npx pnpm install
```
