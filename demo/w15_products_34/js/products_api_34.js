//  import { products_xx, all_products_xx } from './p1_data_34.js';

const url ='https://www.course-api.com/javascript-store-products';

let products_34 = [];

const productContainer = document.querySelector('.products-container');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('fetchData', data); 
    return data;
  } catch(error){
    console.log(error); 
  }
};

console.log('products_34', products_34);

const displayProducts = (products) => {
  let productsContent = products
  .map((product) => {
    const{name, price, image } = product.fields;
    return`
    <div class="single-product">
    <img
      src=${image[0].url}
      class="single-product-img img"
      alt=${name}
    />
    <footer>
      <h3 class="name">${name}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
    `;
  })
   .join('');
 productContainer.innerHTML = productsContent;
};


document.addEventListener('DOMContentLoaded',async () => {
  products_34 = await fetchData(url);
  displayProducts(products_34);
});
