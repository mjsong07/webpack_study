//css文件中访问url()
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src8/index.js",
    output: {
        filename: "[name].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist8")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    module: {
      rules: [

        {
          test: /\.css$/,
          use: [{
            loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath: '../'
            }
          },
          "css-loader"
        ]
        },
      ],
  },
    plugins: [
      new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
          title: "My App",
          filename: "app.html",
          template: "./src8/index.html"
      }),
      new MiniCssExtractPlugin({
        filename:'css/[name].css'
      }),
  ],

  mode: 'development',
  devServer: {
      contentBase: './dist8',
      hot: true,
      stats: 'errors-only',
      open: true,
          port: 8099
  },
  // devtool: 'cheap-source-map'
};
