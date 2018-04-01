const glob = require('glob');
const path = require('path');
const distDirectory = path.join(process.cwd(), 'dist');

const entryArray = glob.sync('./app/components/**/*.entry*');
const entryObject = entryArray.reduce((acc, item) => {
  const fileArray = item.split('/');
  const fileName = fileArray[fileArray.length - 1];
  const name = fileName.split('.')[0];
  const index = path.join(name, name);
  const found = acc[index];
  acc[index] = found ? [item].concat(found) : item;
  return acc;
}, {});

module.exports = {
  entry: entryObject,
  output: {
    filename: '[name].bundle.js',
    path: distDirectory,
  }
};