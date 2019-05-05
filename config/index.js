const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    host: '127.0.0.1',
    port: 628,
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: false
  }
}
