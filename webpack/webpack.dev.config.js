const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

const public = path.join(__dirname, '..', 'public');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './ts/index.ts',
    './scss/index.scss'
  ],
  devtool: '#source-map',
  devServer: {
    contentBase: public,
    compress: true,
    index: 'index.html',
    port: 3000,
    stats: 'errors-only',
    overlay: true,
    hot: true
  },
  output: {
    path: public,
    filename: 'bundle.js'
  }
});
