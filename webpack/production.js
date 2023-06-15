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
    plugins,
    mode: "production",
    devtool: "hidden-source-map",
};
