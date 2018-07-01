require('webpack');
const WebpackBar = require('webpackbar');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('main.css');
const ProgressBar = new WebpackBar();
const plugins = [
  ProgressBar,
  extractCSS,
];

module.exports = {
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
    path: __dirname + '/build/assets',
    filename: 'main.js',
  },
  devServer: {
    contentBase: './source'
  },
  plugins,
};
