const { entry, output, loaders, plugins, resolve } = require("./common");

module.exports = {
    entry,
    output,
    module: {
        rules: [
            ...loaders,
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    { loader: "postcss-loader" },
                    { loader: "resolve-url-loader" },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]",
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
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        compress: true,
        host: "0.0.0.0",
        port: "auto",
        hot: true,
        open: true,
    },
};
