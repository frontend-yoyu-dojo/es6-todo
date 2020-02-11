const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  devServer: {
    contentBase: outputPath,
  },
};
