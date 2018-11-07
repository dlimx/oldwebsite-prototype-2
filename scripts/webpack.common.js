const path = require('path');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/img/[name].[ext]',
            outputPath: 'dist/img/'
          }
        }
      },
      // {
      //   test: /\.(otf|ttf|eot|woff|woff2)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'public/fonts/[name].[ext]',
      //     outputPath: 'dist/fonts'
      //   }
      // }
    ]
  },
};
