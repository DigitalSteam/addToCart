const path = require('path');
// var SRC_DIR = path.join(__dirname, '/react-client/src');
// var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: '/client',
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
  },
};
