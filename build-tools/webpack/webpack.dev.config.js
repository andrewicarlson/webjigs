const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

const public = path.join(process.cwd(), 'public');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'babel-polyfill',
    path.join(process.cwd(), 'js/index.ts'),
    path.join(process.cwd(), 'css/index.scss')
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
