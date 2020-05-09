var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    // pathinfo: true,
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true'
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  externals: {
    react: "react"
  }
};