const isDevelopment = process.env.NODE_ENV === 'development'

const presetEnvOptions = {
  browserslistEnv: process.env.NODE_ENV,
  bugfixes: true,
  debug: isDevelopment || process.env.NODE_ENV === 'test',
}

module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/preset-env', presetEnvOptions],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'babel-plugin-styled-components',
    'babel-plugin-annotate-pure-calls',
    'babel-plugin-dev-expression',
    // isDevelopment && 'react-refresh/babel',
  ].filter(Boolean),
}
