const path = require("path");

// 封装绝对路径函数
function resolve(relative) {
  return path.resolve(__dirname, relative);
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: undefined,
    filename: "bulit.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude:/node_modules/,
        include: [resolve("src")], //设置检测文件的路径
        use: {
          loader: "babel-loader", //需要使用的加载器
          options: {
            presets: ["@babel/preset-env"], //babel智能预设
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/,
        include: [resolve("src")],
        use: [
          //执行顺序：从下到上 / 从右到左
          "style-loader", // 动态创建style标签，将js中css字符串添加，插入head中显示
          "css-loader", // 将css编译成js字符串，以commonjs规则插入到js文件
        ],
      },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        include: [resolve("src")],
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024, //小于10kb的图片用base64处理
            name: "static/media/[hash:10].[ext]", //输出文件重命名
          },
        },
      },
    ],
  },
  plugins: [],
  mode: "development",
};
