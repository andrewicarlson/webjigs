const globToMultifileEntry = require('./multiFileEntryGlob');

const glob = require('glob');
const path = require('path');
const distDirectory = path.join(process.cwd(), 'dist');

const entryArray = glob.sync('./jigs/**/*.entry*');
const entryObject = globToMultifileEntry(entryArray);

module.exports = {
  entry: entryObject,
  output: {
    filename: '[name].bundle.js',
    path: distDirectory,
  }
};