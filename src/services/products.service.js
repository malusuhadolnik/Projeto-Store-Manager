const { productsModel } = require('../models');

const PAGE_NOT_FOUND = 404;
const HTTP_OK = 200;
const MSG_UNV = "Sorry, this page is currently unavailable";

const getAllProducts = async () => {
  const allProducts = await productsModel.showAllProducts();
  if (!allProducts.length) return { type: PAGE_NOT_FOUND, message: MSG_UNV };

  return { type: HTTP_OK, message: allProducts };
};

const getSearchedItem = async () => {
  const queryItem = await productsModel.getProductById();
  if (!queryItem.length) return { type: PAGE_NOT_FOUND, message: "Product not found" };

  return { type: HTTP_OK, message: queryItem };
};

module.exports = {
  getAllProducts,
  getSearchedItem,
};