const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ss = require('./src/ss_routes');
const devConf = require('./private/webpack/dev');

const { ROOT_PATH } = require('./private/common');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: devConf,
  watch: true,
  plugins: [
    new CleanWebpackPlugin('dist'),
    new Dotenv({
      path: './.env',
      safe: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './node_modules/ComponentsOi/dist/assets/fonts/*',
        to: `${ROOT_PATH}assets/fonts/[name].[ext]`
      }
    ]),
    new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    }),
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
