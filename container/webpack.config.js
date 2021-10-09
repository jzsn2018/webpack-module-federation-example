/*
 * @Date: 2021-09-29 17:32:48
 * @LastEditors: Timothy
 * @LastEditTime: 2021-10-09 11:13:14
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: "development",
  devServer: {
    port: 8080
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name:"container",
      // 配置导入模块映射
      remotes:{
        // 字符串 "products" 和被导入模块的 name 属性值对应
        // 属性 products 是映射别名 实在当前应用中导入该模块时使用的名字
        products:"products@http://localhost:8081/products-remoteEntry.js",
        cart:"cart@http://localhost:8082/cart-remoteEntry.js"
      }
    })
  ]
}