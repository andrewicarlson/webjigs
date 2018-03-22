const path = require('path');
const appDirectory = path.join(process.cwd(), '/app');

module.exports = {
    entry: [
        path.join(appDirectory, '/index.ts'),
        path.join(appDirectory, '/index.scss')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(appDirectory, '/public'),
    }
};