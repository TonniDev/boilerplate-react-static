const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ss = require('./src/ss_routes');

//FIXME: move ROOT_PATH to process.env from dotenv-webpack
const { ROOT_PATH } = require('./config/common');
const prodConf = require('./config/prod');

module.exports = {
    entry: {
      main: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: "ProjectStarter"
    },
    devtool: "cheap-module-source-map",
    module: prodConf,
    plugins: [
        new CleanWebpackPlugin('./dist'),
        new Dotenv({
          path: './.env',
          safe: true,
        }),
        new CopyWebpackPlugin([{
            from: '/src/assets/**/*',
            to: '/dist' + ROOT_PATH + 'assets/[name].[ext]'
        }]),
        new webpack.DefinePlugin({
            'process.env': {
              // This has effect on the react lib size
              'NODE_ENV': JSON.stringify('production'),
            }
        }),
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
            mangle: false,
            sourceMap: true, /* fix issue on uglify */
            output: {comments: false}
        }),
        new StaticSiteGeneratorPlugin('main', ss.routes, ss),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.IgnorePlugin(
            /^\.\/locale$/,
            [/moment$/]
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
