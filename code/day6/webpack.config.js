const path = require("path")
module.exports = {
    entry: "./src/index4.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg|gif|svg|ico)$/, use: ['file-loader']},
            {
                test: /\.js$/, exclude: /node_modules/,
                use: {loader: "babel-loader",
                options:{
                    presets:['env','react']
                }}
            }]
    }
}