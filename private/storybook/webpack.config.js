const path = require('path');


const OpenBrowserPlugin = require('open-browser-webpack-plugin');


// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  output: {
    publicPath: 'http://localhost:6006/'
  },
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:6006'})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loaders: ['file-loader'],
        include: path.resolve(`${__dirname}/../../`)
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json/,
        use: ['json-loader']
      }
    ]
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  }
};
