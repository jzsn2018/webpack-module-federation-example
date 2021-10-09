/*
 * @Date: 2021-10-08 16:50:46
 * @LastEditors: Timothy
 * @LastEditTime: 2021-10-08 17:12:23
 * @Description: 
 */
import faker from 'faker';

function mount(el) {
    let products = "";
    for (let i = 0; i <= 5; i++) {
        products += `<div>${faker.commerce.productName()}</div>`
    }
    el.innerHTML = products;
    console.log('products->hook->mount', Date.now());
}

// 此处代码是 products 应用在本地开发环境下执行
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-product');
    // 开发环境，自动 mount
    if (el) mount(el);
}

export {
    mount
}