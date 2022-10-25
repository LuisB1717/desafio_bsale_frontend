import { get } from "./shared/get.js";

export async function fetchProducts({ categoryId, valueSearch }) {
  const modifier = categoryId == "0" ? "" : `&category=${categoryId}`;
  const path = `/products?q=${valueSearch}${modifier}`;

  const products = await get(path);
  return products;
}
