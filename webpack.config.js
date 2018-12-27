const path = require('path');

module.exports = {
  entry: ['./app/js/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8081,
    publicPath: '/dist/',
    contentBase: path.join(__dirname, './app/views'),
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
      },
      '/secured/api': {
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
      },
    },
  },
};
