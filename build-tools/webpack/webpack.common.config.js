const path = require('path');
const cwd = process.cwd();
const partials = path.join(cwd, 'templates', 'partials');

console.log("PARTIALS", partials);

module.exports = {
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['babel-preset-env', {
                  'targets': {
                    'browsers': ['last 2 versions']
                  }
                }]
              ],
              plugins: ['transform-runtime'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(cwd, 'tsconfig.json')
            }
          },
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.join(cwd, '/linting/tslint.json'),
              tsConfigFile: path.join(cwd, 'tsconfig.json'),
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
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            partials
          ]
        }
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