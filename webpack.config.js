var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }
          ]
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
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    port: 9000,
    watchOptions: {
        poll: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, 'dist'),
        template: './index.html',
    })
  ]
};
