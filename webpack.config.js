const path = require("path");

module.exports = {
    entry: ["./app/js/index.js"],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    },
    devServer: {
        publicPath: '/dist/',
        contentBase: path.join(__dirname, "./app/views"),
        watchContentBase: true,
        compress: true,
        port: 9001
    }
};
