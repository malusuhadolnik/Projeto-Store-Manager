const { productsModel } = require('../models');
const validation = require('./validations/validateId');

const getAllProducts = async () => {
  const allProducts = await productsModel.showAllProducts();

  return { type: null, message: allProducts };
};

const getSearchedItem = async (id) => {
  const error = validation.validateId(id);
  if (error.type) return error;
  console.log(`service id ${id}`);

  const queryItem = await productsModel.getProductById(id);
  console.log(`queryItem ${queryItem}`);

  if (queryItem === undefined) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: 200, message: queryItem };
};

const insertItem = async (name) => {
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