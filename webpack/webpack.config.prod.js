const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const removeEmpty = array => array.filter(p => !!p);

module.exports = env => {

  return {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader: 'tslint-loader' },
        { enforce: 'pre', test: /\.(j|t)sx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
        { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
      ]
    },
    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        debug: true,
        options: {
          resolve: {
            extensions: ['.ts', '.tsx', '.js']
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ])
  }
};


// if (process.env.NODE_ENV === 'development') {
//   config.watch = true;
//   config.devtool = 'source-map';
// }

