const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =merge(baseConfig, {
  mode: 'production',
  // 打包时只显示需要内容
  stats: {
    timings: true, // 时间
    warnings: false, // 警告(一般都是警告打包文件体积过大，其他警告不详)
    modules: false, 
    entrypoints: false,
    children: false
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/style.[contenthash:8].css'
    })
  ],
})