const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: "./src9/index.js",
    output: {
        filename: "[name].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist10")//输出⽂件到磁盘的⽬录，必须是绝对路径
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
                    presets: ["@babel/preset-env"]
                }
            }
        }
      ],
  },
    plugins: [
      new CleanWebpackPlugin(),
  ],
};
