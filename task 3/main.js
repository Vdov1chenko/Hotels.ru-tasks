import { filterProducts } from "./filterProducts.mjs";

console.log(filterProducts("name-contains-4&description-ends-abc"));  // 'Product 4'
console.log(filterProducts("price->=-20&quantity-=-5")); //  'Product 2'