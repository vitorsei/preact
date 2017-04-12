const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  const removeEmpty = array => array.filter(p => !!p);

  return {
    devtool: 'cheap-eval-source-map',
    entry: {
      app: path.join(__dirname, '../src/index.jsx'),
      vendor: [
        'react',
        'react-dom',
        'react-router'
      ]
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../build/'),
      pathinfo: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        { enforce: 'pre', test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
      ]
    },
    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),
      new webpack.LoaderOptionsPlugin({
        debug: true,
        options: {
          resolve: {
            extensions: ['.js', '.jsx']
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ])
  };
};
