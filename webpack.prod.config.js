const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('dotenv').config();

const ss = require('./src/ss_routes');
const conf = require('./private/webpack/prod');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: conf,
  plugins: [
    new CleanWebpackPlugin('./dist'),
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
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: false, // remove comments
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        conditionals: true,
        sequences: true,
        dead_code: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      mangle: true,
      sourceMap: true, /* fix issue on uglify */
      output: {comments: false}
    }),
    new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.IgnorePlugin(
      /^\.\/locale$/,
      [/moment$/]
    ),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
