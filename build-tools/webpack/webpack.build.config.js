const base = require(process.cwd() + '/webpack.entries.config');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(base, common, {
    plugins: [
        new ExtractTextPlugin('styles.css'),
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