const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = [
  {
    test: /\.(js(x?)|ts(x?)|mjs)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
      plugins: ["@babel/plugin-syntax-jsx", "@babel/plugin-transform-runtime"],
      cacheDirectory: true,
    }
  },
  {
    test: /\.(le|c)ss$/,
    use: [
      IS_PRODUCTION ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          modules: false
        }
      },
      "postcss-loader",
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  },
  {
    test: /\.(png|jpg|gif|svg|ico)$/,
    type: "asset/resource",
    parser: {
      dataUrlCondition: {
        maxSize: 10 * 1024
      }
    },
    generator: {
      filename: "assets/image/[hash:8][ext][query]"
    }
  },
  {
    test: /\.(eot|woff|woff2|ttf)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/font/[hash:8][ext][query]"
    }
  },
  {
    test: /\.(mp3|mp4|wav)$/,
    type: "asset/resource",
    generator: {
      filename: "assets/media/[hash:8][ext][query]",
    }
  }
]