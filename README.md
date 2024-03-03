# Pouchdb type error showcase

This repository contains a minimal reproduction to showcase pouchdb type error when creating a new database instance. This repository is linked with this issue: https://github.com/pouchdb/pouchdb/issues/8869

## Using this example
1. Install the dependencies `pnpm install`
2. Run the app `pnpm run dev`
3. Open the page in the browser and see that the page is blank
4. Open the dev tools console and see the error:

```
Uncaught TypeError: import_events.default is not a constructor
    <anonymous> index-browser.es.js:457
index-browser.es.js:457
```

## Recreating the environment
These steps explain how I created this repository

1. Setup a new vite app
    1. Run the command `pnpm create vite pouchdb-test`
    2. select `React` option
    3. select `TypeScript + SWC`
2. Add the dependencies:
    1. Install pouchdb with the command: `pnpm i pouchdb`
    2. Install pouchdb types with the command: `pnpm i @types/pouchdb -D`
3. Declare `global` variable by adding the following lines to `vite.config.ts`:

```json
define: {
  global: {}
}
```
