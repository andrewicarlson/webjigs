const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          'babel-loader', 
          'ts-loader', 
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.join(process.cwd(), '/linting/tslint.json'),
              tsConfigFile: path.join(process.cwd(), 'tsconfig.json'),
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
      'node_modules'
    ]
  }
};
