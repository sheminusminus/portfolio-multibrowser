/**
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = require('./webpack.config.base');

const DIST_FOLDER = path.join(__dirname, 'dist');
const SRC_FOLDER = path.join(__dirname, 'src');

const devServerPort = 1337;

config.mode = 'development';

config.entry = [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:1337',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  path.join(SRC_FOLDER, 'index.js'),
];

config.output.filename = 'dist/[name].[hash].js';
config.output.chunkFilename = 'dist/[name].[hash].js';

config.devServer = {
  contentBase: path.join(SRC_FOLDER, 'static'),
  compress: true,
  port: devServerPort,
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/static/index.ejs',
  }),
];

config.devtool = 'source-map';

module.exports = config;
