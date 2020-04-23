const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.vue$/,
        loader: "vue-loader",
      },
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
          "vue-style-loader", // 动态创建style标签，将js中css字符串添加，插入head中显示
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
            esModule: false, //默认情况下 url-loader 对图片解析时ES6模块化,关闭ES6模块化，使用commonjs模块化就能识别了
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
      // 以 public/index.html 文件为模板，创建基新HTML文件，自动引入webpack打包生成JS/CSS
      template: resolve("public/index.html"),
    }),
    new VueLoaderPlugin(),
    // 复制文件
    new CopyPlugin([
      {
        from: resolve("public"), // 将public下面的所有文件复制
        to: resolve("dist"), // 复制到dist目录下去
        ignore: ["index.html"], // 复制时忽略index.html文件（这个文件已经被HtmlWebpackPlugin处理了）
      },
    ]),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve("dist"), // 开发服务器将哪个目录的资源暴露出去
    port: 9527,
    host: "localhost",
    compress: true, //启动gzip压缩
    open: true, //自动打开页面
    hot: true, //热模块
    quiet: true, //静默模式，在终端不打印过多信息
    clientLogLevel: "none", //在浏览器不打印过多信息
  },
  devtool: "cheap-module-source-map",
  resolve: {
    alias: {
      //配置路径别名
      "@": resolve("src"),
      "@comps": resolve("src/components"),
    },
    extensions: [".js", ".vue", ".json"],
  },
};
