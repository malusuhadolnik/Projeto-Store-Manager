const { productsModel } = require('../models');
const validation = require('./validations/validateId');
const { validateName } = require('./validations/validateName');

const getAllProducts = async () => {
  const allProducts = await productsModel.showAllProducts();

  return { type: null, message: allProducts };
};

const getSearchedItem = async (id) => {
  const error = validation.validateId(id);
  if (error.type) return error;

  const queryItem = await productsModel.getProductById(id);

  if (queryItem) {
    return { type: null, message: queryItem };
  }
  return { type: 404, message: 'Product not found' };
};

const insertItem = async (name) => {
  const error = validateName(name);
  if (error.type) return error;
  console.log(typeof { error });

  const newProduct = await productsModel.insertNewProducts(name);
  const getTheNewProduct = await productsModel.getProductByName(name);

  if (newProduct) {
    return { type: 201, message: getTheNewProduct };
  }
  return { type: 404, message: 'product not found' };
};

module.exports = {
  getAllProducts,
  getSearchedItem,
  insertItem,
};