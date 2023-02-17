const { productsService } = require('../services');

const listAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const listSearchedItem = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getSearchedItem(id);

  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const insertNewItem = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.insertItem(name);
  console.log(typeof message);

 let theMessage = message;
  if (typeof message === 'string') {
    theMessage = { message };
  }

  if (type) return res.status(type).json(theMessage);
  res.status(201).json(message);
};

const updateProductName = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.updateProductNameById(name, id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listSearchedItem,
  insertNewItem,
  updateProductName,
};