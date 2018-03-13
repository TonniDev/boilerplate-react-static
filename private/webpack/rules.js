const path = require('path');

const pathName = path.resolve(`${__dirname}/..`);
const fileName = `${process.env.ROOT_PATH}assets/[name]-[hash:5].[ext]`;

const ifDev = (rules) => {
  if (process.env.NODE_ENV === 'development') {
    rules.rules.unshift({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: '/node_modules/'
    });
  }
  return rules;
};

const rules = {
  rules: [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(jpg|png|svg)/,
      include: pathName,
      exclude: '/assets/fonts/',
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: pathName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.less$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'less-loader'}
      ]
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

module.exports = ifDev(rules);
