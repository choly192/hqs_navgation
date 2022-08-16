/**
 * 开发环境打包构建
 */
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    port: 8088,
    // proxy: {} // 配置代理
    historyApiFallback: {
      rewrites: [{
        form: /^\/*$/,
        to: '/index.html'
      }]
    },
  }
})
