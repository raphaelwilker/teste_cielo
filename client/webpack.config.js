const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    entry: './main.js',
  },
  devServer:{
    contentBase:  path.join(__dirname, '/'),
    compress: true,
    port: 8080
  },
  plugins: [
    
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
