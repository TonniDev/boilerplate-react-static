const path = require('path');

require('dotenv').config();

const {rules} = require('./private/webpack/rules');
const plugins = require('./private/webpack/plugins');

const outputDir = process.env.OUTPUT === 'static' ? 'static' : 'standard';
const project = process.env.OUTPUT === 'static' ? 'static' : 'standard';

module.exports = {
  context: __dirname,
  entry: `./src/__${project}__/index.js`,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, `${outputDir}_build`),
    filename: 'bundle.js',
    libraryTarget: 'umd' // options: var, amd, umd, commonjs, commonjs2, this
  },
  module: rules,
  watch: true,
  plugins
};
