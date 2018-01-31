const {ROOT_PATH} = require('./common');

const path = require('path');

const pathName = path.resolve(`${__dirname}/..`);
const fileName = `${ROOT_PATH}assets/[name]-[hash:5].[ext]`;

const rules = {
  rules: [
    {
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: '/node_modules/'
    },
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(jpg|png|svg)/,
      include: pathName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      include: pathName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(ico|otf|pdf)/,
      include: pathName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    }
  ]
};

module.exports = rules;
