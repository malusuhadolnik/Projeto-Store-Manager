const { productsService } = require('../services');

const listAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const listSearchedItem = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getSearchedItem(id);
  
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listSearchedItem,
};