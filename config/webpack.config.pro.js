const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
// 清空之前打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 提取CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩CSS
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/style.[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin()
  ],
})