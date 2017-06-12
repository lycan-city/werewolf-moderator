const express = require('express');
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);

const hotPort = 8000;

const middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
});

app.use(middleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
}));

app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  res.end();
});
app.use(express.static(path.join(__dirname, '/dist')));

app.listen(hotPort, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', hotPort, hotPort);
});
