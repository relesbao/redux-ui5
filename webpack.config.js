const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'src/ui/bundle'),
    devtoolLineToLine: true,
    sourceMapFilename: './bundle.js.map',
    filename: 'app.js',
    libraryExport: 'default',
    libraryTarget: 'global',
    library: 'App',
  },
};
