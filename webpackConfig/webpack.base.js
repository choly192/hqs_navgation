const path = require("path");
const rules = require("./common/rules");
const plugins = require("./common/plugins");

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: IS_PRODUCTION ? 'static/js/[name]/[name].[contenthash:8].js' : 'static/js/[name]/[name].js',
    // publicPath: IS_PRODUCTION ? "//cdn-file.ludashi.com/web/lds_laboratory" : "/",
    publicPath: "/",
    clean: true
  },
  module: {
    rules
  },
  plugins: plugins(),
  // externals: ["react"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    mainFiles: ['index', 'module'],
    alias: {
      '@': path.join(__dirname, '..', 'src'), // @映射到src目录
      static: path.join(__dirname, '..', 'src/static') // 指向静态资源目录
    }
  },
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
    hints: false
  },
}