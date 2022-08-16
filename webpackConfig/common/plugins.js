
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离css
const ESLintPlugin = require('eslint-webpack-plugin'); // 代码校验
const WebpackBar = require('webpackbar');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
module.exports = () => {
  const modulePlugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', '..', 'public/index.html'),
      filename: path.resolve("./dist/index.html"),
      inject: true,
      chunks: ['main'],
      ...IS_PRODUCTION ? {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        }
      } : undefined
    }),
  ]
  if (IS_PRODUCTION) {
    const proPlugin = [
      new MiniCssExtractPlugin({
        filename: './static/css/[name].[contenthash:8].css'
      })
    ]
    return [...modulePlugins, ...proPlugin]
  } else {
    const devPlugin = [
      new WebpackBar({
        color: "#55dd8b",
        basic: false,
      }),
      new ESLintPlugin()
    ];
    return [...modulePlugins, ...devPlugin]
  }

}