const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jigsConfig = require('./webpack.jigEntries.config');
const jigsPlugins = require('./webpack.jigs.plugins.config');
const path = require('path');
const distDirectory = path.join(process.cwd(), 'dist');

module.exports = merge(jigsConfig, common, {
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'sass-loader'
        ],
        fallback: 'style-loader'
      })
    }, ]
  },
  output: {
    filename: '[name].bundle.js',
    path: distDirectory,
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
      mangle: true,
      sourceMap: false,
    }),
    ...jigsPlugins
  ]
});