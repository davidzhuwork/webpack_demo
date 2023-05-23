const path = require("path");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                // 告诉webpack要匹配什么文件, 使用正则表达式(处理以 .css 结尾的文件)
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                ],
                /*
                简写1：如果 loader 只有一个
                    loader: "css-loader" 
                简写2：不需要使用除了 loader 外的其他属性时，可以直接写 loader 的字符串形式
                    use: ["style-loader", "css-loader"]
                 */
            },
            // 配置处理以 .less 结尾的文件的loader
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
            },
        ],
    },
};
