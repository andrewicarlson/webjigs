const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const templatePath = path.join(process.cwd(), 'build-tools', 'webpack', 'jigTable.template.js');

const jigsConfig = require('./webpack.jigEntries.config');
const pluginsArray = [
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
  new HtmlWebpackPlugin({
    template: templatePath,
    title: 'JIG TABLE',
    chunks:[]
  })
];

Object.keys(jigsConfig.entry).forEach((key) => {
  pluginsArray.push(
    new HtmlWebpackPlugin({
      title: key,
      chunks: [key],
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      filename: `${key}.html`
    })
  )
});

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
  plugins: pluginsArray
});