/*
 * @Date: 2021-10-08 16:58:54
 * @LastEditors: Timothy
 * @LastEditTime: 2021-10-08 17:38:56
 * @Description: 
 */
import faker from 'faker';

function mount(el) {
    console.log('cart-app->hook->mount', Date.now());
    el.innerHTML = `在您的购物车中有${faker.datatype.number()}件商品`;
}

// 此处代码是 products 应用在本地开发环境下执行
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    // 开发环境，自动 mount
    if (el) mount(el);
}

export {
    mount
}