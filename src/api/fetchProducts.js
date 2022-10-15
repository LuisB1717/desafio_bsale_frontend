import { get } from "./shared/get.js";

export async function fetchProducts({ categoryId, valueSearch }) {
  const products = await get(
    `/products?category=${categoryId}&q=${valueSearch}`
  );
  return products;
}
