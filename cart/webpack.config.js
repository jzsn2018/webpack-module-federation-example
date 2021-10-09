/*
 * @Date: 2021-09-29 17:32:48
 * @LastEditors: Timothy
 * @LastEditTime: 2021-10-09 15:14:46
 * @Description: 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: "development",
  devServer: {
    port: 8082
  },
  devtool: "source-map",
  plugins: [
    // 将product自身当做模块暴露出去
    new ModuleFederationPlugin({
      library:{type:"var",name:"cart"},
      // 模块文件名称，其他应用引入当前模块时需要加载的文件名称
      filename: "cart-remoteEntry.js",
      // 模块名称，具有唯一性，相当于 single-spa中的组织名称
      name: "cart",
      // 当前模块具体导出的内容
      exposes:{
        "./index": "./src/bootstrap.cart.js"
      },
      shared: {
        faker:{
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

// 在模块应用中要如何引入产品列表应用模块？
// 1.在容器应用中加载产品列表应用的模块文件
// 2.在容器应用中通过 import 关键字从模块文件中导入产品列表