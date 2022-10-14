import { get } from "./shared/get.js";

export async function fetchProductsByCategory() {
  const products = await get("/products?category=6&q=p");
  return products;
}
