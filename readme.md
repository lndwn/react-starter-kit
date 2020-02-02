# React, TypeScript, Babel, and Webpack Scaffold

A project scaffold for React apps, including:

- React with Hot Module Replacement  
  This facilitates quick interation on your app by instantly reloading just the sections of your code that has changed.
- Styled Components  
  Styled Components is a CSS-in-JS library that allows you to easily style your React components with valid CSS.
- Babel  
  Babel allows using the latest JavaScript (and TypeScript) features by rewriting your code to make it compatible with older browsers.
- TypeScript  
  TypeScript is a superset of JavaScript, providing useful features for defining how your app should work. It allows you to strictly define function parameters and what they return, and providing feedback in your development environment (e.g. VS Code).
- Webpack for bundling  
  Webpack begins with your program's entry file, and crawls through building a tree of all the other code you use from there. It then processes it based on the provided configuration, ultimately leading to the JavaScript bundle and assets output into a dedicated directory.
- Jest  
  Jest will run files named like `my-component.**test**.tsx` and provide the results on the command line.
- Prettier  
  Prettier automatically formats your code so you don't have to!
- TSLint  
  TSLint will give you feedback in the IDE and throw errors during build if your code has errors.

**This is still a work-in-progress and may still include some configuration problems.**

## Getting Started

1. Install `brew`  
    Brew is a package manager for macOS that makes it super easy to install development tools.

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

1. Install `node` (includes `npm` and `npx`) and `git`  
    Node.js is a headless JavaScript runtime, allowing you to run JavaScript from the command line. NPM is a package manager for Node. Git is a version control system.

   ```bash
   brew install node git
   ```

1. Download this repository as a new project  
    `npx` allows you to execute a remote `npm` package, without having to install it locally on your machine.

   ```bash
   npx create-from-repo \
      -b develop \
      -s \
      git@github.com:lndwn/rtbw-scaf.git \
      <dirname> \
   && cd <dirname> \
   && git init
   ```

1. Install dependencies  
    The `npm i[nstall]` command will look for the nearest `package.json` file, and install all of the libraries listed in `dependecies` and `devDependencies`.

   ```bash
   npm i
   ```

1. Start the development server  
    The `npm start` command will look for the nearest `package.json` file, and run the command named `start` in the `scripts` object.

   ```bash
   npm start
   ```

## Testing

Tests are (usually) simple programs that perform various things on your code to ensure they are working as expected.

```bash
npm run test
```

Testing has been setup with `jest`, `ts-jest`, and `react-testing-library` (plus a few other helpers).

## Linting

A Linter will analyse your code and identify common mistakes in syntax, or code style, based on a set of rules provided.

```bash
npm run lint
```

Linting has been setup with `tslint`. The `lint` command uses the TypeScript compiler to check types first, then runs TSLint. Running both may be unneccessary, but better to be safe than sorry.

## Building

```bash
npm run build
```

Bundling is setup to use Webpack, and a few helpful plugins, including:

- GitRevisionPlugin: make some variables available about the current repository
- Webpack Env Plugin: some default environment variables are configured in `webpack.config.js`, and will be overrided if provided from the command line
