module.exports = {
  
  // This code will be compiled 
  entry: ['whatwg-fetch', "./app/index.js"],
  // Then output into this file
  output: {
    filename: "./public/bundle.js"
  },

  node: {
    dns: "mock",
    net: "mock"
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  //this lets us debug our react code in chrome dev tools. Erros will have lines and file names
  //without this, the console says all errors are coming from just bundle.js
  devtool: "eval-source-map"
};