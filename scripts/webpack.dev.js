const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        include: path.join(__dirname, '..', 'client', 'theme'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: path.join(__dirname, '..', 'client', 'theme'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]_[hash:base64:5]',
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, '..', 'client', 'theme')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'David Li DEVELOPMENT',
      template: path.join(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '..', 'public'),
    hot: true,
    port: 9090,
    proxy: {
      '/api': 'http://localhost:9092',
    },
  },
});
