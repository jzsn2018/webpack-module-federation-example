/*
 * @Date: 2021-09-30 20:01:34
 * @LastEditors: Timothy
 * @LastEditTime: 2021-10-09 14:49:07
 * @Description: 
 */
import {
    mount as productMount,
} from "products/index";
import {
    mount as cartMount
} from "cart/index";

productMount(document.querySelector("#dev-product"));
cartMount(document.querySelector("#dev-cart"));