const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'docs');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js",
      sourceMapFilename: "bundle.map.js"
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