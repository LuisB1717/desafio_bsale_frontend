import { fetchCategories } from "./src/api/fetchCategories.js";
import { fetchProductsByCategory } from "./src/API/fetchProducts.js";

const categories = await fetchProductsByCategory();
const products = await fetchCategories();

console.log(categories);
console.log(products);
