# Task for this example

## start
> Run project

```sh
rm --recursive --force dist/ types/ src/fsm/*.ts

mask generate 'src/*.scl'

mask build && \
node dist/index.js
```

### start viz
> Run project and generate the state diagram

```sh
mask start
mask visualize 'src/*.scl'
```

## generate (files)
> Generate XState machine config from Scdlang declaration file

```sh
for file in $files; do
  filestem=`basename $file .scl`
  scrap generate src/$filestem.scl --format xstate --as typescript > src/fsm/$filestem.ts
  scrap generate src/$filestem.scl --format xstate --as javascript >> src/fsm/$filestem.ts
done
```

## visualize (files)
> Generate state diagram from Scdlang declaration file

```sh
for file in $files; do
  filestem=`basename $file .scl`
  scrap generate src/$filestem.scl --format graph --as png --output src/fsm/$filestem.png
done
```

## build
> Build sources into JavaScript
bas
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
npx pnpm install --global state-machine-cat
```
