import {
  Configuration as WebpackConfig,
  EnvironmentPlugin,
  ProvidePlugin,
} from 'webpack'
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server'
import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import { WebpackManifestPlugin as ManifestPlugin } from 'webpack-manifest-plugin'

interface Config extends WebpackConfig {
  devServer: WebpackDevServerConfig
}

const config: Config = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg', '.png'],
  },
  entry: {
    main: [path.resolve('./src/index.tsx')],
  },
  output: {
    path: path.resolve('./public'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
    sourceMapFilename: '[file].map',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
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
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg(\?.+)?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpeg|woff2|woff|otf|ttf)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('./public'),
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new ProvidePlugin({
      process: 'process/browser',
    }),
    // @ts-expect-error
    new CleanPlugin(),
    // @ts-expect-error
    new ManifestPlugin(),
    new HtmlPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: path.resolve('./src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      favicon: path.resolve('./src/assets/favicon.ico'),
    }),
    // @ts-expect-error
    new GitRevisionPlugin({
      branch: true,
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      SENTRY_RELEASE: '[git-revision-hash]',
      VERSION: '[git-revision-version]',
      COMMITHASH: '[git-revision-hash]',
      BRANCH: '[git-revision-branch]',
      BROWSERSLIST_ENV: 'development',
    }),
  ],
}

export default config
