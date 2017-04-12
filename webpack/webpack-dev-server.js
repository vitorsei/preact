/* eslint no-console:0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const path = require('path');
const open = require('open');

// always dev enviroment when running webpack dev server
const env = { dev: 'development' };
const port = 3000;

const devServerConfig = {
  contentBase: path.join(__dirname, '../src/'),
  historyApiFallback: { disableDotRule: true }, // Need historyApiFallback to be able to refresh on dynamic route
  stats: { colors: true } // Pretty colors in console
};

const server = new WebpackDevServer(webpack(config(env)), devServerConfig);

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://127.0.0.1:${port}`);
  }
});
