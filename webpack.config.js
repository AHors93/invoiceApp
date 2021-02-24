const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.(png|svg|jpg|jpeg|gif)$/i, use: "raw-loader" }],
  },
};
