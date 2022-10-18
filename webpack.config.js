const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
     mode: 'development',
     entry: './src/App.jsx',
     devtool: 'inline-source-map',
     output: {
          path: path.join(__dirname, '/dist'),
          filename: 'bundle.js',
     },
     devtool: 'inline-source-map',
     devServer: {
          static: './dist',
          historyApiFallback: true,
     },
     module: {
          rules: [
               {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
               },
               {
                    test: /\.(css)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
               },
               {
                    test: /\.(s(a|c)ss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
               },
          ],
     },
     resolve: {
          alias: {
               Components: path.resolve(__dirname, './src/Components'),
               Content: path.resolve(__dirname, './src/Content'),
               Layouts: path.resolve(__dirname, './src/Layouts'),
          },
          extensions: ['.jsx', '.ts', '.js'],
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: './public/index.html',
          }),
     ],
};
