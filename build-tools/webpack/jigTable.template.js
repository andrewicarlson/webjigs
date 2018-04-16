module.exports = function (templateParams) {
  const entryObject = templateParams.compilation.options.entry;

  const generateTableCells = (entryObject) => {
    return Object.keys(entryObject).reduce((acc, entry) => {
      const chunkArray = entry.split('\\');
      const chunkPath = chunkArray.join('/');
      const chunkName = chunkArray[0];
      return `${acc}<tr><td><a href="${chunkPath}.html">${chunkName}</a></td></tr>`;
    }, '');
  };

  const generateTable = (entryObject) => {
    return `<table>` +
      `<thead><tr><th>Webjigs</th></tr></thead>` +
      `<tbody>${generateTableCells(entryObject)}</tbody></table>`
  };

  const html = `<html><head>` +
    `<title>${templateParams.htmlWebpackPlugin.options.title}</title>` +
    `</head><body>${generateTable(entryObject)}</body></html>`;

  return html;
};