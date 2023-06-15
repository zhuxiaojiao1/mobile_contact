const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entry, output, loaders, plugins, resolve } = require("./common");

module.exports = {
    entry,
    output: {
        ...output,
        ...{
            chunkFilename: "js/[name]_[hash].js",
            filename: "js/[name]_[hash].js",
        },
    },
    module: {
        rules: [
            ...loaders,
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                // 允许配置生成的本地标识符(ident)
                                localIdentName: "[hash:base64]",
                            },
                        },
                    },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64]",
                            },
                        },
                    },
                    { loader: "postcss-loader" },
                ],
            },
        ],
    },
    resolve,
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({
            filename: "css/[name]_[contenthash].css",
        }),
    ],
    mode: "production",
    devtool: "hidden-source-map",
};
