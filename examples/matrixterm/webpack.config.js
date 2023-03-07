const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
    target: 'node',
    // bundling mode
    mode: "none",
    resolve: "preferRelative",
    // entry files
    entry: {
        Main: {
            import: ["./src/matrixterm.ts"]
        },
    },

    // output bundles (location)
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/",
        globalObject: 'this'
    },

    // file resolutions
    resolve: {
        extensions: [".ts", ".js"],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /(node_modules)|(ts\/types)/,
            },
            { test: /\.d.ts$/, use: "raw-loader" },
        ],
    },
    optimization: {
        minimize: false,
    },
    //We can ignore these warnings. 
    ignoreWarnings: [
        /possible exports/
    ],
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: "[name].js.map",
        }),
    ]
};
