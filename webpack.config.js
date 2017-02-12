const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'docs');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          },
          { test: /\.json$/, loader: "json" },
          { test: /\.css$/, loader: "css" }
      ]
  },
  plugins:[
     new CopyWebpackPlugin([
       {from: 'index.html'},
     ])
  ]
};