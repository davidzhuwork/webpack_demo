const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
    mode: "development",
    devServer: {
        port: 8888,
        host: "0.0.0.0",
        open: true,
    },
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                // 配置处理以 .css 结尾的文件的loader
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                ],
            },
            {
                // 配置处理以 .less 结尾的文件的loader
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
            },
            {
                // 配置内置功能(资源模块类型)使得 webpack 能够处理图片
                test: /\.(png|jpe?g|svg|gif)$/,
                // 1.打包两张图片, 并且这两张图片有自己的地址, 将地址设置到img/bgi中
                // 缺点: 多图片加载的两次网络请求
                // type: "asset/resource",

                // 2.将图片进行base64的编码, 并且直接编码后的源码放到打包的js文件中
                // 缺点: 造成js文件非常大, 下载js文件本身消耗时间非常长, 造成js代码的下载和解析/执行时间过长
                // type: "asset/inline"

                // 3.合理的规范:
                // 3.1.对于小一点的图片, 可以进行base64编码
                // 3.2.对于大一点的图片, 单独的图片打包, 形成url地址, 单独的请求这个url图片
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024,
                    },
                },
                generator: {
                    // 占位符
                    // name: 指向原来的图片名称
                    // ext: 扩展名
                    // hash: webpack生成的hash
                    filename: "img/[name]_[hash:8][ext]",
                },
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            { test: /\.vue$/, use: ["vue-loader"] },
        ],
    },
    plugins: [
        // 解析 vue 文件需要用到的插件
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin(),
        new DefinePlugin({
            BASE_URL: '"coderwhy"',
        }),
    ],
    // 配置在文件中导入时自动添加的后缀名
    resolve: {
        extensions: [
            ".wasm",
            ".mjs",
            ".js",
            ".json",
            ".jsx",
            ".ts",
            ".vue",
        ],
    },
};
