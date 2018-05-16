const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const assetsPath = path.resolve(`${__dirname}/../../src/assets`);
const fontsPath = path.resolve(`${__dirname}/../../src/assets/fonts`);
const fileName = `${process.env.ROOT_PATH}assets/[name]-[hash:5].[ext]`;
const fontsName = `${process.env.ROOT_PATH}assets/fonts/[name].[ext]`;

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
      include: assetsPath,
      exclude: fontsPath,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.less$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })
    },
    {
      test: /\.(ico|otf|pdf)/,
      include: assetsPath,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: fontsPath,
      use: {
        loader: 'file-loader',
        options: {name: fontsName}
      }
    }
  ]
};

module.exports = ifDev(rules);
