const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');

module.exports = {
  context: srcPath,
  entry: {
    client: path.join(srcPath, 'js', 'client.js'),
    serviceWorker: path.join(srcPath, 'serviceWorker', 'index.js'),
  },
  output: {
      path: buildPath,
      filename: "[name].bundle.js",
      sourceMapFilename: "[name].bundle.map.js",
  },
  devtool: "source-map",
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          },
          { test: /\.json$/, loader: "json-loader" },
          { test: /\.css$/, loader: "css-loader" }
      ]
  },
  plugins:[
     new CopyWebpackPlugin([
       {from: 'index.html'},
     ])
  ]
};