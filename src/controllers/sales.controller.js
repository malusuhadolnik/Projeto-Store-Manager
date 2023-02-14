const { salesService } = require('../services');

const insertSale = async (req, res) => {
  const arrayNewSales = req.body;
  // console.log(`arrayNewSales: ${arrayNewSales}`);

  const { type, message } = await salesService.insertNewSale(arrayNewSales);
  // console.log(`type in controller: ${type}`);
  // console.log(`message in controller ${message}`);

  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

module.exports = {
 insertSale,
};