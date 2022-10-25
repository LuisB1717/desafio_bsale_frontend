import { get } from "./shared/get.js";

/**
 * Obtener todos los productos o por categoría desde la API.
 * @param {filters} object
 * @param {categoryId} string
 * @param {valueSearch} string
 */
export async function fetchProducts({ categoryId, valueSearch }) {
  const modifier = categoryId == "0" ? "" : `&category=${categoryId}`;
  const path = `/products?q=${valueSearch}${modifier}`;

  const products = await get(path);
  return products;
}
