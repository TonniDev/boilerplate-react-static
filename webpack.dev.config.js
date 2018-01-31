const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ss = require('./src/ss_routes');
const devConf = require('./config/dev');

const ROOT_PATH = '/';

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
    new CopyWebpackPlugin([{
      from: '/src/assets/**/*',
      to: '/dist' + ROOT_PATH + 'assets/[name].[ext]'
    }]),
    new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3300,
      server: {
        baseDir: ['dist']
      }
    })

  ]
};
