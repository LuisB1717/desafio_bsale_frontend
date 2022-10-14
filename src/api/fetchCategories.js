import { get } from "./shared/get.js";

export async function fetchCategories() {
  const categories = await get("/categories");
  return categories;
}
