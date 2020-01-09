const path = require('path');

module.exports = {
  entry: {
    form: './src/js/form.js',
    interaction: './src/js/interaction.js',
    result: './src/js/result.js'
},
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};