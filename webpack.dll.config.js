const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')

module.exports = {
  mode: 'production',

  entry: {
    vendor: ['vue', 'vue-router', 'vuex', 'axios', 'fastclick', 'moment']
  },

  output: {
    filename: '[name].dll.js',
    library,
    path: path.join(__dirname, 'src/lib')
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'src/lib/[name]-manifest.json'),
      // This must match the output.library option above
      name: library
    })
  ],
}