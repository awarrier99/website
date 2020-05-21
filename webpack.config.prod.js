const path = require('path');

module.exports = {
  entry: './src/client/index',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      { test: /\.css/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      { test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: 'json-loader'}
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    modules: ['node_modules']
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization: {
    noEmitOnErrors: true
  }
};
