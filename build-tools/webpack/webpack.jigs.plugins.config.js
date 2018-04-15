const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const templatePath = path.join(process.cwd(), 'build-tools', 'webpack', 'jigTable.template.js');
const glob = require('glob');

const pluginsArray = [
  new HtmlWebpackPlugin({
    template: templatePath,
    title: 'JIG TABLE',
    chunks:[],
  })
];

const examplesArray = glob.sync('./jigs/**/*.example*');
examplesArray.forEach((example) => {
  const fileName = example.split('/').pop();
  const key = fileName.split('.')[0];
  const entryKey = `${key}\/${key}`;

  pluginsArray.push(
    new HtmlWebpackPlugin({
      title: key,
      chunks: [entryKey],
      filename: `${entryKey}.html`,
      template: example,
      templateParameters: {
        script: `${key}.bundle.js`,
        title: key
      }
    })
  );
});
module.exports = pluginsArray;