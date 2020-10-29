import webpack from 'webpack'
import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const gitRevision = new GitRevisionPlugin()

const isDevelopment = process.env.NODE_ENV !== 'production'

export default {
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
    filename: '[name].[hash].js',
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
    writeToDisk: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  stats: {
    assets: false,
    children: false,
    modules: false,
  },
  plugins: [
    new CleanPlugin(),
    // isDevelopment && new ReactRefreshPlugin(),
    new ManifestPlugin(),
    new HtmlPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: path.resolve('./src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      favicon: path.resolve('./src/assets/favicon.ico'),
    }),
    gitRevision,
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SENTRY_RELEASE: gitRevision.commithash(),
      VERSION: gitRevision.version(),
      COMMITHASH: gitRevision.commithash(),
      BRANCH: gitRevision.branch(),
      BROWSERSLIST_ENV: 'development',
    }),
  ].filter(Boolean),
}
