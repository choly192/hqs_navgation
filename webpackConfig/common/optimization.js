/**
 * optimization 
 */
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 优化压缩css

module.exports = {
  splitChunks: {
    chunks: 'all',
    minSize: 0,
    minChunks: 1,
    cacheGroups: {
      styles: {
        name: "styles",
        type: "css/mini-extract",
        chunks: "all",
        enforce: true,
      },
      framework: {
        chunks: 'all',
        name: 'framework',
        test: /[\\/]node_modules[\\/](react|react-dom|react-is|scheduler|prop-types|use-subscription)[\\/]/,
        priority: 40,
        enforce: true
      },
      vendor: {
        chunks: 'all',
        name: 'vendor',
        test: /[\\/]node_modules[\\/](antd|@ant-design|antd-mobile|rc-.*|dom-align|@ctrl\/tinycolor|async-validator)[\\/]/,
        priority: 30,
        enforce: true
      },
      common: {
        minChunks: 2, // 被超过两个模块引用，才会被打包
        priority: -20, // 优先级
        reuseExistingChunk: true, // 如果一个模块已经被打包过了，那么这个模块也不会被打包
      }
    },
  },
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin({
      parallel: true, // 启用多进程并发执行
    }),
  ],
}