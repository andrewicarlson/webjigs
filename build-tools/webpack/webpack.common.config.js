const path = require('path');

module.exports = {
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [
          'babel-loader?cacheDirectory',
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(process.cwd(), 'tsconfig.json')
            }
          },
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.join(process.cwd(), '/linting/tslint.json'),
              tsConfigFile: path.join(process.cwd(), 'tsconfig.json'),
              emitErrors: true,
              failOnHint: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.scss', '.css', '.js'],
    modules: [
      './node_modules'
    ]
  }
};