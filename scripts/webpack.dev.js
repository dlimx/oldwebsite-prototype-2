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
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader'],
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
