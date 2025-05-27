import { loadHeaderFooter, getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const category = getParam('category');
const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

document.querySelector('.title').textContent = formattedCategory;

loadHeaderFooter();

const dataSource = new ProductData();
const element = document.querySelector('.product-list');
const listing = new ProductList(category, dataSource, element);

listing.init();

const sort = document.querySelector('#sort');
sort.addEventListener('change', (ev) => {
  listing.renderList(ev.target.value);
});
