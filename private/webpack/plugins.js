const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ss = require('../../src/__static__/ss_routes');

const outputDir = process.env.OUTPUT;

const copyPlugin = () => {
  let copyHTML = [
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}assets/`
    }
  ];
  if (process.env.OUTPUT === 'standard') {
    copyHTML = copyHTML.concat({
      from: `${process.env.ROOT_PATH}src/__${outputDir}__/index.html`,
      to: `${process.env.ROOT_PATH}`
    });
  }
  return copyHTML;
};

const ifDev = (arr) => {
  let plugins = arr;
  const optimization = {};
  if (process.env.OUTPUT === 'static') {
    const StaticSiteGenerator = new StaticSiteGeneratorPlugin({
      entry: 'main',
      paths: ss.routes
    });
    plugins.splice(2, 0, StaticSiteGenerator);
  }
  if (process.env.NODE_ENV === 'production') {
    optimization.minimizer = [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
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
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ];

    const IgnorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]);
    const NameModules = new webpack.NamedModulesPlugin();
    const NoEmit = new webpack.NoEmitOnErrorsPlugin();

    plugins = plugins.concat(IgnorePlugin, NameModules, NoEmit);
  }
  if (process.env.NODE_ENV === 'development') {
    const BrowserSync = new BrowserSyncPlugin({
      host: 'localhost',
      port: process.env.PORT || 8080,
      server: {
        baseDir: [`${outputDir}_build`]
      }
    });
    const BundleAnalyser = new BundleAnalyzerPlugin();
    plugins = plugins.concat(BrowserSync, BundleAnalyser);
  }

  optimization.splitChunks = {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    }
  };

  return {plugins, optimization};
};

const initialPlugins = [
  new MiniCssExtractPlugin({
    filename: 'chatbot.styles.css'
  }),
  new CleanWebpackPlugin([`${outputDir}_build`], {
    root: path.resolve(__dirname, '../../')
  }),
  new CopyWebpackPlugin(copyPlugin()),
  new webpack.optimize.AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = ifDev(initialPlugins);
