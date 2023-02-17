const { salesService } = require('../services');

const insertSale = async (req, res) => {
  const arrayNewSales = req.body;
  console.log(`arrayNewSales: ${arrayNewSales}`);

  const theSale = await salesService.registerSoldProducts(arrayNewSales);
  console.log(`const theSale ${theSale}`);

  if (!theSale) {
    return { type: 404, message: 'Page not found' };
  }
  res.status(201).json(theSale);
};

const listSales = async (_req, res) => {
  const { message } = await salesService.getAllSales();
  return res.status(200).json(message);
};

const listSearchedSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
  console.log(`message: ${message}`);
  console.log(`type: ${type}`);

  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertSale,
  listSales,
  listSearchedSale,
};