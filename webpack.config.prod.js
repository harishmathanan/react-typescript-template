const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
