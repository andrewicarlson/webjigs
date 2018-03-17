var webpackConfig = require('./webpack/webpack.common.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'mocha'],
    plugins: [
      require('karma-jasmine'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage')
    ],
    files: ['./ts/**/*.spec*'],
    reporters: ['progress', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig,
    failOnEmptyTestSuite: false,
    preprocessors: {
      '**/*.spec*': ['webpack']
    }
  })
};