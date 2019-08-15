const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: true,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: 'src/static/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // publicPath: '/', // '/' is default, i.e. localhost:3000/bundle.js
    contentBase: './dist', // for static files, default is cwd
    hot: true,
    port: 3000,
    compress: true,
    progress: true,
    historyApiFallback: true,
  },
  stats: {
    assets: false,
    children: false,
    chunks: false,
    entrypoints: false,
    modules: false,
    version: false,
  },
}
