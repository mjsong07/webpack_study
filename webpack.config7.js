//css文件中访问url()
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src7/index.js",
    output: {
        filename: "[name].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist7")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'url-loader', // 仅配置url-loader即可，内部会⾃动调⽤file-loader
                  options: {
                    esModule: false,
                            limit: 100, //⼩于此值的⽂件会被转换成DataURL
                            name: '[name]_[hash:6].[ext]', // 设置输出⽂件的名字
                            // outputPath: 'assets', // 设置资源输出的⽬录
                          }
                  }
            ]
      },
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
          template: "./src7/index.html"
      }),
      new MiniCssExtractPlugin({
        filename:'css/[name].css'
      }),
  ]
};
