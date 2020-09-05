const presets = [
  '@babel/preset-react',
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      targets: process.env.NODE_ENV,
    },
  ],
]
const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-transform-typescript',
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  'babel-plugin-styled-components',
]

module.exports = { presets, plugins }
