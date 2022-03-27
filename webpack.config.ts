import {
  Configuration as WebpackConfig,
  EnvironmentPlugin,
  ProvidePlugin,
} from 'webpack'
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server'
import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import { GitRevisionPlugin } from 'git-revision-webpack-plugin'
import packageConfig from './package.json'

const gitRevisionPlugin = new GitRevisionPlugin({ branch: true })

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
    app: [path.resolve('./src/index.tsx')],
  },
  output: {
    path: path.resolve('./public'),
    publicPath: '/',
    filename: '[id].[contenthash].js',
    chunkFilename: '[id].[contenthash].js',
    sourceMapFilename: '[file].map',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    all: false,
    assets: true,
    modules: true,
    chunks: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
        },
      },
      {
        enforce: 'pre',
        test: /\.(tsx?|js?x)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpeg|woff2|woff|otf|ttf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
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
    new HtmlPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: path.resolve('./src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      favicon: path.resolve('./src/assets/favicon.ico'),
    }),
    gitRevisionPlugin,
    new EnvironmentPlugin({
      SENTRY_RELEASE: gitRevisionPlugin.commithash(),
      VERSION: gitRevisionPlugin.version(),
      PACKAGE_VERSION: packageConfig.version,
      COMMITHASH: gitRevisionPlugin.commithash(),
      BRANCH: gitRevisionPlugin.branch(),
      LAST_COMMIT: gitRevisionPlugin.lastcommitdatetime(),
      BROWSERSLIST_ENV: 'development',
    }),
  ],
}

export default config
