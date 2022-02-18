const path = require('path');

module.exports = {
  entry: './client-src/main.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: 'babel-loader'
      }
    ]
  }
};
