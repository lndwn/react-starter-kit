const __TEST__ = process.env.NODE_ENV === 'test'

module.exports = function (api) {
  api.cache(true)

  const testPresets = [
    ['@babel/preset-env', { modules: 'commonjs' }],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ]

  const appPresets = [
    [
      '@babel/preset-env',
      {
        // debug: true,
        useBuiltIns: 'usage',
        corejs: '3.15',
        modules: false,
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ]

  const presets = __TEST__ ? testPresets : appPresets

  const plugins = [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    '@babel/plugin-transform-typescript',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'babel-plugin-styled-components',
    'babel-plugin-annotate-pure-calls',
    'babel-plugin-dev-expression',
  ]

  return {
    ignore: ['/core-js/'],
    sourceType: 'unambiguous',
    presets,
    plugins,
  }
}
