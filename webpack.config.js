const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const globals = require('./src/app/templates/globals.js');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/app/bootstrap.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/templates/index.ejs',
      templateParameters: globals
    }),
    new ESLintPlugin()
  ],
  module: {},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
