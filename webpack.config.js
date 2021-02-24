const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
  },
  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, use: "raw-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
