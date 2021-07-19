module.exports = {
  ignore: ['/core-js/'],
  sourceType: 'unambiguous',
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        // debug: true,
        useBuiltIns: 'usage',
        corejs: '3.15',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    '@babel/plugin-transform-typescript',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'babel-plugin-styled-components',
    'babel-plugin-annotate-pure-calls',
    'babel-plugin-dev-expression',
  ],
}
