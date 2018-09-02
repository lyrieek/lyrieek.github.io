const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../example-dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../example-dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: 628,
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: false
  }
}
