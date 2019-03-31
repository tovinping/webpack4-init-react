const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: 'index.html',
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, '../index.html')
})

module.exports = {
  mode: 'production',
  // 配置入口文件
  entry: path.resolve(__dirname, '../src/index.js'),
  // 出口文件目录为根目录下dist, 输出的文件名为main
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // 配置开发服务器, 并配置自动刷新
  devServer: {
    // 服务端口为1208
    port: 8089,
    // 自动打开浏览器
    open: false
  },
  // 装载虚拟目录插件
  plugins: [htmlWebpackPlugin],
}