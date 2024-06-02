// import { products_xx, all_products_xx } from './p1_data_xx.js';

import { _supabase } from "./clientSupabase_34.js";

let products_34 = [];

const getProductsSupabase_34 = async () => {
  try {
    let { data, error } = await _supabase.from("products_34").select("*");
    console.log("products data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector(".products-container");
const companyBtns = document.querySelectorAll(".company-btn");

console.log("products_34", products_34);

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, localImg } = product;
      return `
    <div class="single-product">
    <img
      src=${localImg}
      class="single-product-img img"
      alt=${title}
    />
    <footer>
      <h3 class="name">${title}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
    `;
    })
    .join("");
  productContainer.innerHTML = productsContent;
};

companyBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log("companyName", companyName);
    if (companyName === "all") {
      products_34 = await getProductsSupabase_34();
    } else {
      let { data: company, error1 } = await _supabase
        .from("company_34")
        .select("id")
        .eq("name", companyName);
      console.log("company id", company[0].id);
      let { data, error } = await _supabase
        .from("products_34")
        .select("*")
        .eq("companyId", company[0].id);
        console.log(`${companyName} products`, data)
    }
    displayProducts(products_34);
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  products_34 = await getProductsSupabase_34();
  displayProducts(products_34);
});
