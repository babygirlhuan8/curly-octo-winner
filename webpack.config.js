const path = require('path');
const root = path.resolve(__dirname, '.'); // 项目的根目录绝对路径
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(root, 'src/index.js'),  // 入口文件路径
    output: {
        path: path.join(root, 'dist'),  // 出口目录
        filename: 'main.js'  // 出口文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        'less':[//lang属性对应的名称
                            'vue-style-loader',//首先给vue的样式loader过滤一遍
                            'css-loader',//css-loader,把css转js
                            'less-loader'//用less编译
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            } // .js文件使用babel-loader，切记排除node_modules目录
        ]
    },
    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        // 用于查找模块的目录
        extensions: [".js", ".json", ".jsx", ".css", ".vue"],
        // 使用的扩展名
        alias: {
            // 模块别名列表
            "vue": "vue/dist/vue.js"
            // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
            //   "only-module$": "new-module",
            // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
            //   "module": path.resolve(__dirname, "app/third/module.js"),
            // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
            // 模块别名相对于当前上下文导入
        },
        /* 可供选择的别名语法（点击展示） */
        /* 高级解析选项（点击展示） */
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        hash: true
    })]
};