import { fetchCategories } from "./src/api/fetchCategories.js";
import { fetchProducts } from "./src/api/fetchProducts.js";

const productCard = document.getElementById("card-container");
const categoryInput = document.getElementById("categories");
const textInput = document.getElementById("search-text");
const contentNoFound = document.getElementById("content-no-found");
const loadingContainer = document.getElementById("loading-container");
const header = document.getElementById("header-container");

const img404 = "/img/404.jpg";

async function getProducts() {
  const text = textInput.value;
  const category = categoryInput.value;
  const products = await fetchProducts({
    categoryId: category,
    valueSearch: text,
  });

  return products;
}

async function render() {
  const products = await getProducts();
  header.classList.remove("inactive");
  loadingContainer.classList.add("loading");

  if (textInput.value.length != 0 && products.length == 0) {
    contentNoFound.classList.remove("inactive");
    productCard.classList.add("inactive");
    const div = ` <p>No se encontraron resultados para ${textInput.value} </p>`;
    contentNoFound.innerHTML = div;
  } else {
    contentNoFound.classList.add("inactive");
    productCard.classList.remove("inactive");
    const viewCard = `
              ${products
                .map(
                  (product) => `
                <div class="product-card" id="card">
                <div class="card-content">
                  <img
                    src="${product.url_image || img404} "
                    alt=""
                  />
                  <p>${product.name}</p>
                  <div class="container-info">
                    <div class="product-info">
                      <span>S/${product.price}</span>
                      <button class="icon-button">
                        <div class="icon"><i class="fa-solid fa-cart-plus"></i></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              `
                )
                .slice(0, products.length)
                .join("")}    
          `;
    productCard.innerHTML = viewCard;
  }
}

(async () => {
  try {
    const categories = await fetchCategories();
    categories.unshift({ id: "0", name: "todos" });

    const viewOptions = `
        ${categories.map(
          (category) => `
        <option value=${category.id}>${category.name}</option>
        `
        )}    
    `;
    categoryInput.innerHTML = viewOptions;
    render();
  } catch (error) {
    console.log(error);
  }
})();

function debounce(callback, time = 300) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, time);
  };
}

const renderDebounced = debounce(render);

textInput.addEventListener("keyup", () => {
  categoryInput.value = "0";
  renderDebounced();
});

categoryInput.addEventListener("change", render);
