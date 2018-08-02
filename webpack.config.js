require('webpack');
var path = require('path');
const WebpackBar = require('webpackbar');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const processHTMLPages = require('./HTMLProcessingHelper.js');

const extractCSS = new ExtractTextPlugin('main.css');
const ProgressBar = new WebpackBar();

module.exports = (env, argv) => {
  let plugins = [
    ProgressBar,
    extractCSS
  ]

  if (argv.mode === 'development') {
    plugins = plugins.concat(processHTMLPages());
  }

  return {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      './source/main.js'
    ],
    module: {
      rules: [
        {
          test: [/\.scss$/i, /\.sass$/i, /\.css$/],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]',
            context: './source'
          }
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.es6'],
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: './source',
      watchContentBase: true
    },
    plugins
  }
};
