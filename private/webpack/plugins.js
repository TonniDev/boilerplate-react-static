// const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const ss = require('../../src/__static__/ss_routes');

const outputDir = process.env.OUTPUT === 'static' ? 'static' : 'standard';

const ifDev = (plugins) => {
  if (process.env.OUTPUT === 'static') {
    const StaticSiteGenerator = new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    });
    plugins.splice(2, 0, StaticSiteGenerator);
  }
  if (process.env.NODE_ENV === 'production') {
    const UglyJS = new webpack.optimize.UglifyJsPlugin({
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
    });
    const IgnorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]);
    const NameModules = new webpack.NamedModulesPlugin();
    const NoEmit = new webpack.NoEmitOnErrorsPlugin();

    plugins.splice(2, 0, UglyJS);
    plugins.concat(IgnorePlugin, NameModules, NoEmit);
  } else if (process.env.NODE_ENV === 'development') {
    const BrowserSync = new BrowserSyncPlugin({
      host: 'localhost',
      port: process.env.PORT || 8080,
      server: {
        baseDir: [`${outputDir}_build`]
      }
    });
    const BundleAnalyser = new BundleAnalyzerPlugin();
    plugins.concat(BrowserSync, BundleAnalyser);
  }
  return plugins;
};

const plugins = [
  new CleanWebpackPlugin(`${outputDir}_build`),
  new CopyWebpackPlugin([
    {
      from: `./node_modules/ComponentsOi/${outputDir}_build/assets/fonts/*`,
      to: `${process.env.ROOT_PATH}assets/fonts/[name].[ext]`
    },
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}assets/`
    }
  ]),
  new webpack.optimize.AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = ifDev(plugins);