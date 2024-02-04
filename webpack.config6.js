
//字体处理
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src6/index.js",
    output: {
        filename: "[name][chunkhash:8].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist6")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    module: {
      rules: [
        {
            test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'url-loader', // 仅配置url-loader即可，内部会⾃动调⽤file- loader
                    options: {
                               esModule: false,//此参数非常重要，可以解决 在4.0里面会导致css 中使用url([object Module])的问题
                              limit: 10240, //⼩于此值的⽂件会被转换成DataURL
                              name: '[name]_[hash:6].[ext]', // 设置输出⽂件的名字
                              outputPath: 'assets', // 设置资源输出的⽬录
                            }
                    }
              ]
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
          title: "My App",
          filename: "app.html",
          template: "./src6/index.html"
      }),
  ]
};
