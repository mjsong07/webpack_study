
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src3/index.js",
    output: {
        filename: "[name][chunkhash:8].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist3")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
      new htmlWebpackPlugin({
          title: "My App",
          filename: "app.html",
          template: "./src3/index.html"
      }),
      new MiniCssExtractPlugin({
          filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
      }),
  ]
};
