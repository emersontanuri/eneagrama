const path = require("path");

module.exports = {
    entry: {
        index: "./src/js/index.js",
        dicas: "./src/js/dicas.js",
        form: "./src/js/form.js",
        result: "./src/js/result.js",
        types: "./src/js/types.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/js/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};
