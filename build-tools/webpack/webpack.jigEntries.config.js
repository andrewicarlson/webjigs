const globToMultifileEntry = require('./multiFileEntryGlob');

const glob = require('glob');

const entryArray = glob.sync('./jigs/**/*.entry*');
const entryObject = globToMultifileEntry(entryArray);

module.exports = {
  entry: entryObject
};