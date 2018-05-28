/**
 * @fileOverview Webpack configuration file for production.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = require('./webpack.config.base');

const DIST_FOLDER = path.join(__dirname, 'dist');
const SRC_FOLDER = path.join(__dirname, 'src');

config.mode = 'production';

config.entry = {
  app: path.join(SRC_FOLDER, 'index.js'),
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'lodash',
  ],
};

config.output.path = DIST_FOLDER;

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/static/index.ejs',
  }),
  new CopyWebpackPlugin({
    from: path.resolve(__dirname, 'src/static/resume.pdf'),
    to: path.resolve(__dirname, 'dist/resume.pdf'),
  }),
  new webpack.HashedModuleIdsPlugin(),
];

module.exports = config;
