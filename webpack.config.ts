const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;



module.exports = {
  mode: 'production',  // 'production' ativa automaticamente a minificação no Webpack
  entry: './src/index.ts',  // Arquivo de entrada em TypeScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.js'],  // Resolve arquivos .ts e .js
  },

  module: {
    rules: [
      {
        test: /\.ts$/,  // Processa arquivos TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Processa arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  optimization: {
    minimize: true,  // Habilita minificação
    minimizer: [
      new TerserPlugin({  // Minifica JavaScript
        terserOptions: {
          compress: {
            drop_console: true,  // Remove console.log no build final
          },
        },
      }),
      new CssMinimizerPlugin(),  // Minifica CSS
    ],
  },
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: '65-80',
      },
      jpegtran: {
        progressive: true,
      },
    }),
  ]
};
