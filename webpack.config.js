var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.jsx', '.css', '.less', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  entry: {
    main: './src/index.js'      
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 8000,
    // proxy: {
    //   '/vod': {
    //     changeOrigin: true,
    //     // target: 'http://172.18.0.70:8091',
    //     target: 'http://localhost:8091',
    //     pathRewrite: {'^/vod': ''}
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'img/styleResource/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./src/lib/vendor-manifest.json')
    }),
    new HtmlWebpackPlugin(
      {
        hash: true,
        inject: true,
        chunks: ['main'],
        template: './src/index.html',
        filename: 'index.html'
    }),
  ]
}  