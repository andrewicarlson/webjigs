const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

const app = path.join(process.cwd(), '/app');
const public = path.join(app, '/public');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'babel-polyfill'
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
    filename: 'bundle.js'
  }
});
