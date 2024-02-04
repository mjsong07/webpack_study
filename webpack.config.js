
const path = require("path")
module.exports = {
  entry: "./src/index.js", //打包⼊⼝⽂件
  output: {
      filename: "main.js",
      path: path.resolve(__dirname, "./dist")
  }, //输出结构
  mode: "production", //打包环境 production  development
};