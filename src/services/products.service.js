const { productsModel } = require('../models');
const validation = require('./validations/validateId');

const MSG_UNV = 'Sorry, this page is currently unavailable';

const getAllProducts = async () => {
  const allProducts = await productsModel.showAllProducts();


  return { type: null, message: allProducts };
};

const getSearchedItem = async (id) => {
  const error = validation.validateId(id);
  if (error.type) return error;

  const queryItem = await productsModel.getProductById(id);

  if (queryItem === null) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: 200, message: queryItem[0] };
};

module.exports = {
  getAllProducts,
  getSearchedItem,
};