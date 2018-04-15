const cwd = process.cwd();
const common = require('./webpack.common.config');
const jigsConfig = require('./webpack.jigEntries.config');
const jigsPlugins = require('./webpack.jigs.plugins.config');
const merge = require('webpack-merge');
const path = require('path');

const app = path.join(cwd, '/app');
const public = path.join(app, '/public');

module.exports = merge(jigsConfig, common, {
  devtool: '#source-map',
  devServer: {
    contentBase: public,
    index: 'index.html',
    port: 3000,
    stats: 'errors-only',
    overlay: true,
    hot: true,
    inline: true
  },
  output: {
    filename: '[name].bundle.js',
    path: public,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }]
  },
  plugins: [
    ...jigsPlugins
  ]
});