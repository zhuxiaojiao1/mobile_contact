const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = {
    app: "./src/index.tsx",
};

const output = {
    path: path.join(__dirname, "../build"),
    clean: true,
    publicPath: "/",
    chunkFilename: "js/[name].js",
    filename: "js/[name].js",
};

const loaders = [
    {
        test: /\.(ico|woff2?|pdf|eot|ttf|svg|opentype|otf)$/,
        type: "asset/resource",
        generator: {
            filename: "/[name][ext][query]",
        },
    },
    {
        test: /\.(png|jpe?g)$/,
        type: "asset/resource",
        generator: {
            filename: "assets/[name][ext][query]",
        },
    },
    {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
];

const resolve = {
    alias: {
        "~": "/src",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
};

const plugins = [
    new HtmlWebpackPlugin({
        title: "MobileContacts",
        template: "./public/index.html",
    }),
];

module.exports = {
    entry,
    output,
    loaders,
    resolve,
    plugins,
};
