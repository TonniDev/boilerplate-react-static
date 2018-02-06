const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

require('dotenv').config();

const ss = require('./src/ss_routes');
const conf = require('./private/webpack/dev');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: conf,
  watch: true,
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([
      {
        from: './node_modules/ComponentsOi/dist/assets/fonts/*',
        to: `${process.env.ROOT_PATH}assets/fonts/[name].[ext]`
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}assets/`
      }
    ]),
    new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: process.env.PORT || 8080,
      server: {
        baseDir: ['dist']
      }
    }),
    new BundleAnalyzerPlugin()

  ]
};
