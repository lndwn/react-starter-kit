const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const gitRevision = new GitRevisionPlugin()

const SVGRTemplate = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => {
  const TSTemplate = template.smart({ plugins: ['typescript'] })
  return TSTemplate.ast`
    import React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `
}

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg', '.png'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /^icon-.+\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@svgr/webpack',
            options: {
              template: SVGRTemplate,
              babel: false,
              icon: true,
              replaceAttrValues: { '#000': 'currentColor' },
            },
          },
        ],
      },
      {
        test: [/\.png$/, /\.svg$/],
        exclude: [/icon-.+\.svg$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['tslint-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('./public'),
    compress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  stats: {
    assets: false,
    // assetsSort: '!size',
    // builtAt: true,
    // cached: true,
    children: false,
    chunks: false,
    entrypoints: false,
    modules: false,
    version: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: path.resolve('./src/static/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      favicon: path.resolve('./src/static/assets/favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SENTRY_RELEASE: gitRevision.commithash(),
      VERSION: gitRevision.version(),
      COMMITHASH: gitRevision.commithash(),
      BRANCH: gitRevision.branch(),
      BROWSERSLIST_ENV: 'modern',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
