const { productsService } = require('../services');

const listAllProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();
  if (type === 404) return res.status(type).json(message);
  return res.status(200).json(message);
};

const listSearchedItem = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getSearchedItem(id);

  if (type === 404) return res.status(type).json(message);
  return res.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listSearchedItem,
};