
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
      index: "./src4/index.js",
      utils: './src4/utils.js',
  },
  output: {
      filename: "./[name].bundle.js", // 输出 index.js 和 utils.js
      path: path.resolve(__dirname, "dist4")//输出⽂件到磁盘的⽬录，必须是绝对路径
  },
  module: {
      rules: [
          {
              test: /.css$/,
              use: [
                  MiniCssExtractPlugin.loader, // 创建一个 link 标签
                  'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
              ],
          },
      ]
  },
  plugins: [
      // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
      new MiniCssExtractPlugin({
          filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
      }),
  ]
}
