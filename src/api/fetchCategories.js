import { get } from "./shared/get.js";

/**
 * Obtener categorías desde la API.
 */
export async function fetchCategories() {
  const categories = await get("/categories");
  return categories;
}
