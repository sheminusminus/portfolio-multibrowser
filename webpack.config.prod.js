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
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'src/static/resume.pdf'),
      to: path.resolve(__dirname, 'dist/resume.pdf'),
    },
    {
      from: path.resolve(__dirname, 'src/static/migrating_to_react16.pdf'),
      to: path.resolve(__dirname, 'dist/migrating_to_react16.pdf'),
    },
    {
      from: path.resolve(__dirname, 'src/static/scripts/animation.js'),
      to: path.resolve(__dirname, 'dist/scripts/animation.js'),
    },
    {
      from: path.resolve(__dirname, 'src/static/scripts/vr.js'),
      to: path.resolve(__dirname, 'dist/scripts/vr.js'),
    },
    {
      from: path.resolve(__dirname, 'src/static/vendor/three.min.js'),
      to: path.resolve(__dirname, 'dist/vendor/three.min.js'),
    },
    {
      from: path.resolve(__dirname, 'src/static/styles/normalize.css'),
      to: path.resolve(__dirname, 'dist/styles/normalize.css'),
    },
    {
      from: path.resolve(__dirname, 'src/static/styles/global.css'),
      to: path.resolve(__dirname, 'dist/styles/global.css'),
    },
    {
      from: path.resolve(__dirname, 'src/static/images/x_projects.png'),
      to: path.resolve(__dirname, 'dist/images/x_projects.png'),
    },
    {
      context: path.resolve(__dirname, 'src/static/fonts'),
      from: '*',
      to: path.resolve(__dirname, 'dist/fonts'),
    },
  ]),
  new webpack.HashedModuleIdsPlugin(),
];

module.exports = config;
