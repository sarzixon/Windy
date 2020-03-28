const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devServer: {
    host: '192.168.65.4', //your ip address
    port: 8080,
    disableHostCheck: true,
  },
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    rules: [

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          outputPath: 'images',
          name: 'images/[path][name].[ext]'
        }
      }
    ]
  }
};