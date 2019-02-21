module.exports = {
  watch: true,
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: __dirname + '/docs'
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};