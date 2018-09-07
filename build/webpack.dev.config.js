const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

function resolve(str) {
  return path.resolve(__dirname, '../' + str);
}

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: resolve("dev/index.js")
  },
  devServer: {
    contentBase: resolve("dist"),
    hot: true
  },
  externals: {
    vue: 'Vue',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //通过模板生成的文件名
      template: resolve("dev/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
