
const path = require("path");
module.exports = {
    // 必填 webpack执⾏构建⼊⼝
    entry: {
        index: "./src2/index.js",
        login: "./src2/login.js"
    },
    // entry: ["./src/index.js","./src/login.js"] //另外一种写法
    output: {
        filename: "[name][chunkhash:8].js",//利⽤占位符，⽂件名称不要重复
        path: path.resolve(__dirname, "dist2")//输出⽂件到磁盘的⽬录，必须是绝对路径
    }
};
