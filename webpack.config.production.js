const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const embedFileSize = 50000;
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: {
    client: path.join(srcPath, 'js', 'client.jsx'),
    serviceWorker: path.join(srcPath, 'serviceWorker', 'index.js'),
  },
  output: {
    path: buildPath,
    filename: '[name]-[chunkhash].min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader' },
      {
        test: /\.svg/,
        loader: `url?limit=${embedFileSize}&mimetype=image/svg+xml`,
      },
      {
        test: /\.png$/,
        loader: `url?limit=${embedFileSize}&mimetype=image/png`,
      },
      {
        test: /\.jpg/,
        loader: `url?limit=${embedFileSize}&mimetype=image/jpeg`,
      },
      {
        test: /\.gif/,
        loader: `url?limit=${embedFileSize}&mimetype=image/gif`,
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: `url?limit=${embedFileSize}`,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: false,
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: JSON.stringify(false),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
