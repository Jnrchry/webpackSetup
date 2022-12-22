const path = require("path");
const HtmlWebpackPulgin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPulgin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\.node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
