var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  watch: true,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Star wars spaceships',
        template: './src/index.html',
        filename: './index.html' 
    })
  ]
};