module.exports = {
    jsx: {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    sass: (styleLoader) => ({
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          styleLoader,
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 1 },
          },
          "postcss-loader",
          "sass-loader",
        ],
      })
}