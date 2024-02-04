const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src9/index.js",
    output: {
        filename: "[name].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist11")//输出⽂件到磁盘的⽬录，必须是绝对路径
    },
    mode: 'development',
    module: {
      rules: [
        {
            test: /\.js$/,
                exclude: /node_modules/,
                    use: {
                    loader: "babel-loader",
                    options: {
                      presets: [
                          [
                              "@babel/preset-env",
                              {
                                  targets: {
                                      edge: "17",
                                      firefox: "60",
                                      chrome: "67",
                                      safari: "11.1"
                                  },
                                  corejs: 2,//新版本需要指定核⼼库版本
                                  useBuiltIns: "usage"//按需注⼊ entry  usage  false
                              }
                          ]
                      ]
                  }
            }
        }
      ],
  },
    plugins: [
      new CleanWebpackPlugin(),
  ],
};
