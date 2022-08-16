/**
 * 生产环境打包
 */
const { merge } = require("webpack-merge");
// 压缩JS文件（webpack在构建时内置了该插件 如果需要对该插件进行配置 就需要安装）
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          }
        },
        extractComments: false
      })
    ]
  }
})