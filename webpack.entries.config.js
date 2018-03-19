const dev = require('./build-tools/webpack/webpack.dev.config');
const merge = require('webpack-merge');
const path = require('path');
const app = path.join(process.cwd(), '/app');

module.exports = merge(dev, {
    entry: [
        path.join(app, '/index.ts'),
        path.join(app, '/index.scss')
    ],
    output: {
        path: path.join(app, '/public')
    }
});