const { productsModel } = require('../models');

const MSG_UNV = 'Sorry, this page is currently unavailable';

const getAllProducts = async () => {
  const allProducts = await productsModel.showAllProducts();
  if (!allProducts.length) return { type: 404, message: MSG_UNV };

  return { type: 200, message: allProducts };
};

const getSearchedItem = async (id) => {
  const queryItem = await productsModel.getProductById(id);
  if (!queryItem.length) return { type: 404, message: 'Product not found' };

  return { type: 200, message: queryItem };
};

module.exports = {
  getAllProducts,
  getSearchedItem,
};