const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const componentEntries = require('./webpack.componentEntries.config');

module.exports = merge(componentEntries, common, {
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
    })
  ]
});