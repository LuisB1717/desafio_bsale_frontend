import config from "../../config.js";

const baseUrl = config.API_URL;

export async function get(path) {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const body = await response.json();
  return body;
}
