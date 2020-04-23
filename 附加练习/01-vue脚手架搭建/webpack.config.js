const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        include: [resolve("src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/,
        include: [resolve("src")],
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        include: [resolve("src")],
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "static/media/[hash:10].[ext]",
            esModule: false, //关闭es6模块化，使用commonjs解析图片
          },
        },
      },
      {
        exclude: [
          /\.js$/,
          /\.css$/,
          /\.html$/,
          /\.(png|gif|jpe?g|webp)$/,
          /\.vue$/,
        ],
        use: {
          loader: "file-loader",
          options: {
            name: "static/media/[hash:10].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
    new VueLoaderPlugin(),
    new CopyPlugin([
      {
        from: resolve("public"),
        to: resolve("dist"),
        ignore: ["index.html"],
      },
    ]),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve("dist"), //开发服务器暴露资源的路径
    port: 9527,
    host: "localhost",
    compress: true, //启动gzip压缩
    open: true, //自动打开页面
    hot: true, //开启HMR功能
    quiet: true, //开启静默模式，终端不打印过多消息
    clientLogLevel: "none", //浏览器控制台不打印多余消息
  },
  devtool: "cheap-module-source-map", //开发环境
  //devtool:"source-map, //生产环境
};
