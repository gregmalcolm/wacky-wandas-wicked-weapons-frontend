var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, 'dist'),
        template: './index.html',
    }),
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename: 'weapons.html',
        template: './public/weapons.html',
    }),
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename: 'items.html',
        template: './public/items.html',
    })
  ]
};
