import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import { SVGRTemplate } from './svgr.config'

const gitRevision = new GitRevisionPlugin()

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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /icon-.+\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@svgr/webpack',
            options: {
              template: SVGRTemplate,
              babel: false,
              icon: true,
              replaceAttrValues: { '#000': 'currentColor' },
              prettierConfig: './prettier.config.js',
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
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'React, TypeScript, Webpack Scaffold',
      template: path.resolve('./src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      favicon: path.resolve('./src/assets/favicon.ico'),
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
  ],
}
