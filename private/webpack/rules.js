const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pathName = path.resolve(`${__dirname}/..`);
const fontsName = path.resolve(`${__dirname}/`);
const fileName = `${process.env.ROOT_PATH}assets/[name]-[hash:5].[ext]`;

const extractLESS = new ExtractTextPlugin('chatbot.styles.css');

const ifDev = (rules) => {
  if (process.env.NODE_ENV === 'development') {
    rules.rules.unshift({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: '/node_modules/'
    });
  }
  return {rules, extractLESS};
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
      exclude: `${pathName}/assets/fonts/`,
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
      use: ExtractTextPlugin.extract({
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
      include: pathName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: fontsName,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    }
  ]
};

module.exports = ifDev(rules);
