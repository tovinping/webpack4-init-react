const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
module.exports =merge(baseConfig, {
  // 开发模式
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    // 服务端口为1208
    port: 8089,
    // 自动打开浏览器
    open: false,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  // 装载虚拟目录插件
  plugins: [
    new webpack.NamedModulesPlugin(), // 貌似可以看到热更新是哪么文件引起的热更新
    new webpack.HotModuleReplacementPlugin()
  ],
})