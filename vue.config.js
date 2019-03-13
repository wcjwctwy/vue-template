const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/iview-admin'
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL, //  项目的基本路径
  chainWebpack: config => {
    // 为路径起别名@代表src _c代表src/components
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    proxy: {
      //  匹配代理的url
      '/whtc': {
        // 目标服务器地址
        target: 'http://127.0.0.1:8084',
        //  路径重写
        pathRewrite: { '^/whtc': '/whtc' },
        changeOrigin: true
      }
    }
  }
}
