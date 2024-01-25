module.exports = function (webpackEnv) {
  // ...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      }
    ]
  }  
  return {
   // ...
    resolve: {
      // ...
      fallback: {
        // 👇️👇️👇️ add this 👇️👇️👇️
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
      }
    }
  }
  
}