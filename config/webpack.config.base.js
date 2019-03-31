const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包环境
const isProduction = process.env.BUILD_ENV === 'pro'
console.info(isProduction)
const loaderCSS = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
const bundleJS = isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/[name].[hash].js'

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: bundleJS
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      },      
      {
        test: /\.(css|scss)$/,
        use: [
          loaderCSS,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // 装载虚拟目录插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    })
  ],
}