var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const createLodashAliases = require('lodash-loader').createLodashAliases

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        loader: "lodash-loader"
      },
      {
        test: /\.ejs$/,
        loader: "ejs-html-loader"
      }
    ]
  },
  resolve: {
    alias: createLodashAliases()
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, 'dist'),
        template: './index.html',
    }),
    new HtmlWebpackExcludeAssetsPlugin()
  ]
};
