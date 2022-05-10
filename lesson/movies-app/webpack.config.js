const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvPlugin = require('webpack-dotenv-plugin');
const path = require('path');

const {generateHtmlViews, isDev, fileName} = require('./utils');

module.exports = (_, {mode}) => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
    },
    output: {
      filename: fileName(isDev(mode), 'js'),
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
    },
    devtool: isDev(mode) && 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      open: true,
      hot: true,
    },
    plugins: [
      ...generateHtmlViews(path.resolve(__dirname, 'src', 'html', 'views')),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: fileName(isDev(mode), 'css'),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
          }
        ],
      }),
      new DotenvPlugin({
        sample: './.env',
      })
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };
}
