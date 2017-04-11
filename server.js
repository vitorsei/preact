const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const open = require('open');

const PORT = 3001;
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'))
});

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://127.0.0.1:${PORT}`);
  }
});
