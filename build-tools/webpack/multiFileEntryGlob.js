const path = require('path');

/**
 * method to turn globbed array into multifile webpack entry
 * @param entryArray
 * @returns {*}
 */
module.exports = (entryArray) => {
  return entryArray.reduce((acc, item) => {
    const fileArray = item.split('/');
    const fileName = fileArray[fileArray.length - 1];
    const name = fileName.split('.')[0];
    const index = path.join(name, name);
    const found = acc[index];
    acc[index] = found ? [item].concat(found) : item;
    return acc;
  }, {});
};
