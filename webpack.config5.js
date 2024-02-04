
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src5/index.js",
    output: {
        filename: "[name][chunkhash:8].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist5")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    module: {
      rules: [
          {
              test: /\.less$/,
              use: [
                  // 插件需要参与模块解析，须在此设置此项，不再需要style-loader
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          hmr: true, // 模块热替换，仅需在开发环境开启
                      }
                  },
                  'css-loader',
                  'less-loader',
                  'postcss-loader',
              ],
          },
      ],
  },
    plugins: [
      new htmlWebpackPlugin({
          title: "My App",
          filename: "app.html",
          template: "./src5/index.html"
      }),
      new MiniCssExtractPlugin({
          filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
      }),
  ]
};
