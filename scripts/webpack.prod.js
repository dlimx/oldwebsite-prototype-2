const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      hash: true
    })
  ],
});
