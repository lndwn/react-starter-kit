# React, TypeScript, Babel, and Webpack Scaffold

A project scaffold for React apps including:

- React with HMR
- Styled Components and a typed theme
- Babel for transpiling new JS features
- TypeScript to stop writing silly bugs
- Webpack for bundling
- Jest for tests
- Prettier for code formatting
- TSLint for linting

**This is still a work-in-progress and may still include some configuration problems.**

## Getting Started

1. Install `brew`

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

1. Install `node` (includes `npm`) and `git`

   ```bash
   brew install node git
   ```

1. Grab this repository

   ```bash
   git clone --bare git@github.com:lndwn/rtbw-scaf.git <dirname>
   ```

1. Install dependencies

   ```bash
   cd <dirname> && npm i
   ```

1. Start the development server

   ```bash
   npm start
   ```

## Testing

```bash
npm run test
```

Testing has been setup with `jest`, `ts-jest`, and `react-testing-library` (plus a few other helpers).

## Linting

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
